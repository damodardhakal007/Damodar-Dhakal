import React from 'react';
import { ScriptProduct, PredictionResult } from '../types';
import { TrendingUp, TrendingDown, Minus, Sparkles, Target, AlertCircle, CheckCircle, ShieldAlert, Cpu, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface PredictionHeroProps {
  script: ScriptProduct;
  onRunDeepAnalysis: (symbol: string) => void;
  isAnalyzing: boolean;
}

export const PredictionHero: React.FC<PredictionHeroProps> = ({
  script,
  onRunDeepAnalysis,
  isAnalyzing
}) => {
  const pred = script.prediction;
  const isIncrease = pred.direction === 'INCREASE';
  const isDecrease = pred.direction === 'DECREASE';

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
      
      {/* Subtle background glow for direction */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10 ${
        isIncrease ? 'bg-emerald-500' : isDecrease ? 'bg-rose-500' : 'bg-slate-500'
      }`} />

      {/* Top Banner Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">{script.symbol}</h1>
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-medium border border-slate-700">
              {script.sector}
            </span>
            <span className="text-xs text-slate-400 font-normal hidden sm:inline">{script.name}</span>
          </div>
          <div className="flex items-center gap-2.5 mt-2 flex-wrap">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Traded Price (LTP):</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-white">NPR {script.currentPrice.toFixed(2)}</span>
            </div>
            <span className={`inline-flex items-center text-xs font-bold font-mono px-2 py-0.5 rounded ${
              script.change >= 0 ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20' : 'text-rose-400 bg-rose-500/10 border border-rose-500/20'
            }`}>
              {script.change >= 0 ? '+' : ''}{script.change.toFixed(2)} ({script.percentChange >= 0 ? '+' : ''}{script.percentChange.toFixed(2)}%)
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">• Day: NPR {script.dayLow.toFixed(1)} - {script.dayHigh.toFixed(1)}</span>
            <span className="text-[11px] text-slate-400 hidden md:inline">• Vol: {script.volume.toLocaleString()}</span>
            <a
              href={script.nepalstockUrl || `https://www.nepalstock.com/company/detail/${script.symbol}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-emerald-300 hover:text-emerald-200 font-bold px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 transition-colors"
              title="Official price synchronized directly with https://www.nepalstock.com/"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>nepalstock.com Official</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Gemini Trigger Button */}
        <button
          id="run-gemini-prediction-btn"
          onClick={() => onRunDeepAnalysis(script.symbol)}
          disabled={isAnalyzing}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-emerald-500/20 disabled:opacity-50"
        >
          <Sparkles className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
          <span>{isAnalyzing ? 'Gemini AI Evaluating...' : 'Re-Evaluate with Gemini 3.8'}</span>
        </button>
      </div>

      {/* Core Prediction Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Main Verdict Card (5 cols) */}
        <div className={`lg:col-span-5 rounded-xl p-5 border flex flex-col justify-between ${
          isIncrease
            ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-400'
            : isDecrease
            ? 'bg-rose-950/20 border-rose-500/40 text-rose-400'
            : 'bg-slate-800/40 border-slate-700 text-slate-300'
        }`}>
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              <span>Predictive Forecast Model</span>
              <span className="font-mono text-[10px] text-slate-500">Updated: {pred.lastCalculatedAt}</span>
            </div>

            {/* Verdict Badge */}
            <div className="flex items-center gap-3 my-2">
              <div className={`p-2.5 rounded-xl ${
                isIncrease ? 'bg-emerald-500/20 text-emerald-300' : isDecrease ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-700 text-slate-300'
              }`}>
                {isIncrease && <ArrowUpRight className="w-8 h-8 stroke-[3]" />}
                {isDecrease && <ArrowDownRight className="w-8 h-8 stroke-[3]" />}
                {!isIncrease && !isDecrease && <Minus className="w-8 h-8 stroke-[3]" />}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black tracking-tight leading-none text-white">
                  {isIncrease ? 'PRICE INCREASE' : isDecrease ? 'PRICE DECREASE' : 'SIDEWAYS / HOLD'}
                </div>
                <div className={`text-xs font-semibold mt-1 ${isIncrease ? 'text-emerald-400' : isDecrease ? 'text-rose-400' : 'text-slate-400'}`}>
                  {isIncrease ? 'Bullish Expansion Forecast' : isDecrease ? 'Bearish Contraction Forecast' : 'Consolidation Expected'}
                </div>
              </div>
            </div>

            {/* Target & Change Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-800/80">
              <div className="bg-slate-900/80 rounded-lg p-2.5 border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-medium">Projected Target</span>
                <span className="text-base font-bold font-mono text-white">
                  NPR {pred.predictedPriceRange.target.toFixed(2)}
                </span>
                <span className={`text-[10px] block font-mono font-semibold ${isIncrease ? 'text-emerald-400' : isDecrease ? 'text-rose-400' : 'text-slate-400'}`}>
                  {pred.predictedChangePercent > 0 ? '+' : ''}{pred.predictedChangePercent.toFixed(2)}%
                </span>
              </div>

              <div className="bg-slate-900/80 rounded-lg p-2.5 border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-medium">Forecast Range</span>
                <span className="text-xs font-mono font-medium text-slate-200 block mt-1">
                  NPR {pred.predictedPriceRange.min.toFixed(0)} - {pred.predictedPriceRange.max.toFixed(0)}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {pred.timeHorizon}
                </span>
              </div>
            </div>
          </div>

          {/* Confidence Gauge */}
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-300 font-medium">Confidence Rating</span>
              <span className="font-mono font-bold text-white">{pred.confidencePercentage}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  isIncrease ? 'bg-emerald-400' : isDecrease ? 'bg-rose-400' : 'bg-slate-400'
                }`}
                style={{ width: `${pred.confidencePercentage}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
              <span>Historical Backtest Hit Rate: {pred.historicalAccuracyRating}%</span>
              <span>High Conviction</span>
            </div>
          </div>
        </div>

        {/* Breakdown Weights & AI Commentary (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          
          {/* 3 Pillar Weights */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
              <span className="text-[10px] text-slate-400 font-semibold uppercase block">Technical Weight</span>
              <span className="text-base font-mono font-bold text-white block mt-0.5">40%</span>
              <span className="text-[10px] text-slate-400 block truncate">RSI {script.technicals.rsi.toFixed(1)} • MACD</span>
            </div>
            <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
              <span className="text-[10px] text-slate-400 font-semibold uppercase block">News Sentiment</span>
              <span className="text-base font-mono font-bold text-white block mt-0.5">35%</span>
              <span className="text-[10px] text-slate-400 block truncate">Live Scraped Articles</span>
            </div>
            <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-3">
              <span className="text-[10px] text-slate-400 font-semibold uppercase block">Scraper Consensus</span>
              <span className="text-base font-mono font-bold text-white block mt-0.5">25%</span>
              <span className="text-[10px] text-slate-400 block truncate">4 Portals Synced</span>
            </div>
          </div>

          {/* AI Executive Summary Box */}
          <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-emerald-400 uppercase tracking-wide">
              <Cpu className="w-3.5 h-3.5" />
              <span>AI Synthesized Intelligence Summary</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {pred.aiExecutiveSummary}
            </p>
          </div>

          {/* Key Catalysts and Risk Factors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Catalysts */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mb-2">
                <CheckCircle className="w-3.5 h-3.5" /> Key Catalysts Driving Price
              </span>
              <ul className="space-y-1.5">
                {pred.keyCatalysts.slice(0, 3).map((c, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5 leading-snug">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
              <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 mb-2">
                <AlertCircle className="w-3.5 h-3.5" /> Identified Market Risks
              </span>
              <ul className="space-y-1.5">
                {pred.riskFactors.slice(0, 2).map((r, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5 leading-snug">
                    <span className="text-amber-400 mt-0.5">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
