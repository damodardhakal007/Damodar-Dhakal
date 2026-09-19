import React, { useState } from 'react';
import { ScriptProduct } from '../types';
import { BarChart3, Activity, Compass, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

interface TechnicalAnalysisCardProps {
  script: ScriptProduct;
}

export const TechnicalAnalysisCard: React.FC<TechnicalAnalysisCardProps> = ({ script }) => {
  const [chartMode, setChartMode] = useState<'line' | 'candles'>('line');
  const tech = script.technicals;
  const history = script.history;

  // Chart dimension bounds
  const prices = history.map(h => h.close);
  const minPrice = Math.min(...prices) * 0.98;
  const maxPrice = Math.max(...prices) * 1.02;
  const priceRange = maxPrice - minPrice || 1;

  const chartWidth = 600;
  const chartHeight = 160;

  // Generate SVG path for line chart
  const points = history.map((h, index) => {
    const x = (index / (history.length - 1)) * chartWidth;
    const y = chartHeight - ((h.close - minPrice) / priceRange) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `${points} ${chartWidth},${chartHeight} 0,${chartHeight}`;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md space-y-5">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <h2 className="text-sm sm:text-base font-bold text-white">Historical Data & Technical Prediction Tools</h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Quantitative analysis combining RSI, MACD, Moving Averages, and Volume momentum
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg text-xs">
          <button
            onClick={() => setChartMode('line')}
            className={`px-2.5 py-1 rounded font-medium transition-all ${
              chartMode === 'line' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Trend Line
          </button>
          <button
            onClick={() => setChartMode('candles')}
            className={`px-2.5 py-1 rounded font-medium transition-all ${
              chartMode === 'candles' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            High/Low Range
          </button>
        </div>
      </div>

      {/* Interactive Chart View */}
      <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800 relative">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>10-Day Historical Price Progression</span>
          <span className="font-mono text-emerald-400">Current: NPR {script.currentPrice.toFixed(2)}</span>
        </div>

        <div className="w-full h-44 overflow-hidden relative">
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <line x1="0" y1={chartHeight * 0.25} x2={chartWidth} y2={chartHeight * 0.25} stroke="#1e293b" strokeDasharray="3,3" />
            <line x1="0" y1={chartHeight * 0.5} x2={chartWidth} y2={chartHeight * 0.5} stroke="#1e293b" strokeDasharray="3,3" />
            <line x1="0" y1={chartHeight * 0.75} x2={chartWidth} y2={chartHeight * 0.75} stroke="#1e293b" strokeDasharray="3,3" />

            {/* Area Fill */}
            <polygon points={areaPoints} fill="url(#chartGradient)" />

            {/* Price Line */}
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              points={points}
            />

            {/* Candle/Data points */}
            {history.map((h, i) => {
              const cx = (i / (history.length - 1)) * chartWidth;
              const cy = chartHeight - ((h.close - minPrice) / priceRange) * chartHeight;
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="3.5"
                  className="fill-slate-900 stroke-emerald-400 stroke-2"
                />
              );
            })}
          </svg>
        </div>

        {/* Date Labels below chart */}
        <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1 pt-1 border-t border-slate-800">
          <span>{history[0]?.date}</span>
          <span>{history[Math.floor(history.length / 2)]?.date}</span>
          <span>{history[history.length - 1]?.date} (Latest)</span>
        </div>
      </div>

      {/* Technical Indicators 4-Box Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        
        {/* 1. RSI */}
        <div className="bg-slate-850/60 border border-slate-800 rounded-xl p-3.5">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-semibold uppercase text-[10px]">RSI (14-Period)</span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
              tech.rsi > 70 ? 'bg-amber-500/15 text-amber-400' : tech.rsi < 30 ? 'bg-emerald-500/15 text-emerald-400' : 'bg-slate-700/40 text-slate-300'
            }`}>
              {tech.rsiSignal}
            </span>
          </div>
          <div className="text-xl font-bold font-mono text-white mt-1">
            {tech.rsi.toFixed(1)}
          </div>
          {/* RSI Bar */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div
              className={`h-full rounded-full ${tech.rsi > 70 ? 'bg-amber-400' : tech.rsi < 30 ? 'bg-emerald-400' : 'bg-teal-400'}`}
              style={{ width: `${tech.rsi}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] text-slate-500 mt-1 font-mono">
            <span>30 Oversold</span>
            <span>70 Overbought</span>
          </div>
        </div>

        {/* 2. MACD */}
        <div className="bg-slate-850/60 border border-slate-800 rounded-xl p-3.5">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-semibold uppercase text-[10px]">MACD (12, 26, 9)</span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
              tech.macd.trend.includes('BULLISH') ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'
            }`}>
              {tech.macd.trend}
            </span>
          </div>
          <div className="text-xl font-bold font-mono text-white mt-1">
            {tech.macd.macdLine > 0 ? '+' : ''}{tech.macd.macdLine.toFixed(1)}
          </div>
          <div className="text-[11px] text-slate-400 font-mono mt-1">
            Signal: {tech.macd.signalLine} • Hist: {tech.macd.histogram > 0 ? '+' : ''}{tech.macd.histogram}
          </div>
          <span className="text-[10px] text-emerald-400 block mt-1">
            {tech.macd.histogram > 0 ? '▲ Expanding buyer momentum' : '▼ Seller pressure active'}
          </span>
        </div>

        {/* 3. Moving Averages */}
        <div className="bg-slate-850/60 border border-slate-800 rounded-xl p-3.5">
          <div className="text-xs text-slate-400 mb-1 font-semibold uppercase text-[10px]">
            Moving Averages Trend
          </div>
          <div className="space-y-1 mt-1 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">SMA 20:</span>
              <span className={script.currentPrice > tech.sma20 ? 'text-emerald-400 font-semibold' : 'text-rose-400'}>
                {tech.sma20} {script.currentPrice > tech.sma20 ? '(Above)' : '(Below)'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">SMA 50:</span>
              <span className={script.currentPrice > tech.sma50 ? 'text-emerald-400' : 'text-rose-400'}>
                {tech.sma50}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">SMA 200:</span>
              <span className={script.currentPrice > tech.sma200 ? 'text-emerald-400' : 'text-rose-400'}>
                {tech.sma200}
              </span>
            </div>
          </div>
          <span className="text-[10px] text-slate-500 block mt-1">
            {script.currentPrice > tech.sma20 && tech.sma20 > tech.sma50 ? 'Golden alignment (Bullish)' : 'Mixed moving average signals'}
          </span>
        </div>

        {/* 4. Support & Resistance */}
        <div className="bg-slate-850/60 border border-slate-800 rounded-xl p-3.5">
          <div className="text-xs text-slate-400 mb-1 font-semibold uppercase text-[10px]">
            Support & Resistance Pivot
          </div>
          <div className="space-y-1 mt-1 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">Resistance:</span>
              <span className="text-amber-400 font-semibold">NPR {tech.resistanceLevel.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Support:</span>
              <span className="text-emerald-400 font-semibold">NPR {tech.supportLevel.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Volume:</span>
              <span className={tech.volumeTrend === 'SURGING' ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                {tech.volumeTrend}
              </span>
            </div>
          </div>
          <span className="text-[10px] text-slate-400 block mt-1">
            Distance to breakout: {((tech.resistanceLevel - script.currentPrice) / script.currentPrice * 100).toFixed(1)}%
          </span>
        </div>

      </div>

    </div>
  );
};
