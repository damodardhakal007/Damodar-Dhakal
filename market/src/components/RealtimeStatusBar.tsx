import React, { useState, useEffect } from 'react';
import { RefreshCw, Play, Pause, ExternalLink, ShieldCheck, Zap, Radio } from 'lucide-react';

interface RealtimeStatusBarProps {
  isSyncing: boolean;
  lastSyncTime: string;
  autoSyncEnabled: boolean;
  onToggleAutoSync: () => void;
  onTriggerSync: () => void;
  syncInterval: number;
  onChangeInterval: (seconds: number) => void;
}

export const RealtimeStatusBar: React.FC<RealtimeStatusBarProps> = ({
  isSyncing,
  lastSyncTime,
  autoSyncEnabled,
  onToggleAutoSync,
  onTriggerSync,
  syncInterval,
  onChangeInterval,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(syncInterval);

  useEffect(() => {
    setSecondsRemaining(syncInterval);
  }, [syncInterval]);

  // Second-by-second countdown for visual real-time assurance
  useEffect(() => {
    if (!autoSyncEnabled || isSyncing) return;

    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          return syncInterval;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [autoSyncEnabled, isSyncing, syncInterval]);

  return (
    <div className="bg-slate-900/95 border-b border-slate-800/90 px-3 sm:px-4 py-2 sm:py-2.5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2.5 text-xs">
        {/* Real-time Tracking Engine Info */}
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold text-[11px] sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Live NEPSE Stream</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300 text-[11px] sm:text-xs">
            <span className="text-slate-400 hidden sm:inline">Official Source:</span>
            <a
              href="https://www.nepalstock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-bold underline decoration-emerald-500/40 hover:decoration-emerald-400 transition-colors"
            >
              <span>nepalstock.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[10px] text-emerald-400/90 bg-emerald-950/60 border border-emerald-500/20 px-1.5 py-0.5 rounded hidden lg:inline">
              Updates only when exchange data changes
            </span>
          </div>
        </div>

        {/* Real-time Controls & Countdown */}
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto justify-between md:justify-end">
          {/* Auto-Sync Countdown Indicator */}
          {autoSyncEnabled ? (
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[11px]">
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">Check exchange in:</span>
              <span className="sm:hidden">Next check:</span>
              <strong className="text-emerald-400 w-5 text-center">{secondsRemaining}s</strong>
            </div>
          ) : (
            <span className="text-[11px] text-amber-400 font-medium px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20">
              Auto-Sync Paused
            </span>
          )}

          {/* Interval Selector */}
          <div className="flex items-center gap-1 bg-slate-950 px-1.5 py-0.5 rounded-lg border border-slate-800 text-[11px]">
            <span className="text-slate-400 mr-1 hidden sm:inline">Rate:</span>
            {[5, 10, 20, 30].map(sec => (
              <button
                key={sec}
                id={`sync-interval-${sec}`}
                onClick={() => onChangeInterval(sec)}
                className={`px-1.5 py-0.5 rounded font-mono transition-colors ${
                  syncInterval === sec
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title={`Check exchange every ${sec} seconds`}
              >
                {sec}s
              </button>
            ))}
          </div>

          {/* Toggle Pause / Resume */}
          <button
            id="toggle-auto-sync-btn"
            onClick={onToggleAutoSync}
            className={`px-2.5 py-1 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              autoSyncEnabled
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 border-emerald-400 font-bold'
            }`}
            title={autoSyncEnabled ? 'Pause live auto-sync' : 'Resume live auto-sync'}
          >
            {autoSyncEnabled ? (
              <>
                <Pause className="w-3 h-3 text-amber-400" />
                <span className="hidden xs:inline">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                <span className="hidden xs:inline">Resume</span>
              </>
            )}
          </button>

          {/* Manual Sync Now Button */}
          <button
            id="manual-sync-now-btn"
            onClick={onTriggerSync}
            disabled={isSyncing}
            className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Syncing...' : 'Sync NEPSE'}</span>
          </button>

          <span className="text-[11px] text-slate-400 font-mono hidden xl:inline">
            Last: {lastSyncTime}
          </span>
        </div>
      </div>
    </div>
  );
};
