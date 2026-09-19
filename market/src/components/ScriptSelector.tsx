import React, { useState } from 'react';
import { ScriptProduct } from '../types';
import { TrendingUp, TrendingDown, Minus, Star, Globe } from 'lucide-react';

interface ScriptSelectorProps {
  scripts: ScriptProduct[];
  selectedSymbol: string;
  onSelectScript: (script: ScriptProduct) => void;
  onToggleFavorite?: (symbol: string) => void;
}

export const ScriptSelector: React.FC<ScriptSelectorProps> = ({
  scripts,
  selectedSymbol,
  onSelectScript,
  onToggleFavorite
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');

  const sectors = ['All', 'Commercial Banks', 'Hydropower', 'Manufacturing & Processing', 'Microfinance', 'Indices'];

  const filtered = selectedSector === 'All'
    ? scripts
    : scripts.filter(s => s.sector === selectedSector);

  return (
    <div className="w-full bg-slate-900/60 border-b border-slate-800 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        
        {/* Sector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-500 font-medium whitespace-nowrap pr-2 hidden sm:inline">Sectors:</span>
          {sectors.map(sector => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-all ${
                selectedSector === sector
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-750'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Script Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
          {filtered.map(script => {
            const isSelected = script.symbol === selectedSymbol;
            const isBullish = script.prediction.direction === 'INCREASE';
            const isBearish = script.prediction.direction === 'DECREASE';

            return (
              <button
                key={script.symbol}
                id={`select-script-${script.symbol.toLowerCase()}`}
                onClick={() => onSelectScript(script)}
                className={`relative p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-slate-800/90 border-emerald-500/80 shadow-md ring-1 ring-emerald-500/40'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-sm text-white font-mono tracking-tight">{script.symbol}</span>
                  <span className={`inline-flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isBullish
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : isBearish
                      ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                      : 'bg-slate-700/40 text-slate-300 border border-slate-600/30'
                  }`}>
                    {isBullish && <TrendingUp className="w-2.5 h-2.5" />}
                    {isBearish && <TrendingDown className="w-2.5 h-2.5" />}
                    {!isBullish && !isBearish && <Minus className="w-2.5 h-2.5" />}
                    {script.prediction.predictedChangePercent > 0 ? '+' : ''}{script.prediction.predictedChangePercent}%
                  </span>
                </div>

                {/* Price */}
                <div className="text-xs text-slate-300 font-mono font-medium">
                  NPR {script.currentPrice.toFixed(2)}
                </div>

                {/* Daily Change & Prediction Badge */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                  <span className={script.change >= 0 ? 'text-emerald-400 font-mono' : 'text-rose-400 font-mono'}>
                    {script.change >= 0 ? '+' : ''}{script.change.toFixed(1)} ({script.percentChange.toFixed(1)}%)
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {script.prediction.confidencePercentage}% conf.
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
