import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Legend
} from 'recharts';
import { ScriptProduct } from '../../types';
import { TrendingUp, TrendingDown, Calendar, Layers, Eye, Maximize2, BarChart2 } from 'lucide-react';

interface HistoricalPriceChartCardProps {
  scripts: ScriptProduct[];
  selectedSymbol: string;
  onSelectSymbol: (symbol: string) => void;
}

export const HistoricalPriceChartCard: React.FC<HistoricalPriceChartCardProps> = ({
  scripts,
  selectedSymbol,
  onSelectSymbol,
}) => {
  const [timeframe, setTimeframe] = useState<'7D' | '14D' | 'ALL'>('ALL');
  const [chartType, setChartType] = useState<'area' | 'line'>('area');
  const [showSMA, setShowSMA] = useState<boolean>(true);
  const [showTargetLine, setShowTargetLine] = useState<boolean>(true);
  const [showVolume, setShowVolume] = useState<boolean>(true);
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [comparedSymbols, setComparedSymbols] = useState<string[]>(['NABIL', 'SHIVM', 'CHCL']);

  const activeScript = scripts.find(s => s.symbol === selectedSymbol) || scripts[0];

  // Filter history data by timeframe
  const filteredHistory = useMemo(() => {
    if (!activeScript || !activeScript.history) return [];
    const history = [...activeScript.history];
    if (timeframe === '7D') return history.slice(-7);
    if (timeframe === '14D') return history.slice(-14);
    return history;
  }, [activeScript, timeframe]);

  // Calculate Simple Moving Average (SMA 5 periods) for historical points
  const chartData = useMemo(() => {
    return filteredHistory.map((item, index, arr) => {
      // Calculate a local 3-point rolling average
      const window = arr.slice(Math.max(0, index - 2), index + 1);
      const sma = window.reduce((sum, val) => sum + val.close, 0) / window.length;
      
      const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });

      return {
        ...item,
        displayDate: formattedDate,
        sma: parseFloat(sma.toFixed(2)),
        targetPrice: activeScript?.prediction?.predictedPriceRange?.target || activeScript?.currentPrice,
        priceChange: parseFloat((item.close - item.open).toFixed(2))
      };
    });
  }, [filteredHistory, activeScript]);

  // Normalized comparison data across multiple scripts
  const comparisonData = useMemo(() => {
    if (!compareMode) return [];
    const dates = activeScript?.history?.map(h => h.date) || [];
    return dates.map(date => {
      const row: Record<string, any> = {
        date,
        displayDate: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      };
      
      comparedSymbols.forEach(sym => {
        const sc = scripts.find(s => s.symbol === sym);
        if (sc && sc.history && sc.history.length > 0) {
          const basePrice = sc.history[0].close;
          const match = sc.history.find(h => h.date === date);
          if (match && basePrice > 0) {
            // Normalized % return from baseline
            row[sym] = parseFloat((((match.close - basePrice) / basePrice) * 100).toFixed(2));
          }
        }
      });
      return row;
    });
  }, [compareMode, comparedSymbols, scripts, activeScript]);

  // Min and Max prices for domain scaling
  const minPrice = useMemo(() => {
    if (chartData.length === 0) return 0;
    const prices = chartData.map(d => Math.min(d.low, d.close));
    return Math.floor(Math.min(...prices) * 0.98);
  }, [chartData]);

  const maxPrice = useMemo(() => {
    if (chartData.length === 0) return 100;
    const prices = chartData.map(d => Math.max(d.high, d.close));
    if (showTargetLine && activeScript?.prediction?.predictedPriceRange?.target) {
      prices.push(activeScript.prediction.predictedPriceRange.target);
    }
    return Math.ceil(Math.max(...prices) * 1.02);
  }, [chartData, showTargetLine, activeScript]);

  // Period change calculations
  const periodChange = useMemo(() => {
    if (chartData.length < 2) return { amount: 0, percent: 0 };
    const firstClose = chartData[0].close;
    const lastClose = chartData[chartData.length - 1].close;
    const amount = lastClose - firstClose;
    const percent = (amount / firstClose) * 100;
    return {
      amount: parseFloat(amount.toFixed(2)),
      percent: parseFloat(percent.toFixed(2))
    };
  }, [chartData]);

  const isBullish = activeScript?.prediction?.direction === 'INCREASE';
  const isBearish = activeScript?.prediction?.direction === 'DECREASE';

  const comparePalette: Record<string, string> = {
    NABIL: '#10b981',
    SHIVM: '#f43f5e',
    CHCL: '#38bdf8',
    GBIME: '#818cf8',
    CIT: '#fbbf24',
    HDL: '#a855f7',
    NEPSE: '#f97316'
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-5">
      {/* Header with Title and Global Tracked Script Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Historical Price Trends & Target Projections
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Interactive multi-timeframe price chart with moving averages and forecasted price targets
          </p>
        </div>

        {/* Action Controls & Compare Mode */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setCompareMode(!compareMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              compareMode
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm'
                : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-750'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{compareMode ? 'Comparing Scripts (% Return)' : 'Compare Multi-Scripts'}</span>
          </button>

          {/* Timeframe Selector */}
          {!compareMode && (
            <div className="flex items-center bg-slate-800/80 border border-slate-700/80 rounded-lg p-0.5">
              {(['7D', '14D', 'ALL'] as const).map(tf => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    timeframe === tf
                      ? 'bg-emerald-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Script Selector Chips */}
      {!compareMode ? (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider shrink-0 mr-1">
            Tracked Product:
          </span>
          {scripts.map(s => {
            const isSelected = s.symbol === activeScript.symbol;
            return (
              <button
                key={s.symbol}
                onClick={() => onSelectSymbol(s.symbol)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 border transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-slate-800 text-white border-emerald-500/60 shadow-md ring-1 ring-emerald-500/30'
                    : 'bg-slate-850/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{s.symbol}</span>
                <span className="font-mono text-[11px] text-slate-300">NPR {s.currentPrice.toFixed(0)}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    s.prediction.direction === 'INCREASE'
                      ? 'bg-emerald-400'
                      : s.prediction.direction === 'DECREASE'
                      ? 'bg-rose-400'
                      : 'bg-slate-400'
                  }`}
                />
              </button>
            );
          })}
        </div>
      ) : (
        /* Multi-select check pills for comparison */
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider shrink-0 mr-1">
            Select To Compare:
          </span>
          {scripts.map(s => {
            const isChecked = comparedSymbols.includes(s.symbol);
            const color = comparePalette[s.symbol] || '#38bdf8';
            return (
              <button
                key={s.symbol}
                onClick={() => {
                  if (isChecked) {
                    if (comparedSymbols.length > 1) {
                      setComparedSymbols(comparedSymbols.filter(sym => sym !== s.symbol));
                    }
                  } else {
                    setComparedSymbols([...comparedSymbols, s.symbol]);
                  }
                }}
                className={`px-3 py-1 rounded-xl text-xs font-semibold shrink-0 border transition-all flex items-center gap-1.5 ${
                  isChecked
                    ? 'bg-slate-800 text-white border-slate-600 shadow-sm'
                    : 'bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-300'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                <span>{s.symbol}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Script Summary Stats Bar (Single view) */}
      {!compareMode && activeScript && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
          <div>
            <span className="text-[11px] text-slate-400 block">Current Scraped Price</span>
            <div className="text-base font-bold font-mono text-white mt-0.5">
              NPR {activeScript.currentPrice.toFixed(2)}
            </div>
            <span className={`text-[11px] font-semibold flex items-center gap-1 ${activeScript.change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {activeScript.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {activeScript.change >= 0 ? '+' : ''}{activeScript.change.toFixed(2)} ({activeScript.percentChange.toFixed(2)}%)
            </span>
          </div>

          <div>
            <span className="text-[11px] text-slate-400 block">Period Performance ({timeframe})</span>
            <div className={`text-base font-bold font-mono mt-0.5 ${periodChange.amount >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {periodChange.amount >= 0 ? '+' : ''}{periodChange.amount.toFixed(2)} NPR
            </div>
            <span className="text-[11px] text-slate-400">
              {periodChange.percent >= 0 ? '+' : ''}{periodChange.percent.toFixed(2)}% over timeframe
            </span>
          </div>

          <div>
            <span className="text-[11px] text-slate-400 block">Predicted Price Target</span>
            <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">
              NPR {activeScript.prediction.predictedPriceRange.target.toFixed(2)}
            </div>
            <span className={`text-[11px] font-semibold ${isBullish ? 'text-emerald-400' : isBearish ? 'text-rose-400' : 'text-slate-400'}`}>
              {isBullish ? '▲ Target Increase' : isBearish ? '▼ Target Decrease' : '▬ Target Neutral'} ({activeScript.prediction.predictedChangePercent > 0 ? '+' : ''}{activeScript.prediction.predictedChangePercent}%)
            </span>
          </div>

          <div>
            <span className="text-[11px] text-slate-400 block">52-Week Trading Range</span>
            <div className="text-xs font-mono text-slate-300 mt-1 flex justify-between">
              <span>{activeScript.low52w.toFixed(0)}</span>
              <span className="text-slate-400 font-normal">Range</span>
              <span>{activeScript.high52w.toFixed(0)}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full"
                style={{
                  width: `${Math.min(100, Math.max(0, ((activeScript.currentPrice - activeScript.low52w) / (activeScript.high52w - activeScript.low52w)) * 100))}%`
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Chart Area */}
      <div className="h-72 w-full pt-2">
        {compareMode ? (
          /* Multi-Script Normalized Comparison Line Chart */
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={comparisonData} margin={{ top: 10, right: 15, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis
                dataKey="displayDate"
                stroke="#64748b"
                tick={{ fontSize: 11, fill: '#64748b' }}
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
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-slate-900 border border-slate-700/90 rounded-xl p-3 shadow-2xl text-xs space-y-1.5 backdrop-blur-md">
                        <div className="font-semibold text-white border-b border-slate-800 pb-1 flex justify-between gap-4">
                          <span>{label}</span>
                          <span className="text-slate-400 font-normal">Relative % Return</span>
                        </div>
                        {payload.map((entry: any) => (
                          <div key={entry.name} className="flex items-center justify-between gap-4 text-xs font-mono">
                            <span className="flex items-center gap-1.5 text-slate-300">
                              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                              {entry.name}
                            </span>
                            <span className={`font-bold ${entry.value >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {entry.value >= 0 ? '+' : ''}{entry.value}%
                            </span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend wrapperStyle={{ fontSize: 11, paddingTop: '8px' }} />
              <ReferenceLine y={0} stroke="#475569" strokeDasharray="3 3" />
              {comparedSymbols.map(sym => (
                <Line
                  key={sym}
                  type="monotone"
                  dataKey={sym}
                  name={sym}
                  stroke={comparePalette[sym] || '#38bdf8'}
                  strokeWidth={2}
                  dot={{ r: 3, fill: comparePalette[sym] || '#38bdf8' }}
                  activeDot={{ r: 5 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          /* Single Script Price & Projection Chart */
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'area' ? (
              <AreaChart data={chartData} margin={{ top: 10, right: 15, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis
                  dataKey="displayDate"
                  stroke="#64748b"
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  axisLine={{ stroke: '#334155' }}
                  tickLine={false}
                />
                <YAxis
                  domain={[minPrice, maxPrice]}
                  stroke="#64748b"
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  axisLine={{ stroke: '#334155' }}
                  tickLine={false}
                  tickFormatter={(v) => `Rs.${v}`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-slate-900/95 border border-slate-700 rounded-xl p-3 shadow-2xl text-xs space-y-1 backdrop-blur-md">
                          <div className="font-semibold text-white border-b border-slate-800 pb-1 flex justify-between gap-4">
                            <span>{data.displayDate} ({data.date})</span>
                            <span className="font-mono text-emerald-400">NPR {data.close.toFixed(2)}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300 font-mono text-[11px] pt-1">
                            <div>Open: <span className="text-white">{data.open}</span></div>
                            <div>High: <span className="text-white">{data.high}</span></div>
                            <div>Low: <span className="text-white">{data.low}</span></div>
                            <div>Close: <span className="text-white">{data.close}</span></div>
                            <div className="col-span-2 text-slate-400">
                              Volume: <span className="text-slate-200">{data.volume.toLocaleString()}</span>
                            </div>
                            {showSMA && (
                              <div className="col-span-2 text-indigo-400">
                                Moving Avg (SMA-3): <span className="font-bold">NPR {data.sma}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />

                {showTargetLine && activeScript?.prediction?.predictedPriceRange?.target && (
                  <ReferenceLine
                    y={activeScript.prediction.predictedPriceRange.target}
                    stroke={isBullish ? '#10b981' : isBearish ? '#f43f5e' : '#94a3b8'}
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                    label={{
                      value: `Target: Rs.${activeScript.prediction.predictedPriceRange.target}`,
                      fill: isBullish ? '#34d399' : isBearish ? '#fb7185' : '#94a3b8',
                      fontSize: 10,
                      position: 'insideTopRight'
                    }}
                  />
                )}

                <Area
                  type="monotone"
                  dataKey="close"
                  name="Close Price"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#priceGradient)"
                  dot={{ r: 3, fill: '#10b981' }}
                  activeDot={{ r: 5, fill: '#34d399', stroke: '#0b0f17', strokeWidth: 2 }}
                />

                {showSMA && (
                  <Line
                    type="monotone"
                    dataKey="sma"
                    name="Moving Avg (SMA)"
                    stroke="#818cf8"
                    strokeWidth={1.8}
                    strokeDasharray="2 2"
                    dot={false}
                  />
                )}
              </AreaChart>
            ) : (
              <LineChart data={chartData} margin={{ top: 10, right: 15, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis
                  dataKey="displayDate"
                  stroke="#64748b"
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  axisLine={{ stroke: '#334155' }}
                  tickLine={false}
                />
                <YAxis
                  domain={[minPrice, maxPrice]}
                  stroke="#64748b"
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  axisLine={{ stroke: '#334155' }}
                  tickLine={false}
                  tickFormatter={(v) => `Rs.${v}`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-slate-900/95 border border-slate-700 rounded-xl p-3 shadow-2xl text-xs space-y-1 backdrop-blur-md">
                          <div className="font-semibold text-white border-b border-slate-800 pb-1">
                            {data.displayDate} - NPR {data.close.toFixed(2)}
                          </div>
                          <div className="text-[11px] font-mono text-slate-300">
                            Vol: {data.volume.toLocaleString()}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="close"
                  name="Close Price"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: '#10b981' }}
                  activeDot={{ r: 5 }}
                />
                {showSMA && (
                  <Line
                    type="monotone"
                    dataKey="sma"
                    name="SMA"
                    stroke="#818cf8"
                    strokeWidth={1.8}
                    dot={false}
                  />
                )}
              </LineChart>
            )}
          </ResponsiveContainer>
        )}
      </div>

      {/* Volume Sub-Chart & Display Toggles */}
      {!compareMode && (
        <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Chart Display Toggles */}
          <div className="flex items-center gap-4 flex-wrap text-xs text-slate-400">
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-slate-200">
              <input
                type="checkbox"
                checked={chartType === 'area'}
                onChange={() => setChartType(chartType === 'area' ? 'line' : 'area')}
                className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500 bg-slate-800"
              />
              <span>Area Gradient</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer hover:text-slate-200">
              <input
                type="checkbox"
                checked={showSMA}
                onChange={() => setShowSMA(!showSMA)}
                className="rounded border-slate-700 text-indigo-500 focus:ring-indigo-500 bg-slate-800"
              />
              <span className="flex items-center gap-1">
                <span className="w-2 h-0.5 bg-indigo-400 inline-block"></span>
                Moving Avg (SMA)
              </span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer hover:text-slate-200">
              <input
                type="checkbox"
                checked={showTargetLine}
                onChange={() => setShowTargetLine(!showTargetLine)}
                className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500 bg-slate-800"
              />
              <span className="flex items-center gap-1">
                <span className="w-2 h-0.5 border-t border-dashed border-emerald-400 inline-block"></span>
                AI Forecast Target Line
              </span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer hover:text-slate-200">
              <input
                type="checkbox"
                checked={showVolume}
                onChange={() => setShowVolume(!showVolume)}
                className="rounded border-slate-700 text-slate-400 focus:ring-slate-400 bg-slate-800"
              />
              <span>Volume Distribution</span>
            </label>
          </div>

          <div className="text-[11px] font-mono text-slate-500">
            Data synchronized from official NEPSE settlement feed
          </div>
        </div>
      )}

      {/* Sub-panel: Volume Distribution Bar Chart */}
      {!compareMode && showVolume && chartData.length > 0 && (
        <div className="pt-2 border-t border-slate-800/60">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
            <span className="font-semibold uppercase tracking-wider">Trading Volume (Units)</span>
            <span className="font-mono">Avg: {Math.round(chartData.reduce((a, b) => a + b.volume, 0) / chartData.length).toLocaleString()}</span>
          </div>
          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 0, right: 15, left: -10, bottom: 0 }}>
                <XAxis dataKey="displayDate" hide />
                <YAxis hide />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs font-mono">
                          {data.displayDate}: <span className="text-emerald-400 font-bold">{data.volume.toLocaleString()} shares</span>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="volume"
                  fill="#334155"
                  radius={[3, 3, 0, 0]}
                  activeBar={{ fill: '#10b981' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};
