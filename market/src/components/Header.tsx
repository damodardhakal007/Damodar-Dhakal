import React, { useState, useEffect } from 'react';
import { Activity, RefreshCw, Bell, Search, TrendingUp, ShieldCheck, CheckCircle2, AlertTriangle, ExternalLink, BarChart3, Target, Building } from 'lucide-react';
import { ScriptProduct, TriggeredAlert } from '../types';

interface HeaderProps {
  scripts: ScriptProduct[];
  selectedScript: ScriptProduct | null;
  onSelectScript: (script: ScriptProduct) => void;
  isSyncing: boolean;
  onTriggerSync: () => void;
  lastSyncTime: string;
  autoSyncEnabled: boolean;
  onToggleAutoSync: () => void;
  syncInterval: number; // in seconds
  alerts: TriggeredAlert[];
  onOpenAlerts: () => void;
  onOpenAccuracy: () => void;
  currentView: 'dashboard' | 'forecast' | 'today-price';
  onViewChange: (view: 'dashboard' | 'forecast' | 'today-price') => void;
}

export const Header: React.FC<HeaderProps> = ({
  scripts,
  selectedScript,
  onSelectScript,
  isSyncing,
  onTriggerSync,
  lastSyncTime,
  autoSyncEnabled,
  onToggleAutoSync,
  syncInterval,
  alerts,
  onOpenAlerts,
  onOpenAccuracy,
  currentView,
  onViewChange
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [countdown, setCountdown] = useState(syncInterval);

  const unreadAlertsCount = alerts.filter(a => !a.isRead).length;

  useEffect(() => {
    if (!autoSyncEnabled) return;
    setCountdown(syncInterval);
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          return syncInterval;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [autoSyncEnabled, syncInterval, lastSyncTime]);

  const filteredScripts = scripts.filter(s =>
    s.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.sector.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#0b0f17]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">Prediction App</span>
                <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  NEPSE Live
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden md:block">Real-Time Data Directly from nepalstock.com</p>
            </div>
          </div>

          {/* Primary View Switcher Tabs */}
          <div className="hidden sm:flex items-center bg-slate-900/90 border border-slate-800 p-1 rounded-xl shrink-0">
            <button
              id="nav-dashboard-tab"
              onClick={() => onViewChange('dashboard')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                currentView === 'dashboard'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>
            <button
              id="nav-today-price-tab"
              onClick={() => onViewChange('today-price')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                currentView === 'today-price'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>Today's Price</span>
            </button>
            <button
              id="nav-forecast-tab"
              onClick={() => onViewChange('forecast')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                currentView === 'forecast'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Forecasts</span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative flex-1 max-w-[150px] xs:max-w-[200px] sm:max-w-xs md:max-w-sm">
            <div className="relative">
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2" />
              <input
                id="header-script-search"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                placeholder="Search..."
                className="w-full bg-slate-900/80 border border-slate-700/80 rounded-lg pl-8 sm:pl-9 pr-2 sm:pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              />
            </div>

            {/* Search Dropdown */}
            {isSearchOpen && searchQuery && (
              <div className="absolute left-0 right-0 mt-1 bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden z-50 max-h-64 overflow-y-auto">
                {filteredScripts.length > 0 ? (
                  filteredScripts.map(s => (
                    <button
                      key={s.symbol}
                      onClick={() => {
                        onSelectScript(s);
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-slate-800 flex items-center justify-between border-b border-slate-800/50 last:border-0 transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-xs text-white flex items-center gap-2">
                          {s.symbol}
                          <span className="text-[10px] text-slate-400 font-normal">{s.sector}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">{s.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono font-medium text-slate-200">NPR {s.currentPrice.toFixed(2)}</div>
                        <span className={`text-[10px] font-semibold ${s.prediction.direction === 'INCREASE' ? 'text-emerald-400' : s.prediction.direction === 'DECREASE' ? 'text-rose-400' : 'text-slate-400'}`}>
                          {s.prediction.direction === 'INCREASE' ? '▲ INCREASE' : s.prediction.direction === 'DECREASE' ? '▼ DECREASE' : '▬ NEUTRAL'}
                        </span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-3 text-xs text-slate-500 text-center">No matching scripts found</div>
                )}
              </div>
            )}
          </div>

          {/* Sync Controls & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Auto-Sync Toggle & Countdown */}
            <div className="hidden lg:flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-xs">
              <button
                id="toggle-autosync-btn"
                onClick={onToggleAutoSync}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                title="Toggle real-time auto sync"
              >
                <span className={`w-2 h-2 rounded-full ${autoSyncEnabled ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`}></span>
                <span className="font-medium text-slate-300">{autoSyncEnabled ? 'Auto-Sync' : 'Manual'}</span>
              </button>
              {autoSyncEnabled && (
                <span className="font-mono text-[11px] text-emerald-400/90 pl-1 border-l border-slate-700">
                  {countdown}s
                </span>
              )}
            </div>

            {/* Manual Sync Button */}
            <button
              id="manual-sync-btn"
              onClick={onTriggerSync}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all disabled:opacity-50"
              title={`Last synced at ${lastSyncTime}`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-emerald-400' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">{isSyncing ? 'Scraping...' : 'Sync Now'}</span>
            </button>

            {/* Accuracy Scorecard Button */}
            <button
              id="accuracy-scorecard-btn"
              onClick={onOpenAccuracy}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/30 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>86.8% Accuracy</span>
            </button>

            {/* Alerts Bell */}
            <button
              id="market-alerts-btn"
              onClick={onOpenAlerts}
              className="relative p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
              title="Market Shift Alerts"
            >
              <Bell className="w-4 h-4" />
              {unreadAlertsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                  {unreadAlertsCount}
                </span>
              )}
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
