import React from 'react';
import { ScriptProduct, NewsArticle, TriggeredAlert } from '../../types';
import { HistoricalPriceChartCard } from './HistoricalPriceChartCard';
import { PredictionsVisualizationCard } from './PredictionsVisualizationCard';
import { SentimentVisualizationCard } from './SentimentVisualizationCard';
import { CompanyFinancialsCard } from '../CompanyFinancialsCard';
import { MarketDepthCard } from '../MarketDepthCard';
import { FloorSheetCard } from '../FloorSheetCard';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  ShieldCheck,
  Newspaper,
  Target,
  Layers,
  ArrowRight,
  Database,
  BarChart3,
  RefreshCw,
  Scale,
  FileSpreadsheet
} from 'lucide-react';

interface DataVisualizationDashboardProps {
  scripts: ScriptProduct[];
  newsArticles: NewsArticle[];
  alerts: TriggeredAlert[];
  selectedSymbol: string;
  onSelectSymbol: (symbol: string) => void;
  onSwitchToForecast: () => void;
  onTriggerSync: () => void;
  isSyncing: boolean;
  lastSyncTime: string;
}

export const DataVisualizationDashboard: React.FC<DataVisualizationDashboardProps> = ({
  scripts,
  newsArticles,
  alerts,
  selectedSymbol,
  onSelectSymbol,
  onSwitchToForecast,
  onTriggerSync,
  isSyncing,
  lastSyncTime
}) => {
  // Aggregate Metrics across the entire system
  const totalProducts = scripts.length;
  const increasePredictions = scripts.filter(s => s.prediction.direction === 'INCREASE').length;
  const decreasePredictions = scripts.filter(s => s.prediction.direction === 'DECREASE').length;
  const neutralPredictions = scripts.filter(s => s.prediction.direction === 'NEUTRAL').length;
  
  const avgConfidence = Math.round(
    scripts.reduce((acc, s) => acc + s.prediction.confidencePercentage, 0) / Math.max(1, totalProducts)
  );

  const bullishNewsCount = newsArticles.filter(a => a.sentiment === 'BULLISH').length;
  const netSentimentScore = Math.round(
    (newsArticles.reduce((acc, a) => acc + a.sentimentScore, 0) / Math.max(1, newsArticles.length)) * 100
  );

  const activeScript = scripts.find(s => s.symbol === selectedSymbol) || scripts[0];

  return (
    <div className="space-y-6">
      
      {/* Top Welcome / Dashboard Orientation Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-850 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-8 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                Data Visualization & Analytics
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Synced at {lastSyncTime}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Market Prediction & Sentiment Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Interactive visual analytics aggregating price history, AI price increase/decrease forecasts, and multi-portal news sentiment across Nepal Stock Exchange (NEPSE) scripts.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onTriggerSync}
              disabled={isSyncing}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-all flex items-center gap-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-emerald-400' : 'text-slate-400'}`} />
              <span>{isSyncing ? 'Re-scraping...' : 'Sync Scrapers'}</span>
            </button>

            <button
              onClick={onSwitchToForecast}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              <span>Inspect Script Forecast</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Global KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-800/80">
          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[11px] text-slate-400 block font-medium">Tracked Products</span>
            <div className="text-lg font-bold font-mono text-white mt-0.5">
              {totalProducts} Assets
            </div>
            <span className="text-[10px] text-slate-400">
              Banks, Hydro, Mfg, Microfinance
            </span>
          </div>

          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[11px] text-slate-400 block font-medium">Overall Prediction Bias</span>
            <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>{Math.round((increasePredictions / totalProducts) * 100)}% Bullish Bias</span>
            </div>
            <span className="text-[10px] text-slate-400">
              {increasePredictions} Increase • {decreasePredictions} Decrease • {neutralPredictions} Neutral
            </span>
          </div>

          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[11px] text-slate-400 block font-medium">Model Avg Confidence</span>
            <div className="text-lg font-bold font-mono text-indigo-400 mt-0.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>{avgConfidence}% High Reliability</span>
            </div>
            <span className="text-[10px] text-slate-400">
              Validated on historical backtests
            </span>
          </div>

          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[11px] text-slate-400 block font-medium">News Sentiment Index</span>
            <div className="text-lg font-bold font-mono text-teal-400 mt-0.5 flex items-center gap-1.5">
              <Newspaper className="w-4 h-4" />
              <span>+{netSentimentScore}% Positive</span>
            </div>
            <span className="text-[10px] text-slate-400">
              {bullishNewsCount} of {newsArticles.length} articles positive
            </span>
          </div>
        </div>
      </div>

      {/* 1. Historical Price Data & Interactive Charts Module */}
      <HistoricalPriceChartCard
        scripts={scripts}
        selectedSymbol={selectedSymbol}
        onSelectSymbol={onSelectSymbol}
      />

      {/* 2. App's Price Increase / Decrease Predictions Module */}
      <PredictionsVisualizationCard
        scripts={scripts}
        selectedSymbol={selectedSymbol}
        onSelectSymbol={onSelectSymbol}
      />

      {/* 3. Aggregated News Sentiment Analysis Module */}
      <SentimentVisualizationCard
        articles={newsArticles}
        scripts={scripts}
        selectedSymbol={selectedSymbol}
        onSelectSymbol={onSelectSymbol}
      />

      {/* 4. Live Market Depth & Market Debt Pressure */}
      <MarketDepthCard
        depth={activeScript.marketDepth}
        symbol={activeScript.symbol}
        currentPrice={activeScript.currentPrice}
      />

      {/* 5. Live NEPSE Floor Sheet Trades Stream */}
      <FloorSheetCard
        selectedSymbol={activeScript.symbol}
        onSelectSymbol={onSelectSymbol}
      />

      {/* 6. Comprehensive Financial Details, Dividends, Right Shares & Reports */}
      <CompanyFinancialsCard
        script={activeScript}
      />

      {/* Bottom Cross-Navigation & Quick Action */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-white">
            Currently Focused Script: <span className="text-emerald-400">{activeScript.symbol}</span> ({activeScript.name})
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Switch to the Forecast Deep-Dive view to inspect live cross-source scraper consensus, order book depth, and technical indicators.
          </p>
        </div>

        <button
          onClick={onSwitchToForecast}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <span>Open {activeScript.symbol} Full Forecast</span>
          <ArrowRight className="w-4 h-4 text-emerald-400" />
        </button>
      </div>

    </div>
  );
};
