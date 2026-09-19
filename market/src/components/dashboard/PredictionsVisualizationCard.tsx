import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Cell,
  Legend
} from 'recharts';
import { ScriptProduct } from '../../types';
import { TrendingUp, TrendingDown, Target, ShieldCheck, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface PredictionsVisualizationCardProps {
  scripts: ScriptProduct[];
  selectedSymbol: string;
  onSelectSymbol: (symbol: string) => void;
}

export const PredictionsVisualizationCard: React.FC<PredictionsVisualizationCardProps> = ({
  scripts,
  selectedSymbol,
  onSelectSymbol
}) => {
  const [activeTab, setActiveTab] = useState<'change' | 'targets' | 'confidence'>('change');

  // Prepare chart dataset for all tracked products
  const predictionData = useMemo(() => {
    return scripts.map(s => {
      const pred = s.prediction;
      const isIncrease = pred.direction === 'INCREASE';
      const isDecrease = pred.direction === 'DECREASE';
      const changeVal = pred.predictedChangePercent;
      
      return {
        symbol: s.symbol,
        name: s.name,
        sector: s.sector,
        currentPrice: s.currentPrice,
        targetPrice: pred.predictedPriceRange.target,
        predictedChangePercent: changeVal,
        direction: pred.direction,
        confidence: pred.confidencePercentage,
        accuracyRating: pred.historicalAccuracyRating || 86.4,
        isIncrease,
        isDecrease,
        color: isIncrease ? '#10b981' : isDecrease ? '#f43f5e' : '#94a3b8'
      };
    });
  }, [scripts]);

  // Aggregate direction breakdown
  const stats = useMemo(() => {
    const total = scripts.length;
    const increaseCount = scripts.filter(s => s.prediction.direction === 'INCREASE').length;
    const decreaseCount = scripts.filter(s => s.prediction.direction === 'DECREASE').length;
    const neutralCount = scripts.filter(s => s.prediction.direction === 'NEUTRAL').length;
    const avgConfidence = Math.round(
      scripts.reduce((acc, s) => acc + s.prediction.confidencePercentage, 0) / Math.max(1, total)
    );
    const avgIncreasePotential = (
      scripts
        .filter(s => s.prediction.predictedChangePercent > 0)
        .reduce((acc, s) => acc + s.prediction.predictedChangePercent, 0) / Math.max(1, increaseCount)
    ).toFixed(2);

    return {
      total,
      increaseCount,
      decreaseCount,
      neutralCount,
      increasePercent: Math.round((increaseCount / total) * 100),
      decreasePercent: Math.round((decreaseCount / total) * 100),
      neutralPercent: Math.round((neutralCount / total) * 100),
      avgConfidence,
      avgIncreasePotential
    };
  }, [scripts]);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Cross-Asset Price Predictions & Target Forecasts
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Comparative analysis of projected price increase/decrease percentages and algorithm confidence
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center bg-slate-800/80 border border-slate-700/80 rounded-lg p-0.5 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('change')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'change'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Predicted % Change
          </button>
          <button
            onClick={() => setActiveTab('targets')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'targets'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Current vs Target Price
          </button>
          <button
            onClick={() => setActiveTab('confidence')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'confidence'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Confidence Scores
          </button>
        </div>
      </div>

      {/* Aggregate Prediction Market Summary Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Price Increase Bias</div>
            <div className="text-base font-bold font-mono text-emerald-400">
              {stats.increaseCount}/{stats.total} Products ({stats.increasePercent}%)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
            <TrendingDown className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Price Decrease Bias</div>
            <div className="text-base font-bold font-mono text-rose-400">
              {stats.decreaseCount}/{stats.total} Products ({stats.decreasePercent}%)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Average Confidence</div>
            <div className="text-base font-bold font-mono text-indigo-300">
              {stats.avgConfidence}% Probabilistic
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Avg Bullish Upside</div>
            <div className="text-base font-bold font-mono text-teal-300">
              +{stats.avgIncreasePotential}% Target Move
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Chart Section */}
      <div className="h-72 w-full pt-1">
        {activeTab === 'change' && (
          /* Predicted Price % Change Bar Chart */
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={predictionData}
              margin={{ top: 15, right: 15, left: -15, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis
                dataKey="symbol"
                stroke="#64748b"
                tick={{ fontSize: 11, fill: '#cbd5e1', fontWeight: 600 }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
              />
              <YAxis
                stroke="#64748b"
                tick={{ fontSize: 11, fill: '#64748b' }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
                tickFormatter={(v) => `${v > 0 ? '+' : ''}${v}%`}
              />
              <ReferenceLine y={0} stroke="#475569" strokeWidth={1.5} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const item = payload[0].payload;
                    return (
                      <div className="bg-slate-900 border border-slate-700/90 rounded-xl p-3 shadow-2xl text-xs space-y-1.5 backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-1">
                          <span className="font-bold text-white text-sm">{item.symbol}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            item.direction === 'INCREASE'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : item.direction === 'DECREASE'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : 'bg-slate-800 text-slate-300'
                          }`}>
                            {item.direction === 'INCREASE' ? '▲ PRICE INCREASE' : item.direction === 'DECREASE' ? '▼ PRICE DECREASE' : '▬ NEUTRAL'}
                          </span>
                        </div>
                        <div className="text-slate-400 text-[11px]">{item.name}</div>
                        <div className="space-y-1 font-mono text-[11px] pt-1">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Current Price:</span>
                            <span className="text-slate-200">NPR {item.currentPrice.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Predicted Target:</span>
                            <span className="text-emerald-400 font-bold">NPR {item.targetPrice.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Forecasted Change:</span>
                            <span className={`font-bold ${item.predictedChangePercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {item.predictedChangePercent >= 0 ? '+' : ''}{item.predictedChangePercent}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Algorithm Confidence:</span>
                            <span className="text-indigo-400 font-bold">{item.confidence}%</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800 text-center">
                          Click bar to inspect full script analysis
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="predictedChangePercent"
                name="Predicted % Change"
                radius={[4, 4, 0, 0]}
                onClick={(data: any) => {
                  if (data && data.symbol) onSelectSymbol(data.symbol);
                }}
                className="cursor-pointer"
              >
                {predictionData.map((entry) => (
                  <Cell
                    key={entry.symbol}
                    fill={entry.color}
                    stroke={entry.symbol === selectedSymbol ? '#ffffff' : 'transparent'}
                    strokeWidth={2}
                    opacity={entry.symbol === selectedSymbol ? 1 : 0.85}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}

        {activeTab === 'targets' && (
          /* Current Price vs Predicted Target Price Grouped Bar Chart */
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={predictionData}
              margin={{ top: 15, right: 15, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis
                dataKey="symbol"
                stroke="#64748b"
                tick={{ fontSize: 11, fill: '#cbd5e1' }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
              />
              <YAxis
                stroke="#64748b"
                tick={{ fontSize: 11, fill: '#64748b' }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
                tickFormatter={(v) => `Rs.${v}`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const item = payload[0].payload;
                    return (
                      <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 shadow-2xl text-xs space-y-1 font-mono">
                        <div className="font-bold text-white text-sm border-b border-slate-800 pb-1">
                          {item.symbol}
                        </div>
                        <div className="text-slate-300">Current: NPR {item.currentPrice.toFixed(2)}</div>
                        <div className="text-emerald-400 font-bold">Target: NPR {item.targetPrice.toFixed(2)}</div>
                        <div className="text-indigo-400">Delta: {item.predictedChangePercent > 0 ? '+' : ''}{item.predictedChangePercent}%</div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="currentPrice" name="Current Price (NPR)" fill="#475569" radius={[4, 4, 0, 0]} />
              <Bar dataKey="targetPrice" name="Predicted Target Price (NPR)" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}

        {activeTab === 'confidence' && (
          /* Prediction Confidence Rating Bar Chart */
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={predictionData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 15, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
              <XAxis
                type="number"
                domain={[50, 100]}
                stroke="#64748b"
                tick={{ fontSize: 11, fill: '#64748b' }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <YAxis
                type="category"
                dataKey="symbol"
                stroke="#64748b"
                tick={{ fontSize: 11, fill: '#cbd5e1', fontWeight: 600 }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const item = payload[0].payload;
                    return (
                      <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 shadow-xl text-xs space-y-1">
                        <div className="font-bold text-white text-sm">{item.symbol}</div>
                        <div className="text-slate-400">{item.name}</div>
                        <div className="text-indigo-400 font-mono font-bold">
                          Model Confidence: {item.confidence}%
                        </div>
                        <div className="text-emerald-400 font-mono text-[11px]">
                          Historical Accuracy: {item.accuracyRating}%
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="confidence"
                name="Confidence %"
                fill="#818cf8"
                radius={[0, 4, 4, 0]}
                onClick={(data: any) => {
                  if (data && data.symbol) onSelectSymbol(data.symbol);
                }}
                className="cursor-pointer"
              >
                {predictionData.map((entry) => (
                  <Cell
                    key={entry.symbol}
                    fill={entry.confidence >= 85 ? '#10b981' : entry.confidence >= 80 ? '#38bdf8' : '#818cf8'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Interactive Script Grid with Quick Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 pt-2 border-t border-slate-800/80">
        {scripts.map(s => {
          const isSelected = s.symbol === selectedSymbol;
          const isIncrease = s.prediction.direction === 'INCREASE';
          const isDecrease = s.prediction.direction === 'DECREASE';

          return (
            <button
              key={s.symbol}
              onClick={() => onSelectSymbol(s.symbol)}
              className={`p-2 rounded-xl text-left border transition-all ${
                isSelected
                  ? 'bg-slate-800 border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                  : 'bg-slate-950/40 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-white">{s.symbol}</span>
                <span className={`text-[10px] font-bold ${isIncrease ? 'text-emerald-400' : isDecrease ? 'text-rose-400' : 'text-slate-400'}`}>
                  {isIncrease ? '▲' : isDecrease ? '▼' : '▬'}
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-300 mt-0.5">
                Rs.{s.currentPrice.toFixed(0)}
              </div>
              <div className={`text-[10px] font-mono font-semibold ${isIncrease ? 'text-emerald-400' : isDecrease ? 'text-rose-400' : 'text-slate-400'}`}>
                {s.prediction.predictedChangePercent > 0 ? '+' : ''}{s.prediction.predictedChangePercent}%
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
