import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ScriptProduct, NewsArticle, TriggeredAlert, MarketAlertRule, NepseTodayPriceItem } from './types';
import {
  fetchAllScripts,
  triggerAutoSync,
  requestDeepPrediction,
  fetchNewsArticles,
  analyzeNewsSentiment,
  fetchAlerts,
  createAlertRule,
  deleteAlertRule,
  markAlertAsRead,
  fetchNepseTodayPrices
} from './services/api';
import { Header } from './components/Header';
import { RealtimeStatusBar } from './components/RealtimeStatusBar';
import { ScriptSelector } from './components/ScriptSelector';
import { PredictionHero } from './components/PredictionHero';
import { MarketDepthCard } from './components/MarketDepthCard';
import { FloorSheetCard } from './components/FloorSheetCard';
import { CompanyFinancialsCard } from './components/CompanyFinancialsCard';
import { MultiSourceScraperCard } from './components/MultiSourceScraperCard';
import { TechnicalAnalysisCard } from './components/TechnicalAnalysisCard';
import { NewsSentimentCard } from './components/NewsSentimentCard';
import { MarketAlertsDrawer } from './components/MarketAlertsDrawer';
import { AccuracyBacktestModal } from './components/AccuracyBacktestModal';
import { DataVisualizationDashboard } from './components/dashboard/DataVisualizationDashboard';
import { NepseTodayPriceCard } from './components/NepseTodayPriceCard';
import { AlertCircle, CheckCircle, RefreshCw, BarChart3, Building, Target } from 'lucide-react';

export default function App() {
  const [scripts, setScripts] = useState<ScriptProduct[]>([]);
  const [todayPrices, setTodayPrices] = useState<NepseTodayPriceItem[]>([]);
  const [selectedSymbol, setSelectedSymbol] = useState<string>('NABIL');
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [alerts, setAlerts] = useState<TriggeredAlert[]>([]);
  const [alertRules, setAlertRules] = useState<MarketAlertRule[]>([]);
  const [currentView, setCurrentView] = useState<'dashboard' | 'forecast' | 'today-price'>('dashboard');
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Initializing...');
  const [autoSyncEnabled, setAutoSyncEnabled] = useState<boolean>(true);
  const [syncInterval, setSyncInterval] = useState<number>(10); // seconds

  const [isAlertsDrawerOpen, setIsAlertsDrawerOpen] = useState<boolean>(false);
  const [isAccuracyModalOpen, setIsAccuracyModalOpen] = useState<boolean>(false);
  const [notificationToast, setNotificationToast] = useState<{ message: string; type: 'success' | 'alert' } | null>(null);

  const prevAlertsCount = useRef(0);

  // Play subtle web audio chime for market alerts
  const playAlertChime = useCallback(() => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {
      // Audio context might be restricted before user gesture
    }
  }, []);

  // Show temporary toast notification
  const showToast = useCallback((message: string, type: 'success' | 'alert' = 'success') => {
    setNotificationToast({ message, type });
    setTimeout(() => setNotificationToast(null), 4000);
  }, []);

  // Load initial data
  const loadInitialData = async () => {
    try {
      setIsLoading(true);
      const [fetchedScripts, fetchedNews, fetchedAlerts, fetchedTodayPrices] = await Promise.all([
        fetchAllScripts(),
        fetchNewsArticles(),
        fetchAlerts(),
        fetchNepseTodayPrices()
      ]);

      setScripts(fetchedScripts);
      setNewsArticles(fetchedNews);
      setAlerts(fetchedAlerts.triggered);
      setAlertRules(fetchedAlerts.rules);
      setTodayPrices(fetchedTodayPrices.data);
      prevAlertsCount.current = fetchedAlerts.triggered.length;
      setLastSyncTime(new Date().toLocaleTimeString('en-US', { hour12: false }) + ' NPT');
    } catch (err) {
      console.error('Failed to load initial data:', err);
      showToast('Could not reach prediction backend server', 'alert');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  // Trigger web scraping sync
  const handleTriggerSync = useCallback(async () => {
    if (isSyncing) return;
    try {
      setIsSyncing(true);
      const syncResult = await triggerAutoSync();
      const [updatedScripts, updatedAlerts, updatedTodayPrices] = await Promise.all([
        fetchAllScripts(),
        fetchAlerts(),
        fetchNepseTodayPrices()
      ]);

      setScripts(updatedScripts);
      setAlerts(updatedAlerts.triggered);
      setTodayPrices(updatedTodayPrices.data);
      setLastSyncTime(syncResult.lastSyncTime);

      // Check if new alert was fired
      if (updatedAlerts.triggered.length > prevAlertsCount.current) {
        const latest = updatedAlerts.triggered[0];
        playAlertChime();
        showToast(`Market Alert: ${latest.title}`, 'alert');
      }
      prevAlertsCount.current = updatedAlerts.triggered.length;
    } catch (err) {
      console.error('Auto sync error:', err);
    } finally {
      setIsSyncing(false);
    }
  }, [isSyncing, playAlertChime, showToast]);

  // Periodic Auto-Sync Timer
  useEffect(() => {
    if (!autoSyncEnabled) return;
    const interval = setInterval(() => {
      handleTriggerSync();
    }, syncInterval * 1000);
    return () => clearInterval(interval);
  }, [autoSyncEnabled, syncInterval, handleTriggerSync]);

  // Deep AI Prediction Evaluation with Gemini
  const handleRunDeepAnalysis = async (symbol: string) => {
    try {
      setIsAnalyzing(true);
      const updatedPrediction = await requestDeepPrediction(symbol);
      setScripts(prev =>
        prev.map(s => (s.symbol === symbol ? { ...s, prediction: updatedPrediction } : s))
      );
      showToast(`AI forecast updated for ${symbol}: ${updatedPrediction.direction} (${updatedPrediction.confidencePercentage}% confidence)`, 'success');
    } catch (err) {
      console.error('Gemini prediction error:', err);
      showToast('AI analysis request timed out, using mathematical model', 'alert');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Custom News Sentiment Analysis
  const handleAnalyzeCustomNews = async (payload: {
    title: string;
    summary?: string;
    source?: string;
    relevantScript?: string;
  }) => {
    try {
      const res = await analyzeNewsSentiment(payload);
      setNewsArticles(prev => [res.article, ...prev]);
      showToast(`Analyzed sentiment for ${payload.relevantScript || 'NEPSE'}: ${res.article.sentiment} (${res.article.sentimentScore})`, 'success');
      // Trigger price re-sync to reflect new news catalyst
      handleTriggerSync();
    } catch (err) {
      console.error('Custom news analysis error:', err);
      showToast('Failed to analyze sentiment', 'alert');
    }
  };

  // Alert Rules Management
  const handleCreateRule = async (rule: {
    scriptSymbol: string;
    triggerType: string;
    thresholdValue: number;
    conditionDescription?: string;
  }) => {
    try {
      const created = await createAlertRule(rule);
      setAlertRules(prev => [...prev, created]);
      showToast(`Alert trigger activated for ${created.scriptSymbol}`, 'success');
    } catch (err) {
      console.error('Rule creation error:', err);
      showToast('Failed to create alert rule', 'alert');
    }
  };

  const handleDeleteRule = async (id: string) => {
    try {
      await deleteAlertRule(id);
      setAlertRules(prev => prev.filter(r => r.id !== id));
      showToast('Alert trigger removed', 'success');
    } catch (err) {
      console.error('Rule deletion error:', err);
    }
  };

  const handleMarkAlertRead = async (id: string | 'all') => {
    try {
      await markAlertAsRead(id);
      setAlerts(prev =>
        prev.map(a => (id === 'all' || a.id === id ? { ...a, isRead: true } : a))
      );
    } catch (err) {
      console.error('Mark read error:', err);
    }
  };

  const selectedScript = scripts.find(s => s.symbol === selectedSymbol) || scripts[0] || null;

  if (isLoading && scripts.length === 0) {
    return (
      <div className="min-h-screen bg-[#0b0f17] flex flex-col items-center justify-center text-slate-300">
        <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin mb-3" />
        <h2 className="text-base font-bold text-white">Prediction App Loading...</h2>
        <p className="text-xs text-slate-400 mt-1">Connecting to Merolagani, ShareSansar, NepaliPaisa & NEPSE scraper feeds</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col">
      
      {/* Toast Notification */}
      {notificationToast && (
        <div className={`fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl shadow-2xl border text-xs font-semibold flex items-center gap-2.5 transition-all animate-in slide-in-from-bottom-5 ${
          notificationToast.type === 'alert'
            ? 'bg-rose-950/90 text-rose-200 border-rose-500/50'
            : 'bg-slate-900/95 text-emerald-300 border-emerald-500/50'
        }`}>
          {notificationToast.type === 'alert' ? <AlertCircle className="w-4 h-4 text-rose-400" /> : <CheckCircle className="w-4 h-4 text-emerald-400" />}
          <span>{notificationToast.message}</span>
        </div>
      )}

      {/* Top Header */}
      <Header
        scripts={scripts}
        selectedScript={selectedScript}
        onSelectScript={(s) => setSelectedSymbol(s.symbol)}
        isSyncing={isSyncing}
        onTriggerSync={handleTriggerSync}
        lastSyncTime={lastSyncTime}
        autoSyncEnabled={autoSyncEnabled}
        onToggleAutoSync={() => setAutoSyncEnabled(!autoSyncEnabled)}
        syncInterval={syncInterval}
        alerts={alerts}
        onOpenAlerts={() => setIsAlertsDrawerOpen(true)}
        onOpenAccuracy={() => setIsAccuracyModalOpen(true)}
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      {/* Real-time Status and Auto-Sync Controller */}
      <RealtimeStatusBar
        isSyncing={isSyncing}
        lastSyncTime={lastSyncTime}
        autoSyncEnabled={autoSyncEnabled}
        onToggleAutoSync={() => setAutoSyncEnabled(!autoSyncEnabled)}
        onTriggerSync={handleTriggerSync}
        syncInterval={syncInterval}
        onChangeInterval={(sec) => setSyncInterval(sec)}
      />

      {/* Main App Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 pb-20 sm:pb-6 space-y-6">
        
        {currentView === 'today-price' ? (
          /* Official NEPSE Today's Price View (nepalstock.com/today-price) */
          <NepseTodayPriceCard
            todayPrices={todayPrices}
            selectedSymbol={selectedSymbol}
            onSelectSymbol={(symbol) => {
              setSelectedSymbol(symbol);
              setCurrentView('forecast');
            }}
            onTriggerSync={handleTriggerSync}
            isSyncing={isSyncing}
          />
        ) : currentView === 'dashboard' ? (
          /* Dedicated Interactive Data Visualization Dashboard */
          <DataVisualizationDashboard
            scripts={scripts}
            newsArticles={newsArticles}
            alerts={alerts}
            selectedSymbol={selectedSymbol}
            onSelectSymbol={setSelectedSymbol}
            onSwitchToForecast={() => setCurrentView('forecast')}
            onTriggerSync={handleTriggerSync}
            isSyncing={isSyncing}
            lastSyncTime={lastSyncTime}
          />
        ) : (
          /* Live Script Forecast & Scraper Deep-Dive */
          <>
            {/* Script Carousel & Sector Filter */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-white tracking-tight">
                    Individual Script Forecast Deep-Dive
                  </h2>
                  <p className="text-xs text-slate-400">
                    Real-time multi-source scraping, technical order book depth, and AI catalysts
                  </p>
                </div>
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                >
                  <span>← Open Full Analytics Dashboard</span>
                </button>
              </div>

              <ScriptSelector
                scripts={scripts}
                selectedSymbol={selectedSymbol}
                onSelectScript={(s) => setSelectedSymbol(s.symbol)}
              />
            </div>

            {selectedScript ? (
              <div className="space-y-6">
                {/* 1. Core Hero Prediction View with Today Price & nepalstock.com Source */}
                <PredictionHero
                  script={selectedScript}
                  onRunDeepAnalysis={handleRunDeepAnalysis}
                  isAnalyzing={isAnalyzing}
                />

                {/* 2. Real-Time Market Depth & Market Debt Pressure */}
                <MarketDepthCard
                  depth={selectedScript.marketDepth}
                  symbol={selectedScript.symbol}
                  currentPrice={selectedScript.currentPrice}
                />

                {/* 3. Real-Time Live NEPSE Floor Sheet Trades Stream */}
                <FloorSheetCard
                  selectedSymbol={selectedScript.symbol}
                  onSelectSymbol={setSelectedSymbol}
                />

                {/* 4. Complete Company Financials: Dividends, Right Shares, Fundamentals & Reports */}
                <CompanyFinancialsCard script={selectedScript} />

                {/* 5. Real-Time Multi-Source Scraper Consensus Card */}
                <MultiSourceScraperCard script={selectedScript} />

                {/* 6. Technical Tools & News Sentiment 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Technical Analysis & Historical Chart (7 cols) */}
                  <div className="lg:col-span-7">
                    <TechnicalAnalysisCard script={selectedScript} />
                  </div>

                  {/* News Sentiment Analysis & Scanner (5 cols) */}
                  <div className="lg:col-span-5">
                    <NewsSentimentCard
                      articles={newsArticles}
                      selectedScript={selectedScript}
                      onAnalyzeCustomNews={handleAnalyzeCustomNews}
                    />
                  </div>

                </div>
              </div>
            ) : (
              <div className="text-center py-20 text-slate-400">
                No script selected. Please select a script from the top carousel.
              </div>
            )}
          </>
        )}

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800/80 bg-slate-950/60 py-4 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span>Prediction App • Price Increase/Decrease Forecast System</span>
          <span>Aggregating Merolagani, ShareSansar, NepaliPaisa, NEPSE</span>
          <span>Powered by Gemini 3.8 Flash</span>
        </div>
      </footer>

      {/* Mobile Fixed Bottom Navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0b0f17]/95 border-t border-slate-800 backdrop-blur-md px-3 py-1.5 flex items-center justify-around">
        <button
          id="mobile-nav-dashboard"
          onClick={() => setCurrentView('dashboard')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-semibold transition-colors ${
            currentView === 'dashboard' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Dashboard</span>
        </button>
        <button
          id="mobile-nav-today-price"
          onClick={() => setCurrentView('today-price')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-semibold transition-colors ${
            currentView === 'today-price' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Today's Price</span>
        </button>
        <button
          id="mobile-nav-forecast"
          onClick={() => setCurrentView('forecast')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-semibold transition-colors ${
            currentView === 'forecast' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>Forecasts</span>
        </button>
      </nav>

      {/* Market Shift Alerts Drawer */}
      <MarketAlertsDrawer
        isOpen={isAlertsDrawerOpen}
        onClose={() => setIsAlertsDrawerOpen(false)}
        alerts={alerts}
        alertRules={alertRules}
        scripts={scripts}
        onMarkRead={handleMarkAlertRead}
        onCreateRule={handleCreateRule}
        onDeleteRule={handleDeleteRule}
      />

      {/* Accuracy & Backtest Scorecard Modal */}
      <AccuracyBacktestModal
        isOpen={isAccuracyModalOpen}
        onClose={() => setIsAccuracyModalOpen(false)}
      />

    </div>
  );
}
