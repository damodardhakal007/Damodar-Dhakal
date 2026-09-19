import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ReferenceLine,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';
import { NewsArticle, ScriptProduct } from '../../types';
import { Newspaper, TrendingUp, TrendingDown, Filter, ExternalLink, Globe, Sparkles, PieChart } from 'lucide-react';

interface SentimentVisualizationCardProps {
  articles: NewsArticle[];
  scripts: ScriptProduct[];
  selectedSymbol: string;
  onSelectSymbol: (symbol: string) => void;
}

export const SentimentVisualizationCard: React.FC<SentimentVisualizationCardProps> = ({
  articles,
  scripts,
  selectedSymbol,
  onSelectSymbol
}) => {
  const [sentimentView, setSentimentView] = useState<'distribution' | 'byScript' | 'correlation'>('distribution');
  const [selectedSourceFilter, setSelectedSourceFilter] = useState<string>('ALL');
  const [selectedSentimentFilter, setSelectedSentimentFilter] = useState<'ALL' | 'BULLISH' | 'BEARISH' | 'NEUTRAL'>('ALL');

  // Calculate Sentiment Distribution grouped by Source
  const sourceDistributionData = useMemo(() => {
    const sources = ['Merolagani', 'ShareSansar', 'NepaliPaisa', 'Bizshala'] as const;
    
    return sources.map(source => {
      const sourceArticles = articles.filter(a => a.source === source);
      const bullish = sourceArticles.filter(a => a.sentiment === 'BULLISH').length;
      const bearish = sourceArticles.filter(a => a.sentiment === 'BEARISH').length;
      const neutral = sourceArticles.filter(a => a.sentiment === 'NEUTRAL').length;
      const total = sourceArticles.length;

      return {
        source,
        bullish,
        bearish,
        neutral,
        total,
        bullishPercent: total > 0 ? Math.round((bullish / total) * 100) : 0
      };
    });
  }, [articles]);

  // Aggregated Sentiment Score by Script
  const scriptSentimentData = useMemo(() => {
    return scripts.map(script => {
      const relevant = articles.filter(
        a => a.relevantScripts.includes(script.symbol) || a.relevantScripts.includes('NEPSE')
      );
      
      let avgScore = 0;
      if (relevant.length > 0) {
        avgScore = relevant.reduce((sum, a) => sum + a.sentimentScore, 0) / relevant.length;
      }

      const scorePercent = Math.round(avgScore * 100);
      const isPositive = scorePercent > 10;
      const isNegative = scorePercent < -10;

      return {
        symbol: script.symbol,
        name: script.name,
        avgScore: parseFloat(avgScore.toFixed(2)),
        scorePercent,
        articleCount: relevant.length,
        predictedChange: script.prediction.predictedChangePercent,
        sentimentStatus: isPositive ? 'BULLISH' : isNegative ? 'BEARISH' : 'NEUTRAL',
        color: isPositive ? '#10b981' : isNegative ? '#f43f5e' : '#fbbf24'
      };
    }).sort((a, b) => b.scorePercent - a.scorePercent);
  }, [scripts, articles]);

  // Sentiment vs Price Prediction Correlation Data
  const correlationData = useMemo(() => {
    return scripts.map(s => {
      const scriptNews = articles.filter(
        a => a.relevantScripts.includes(s.symbol) || a.relevantScripts.includes('NEPSE')
      );
      const avgSentiment = scriptNews.length > 0
        ? scriptNews.reduce((acc, a) => acc + a.sentimentScore, 0) / scriptNews.length
        : 0;

      return {
        symbol: s.symbol,
        sentimentScore: parseFloat(avgSentiment.toFixed(2)),
        sentimentPercent: Math.round(avgSentiment * 100),
        predictedChange: s.prediction.predictedChangePercent,
        confidence: s.prediction.confidencePercentage
      };
    });
  }, [scripts, articles]);

  // Total Market Sentiment Stats
  const overallSentimentStats = useMemo(() => {
    const total = articles.length;
    const bullish = articles.filter(a => a.sentiment === 'BULLISH').length;
    const bearish = articles.filter(a => a.sentiment === 'BEARISH').length;
    const neutral = articles.filter(a => a.sentiment === 'NEUTRAL').length;
    const avgScore = total > 0
      ? (articles.reduce((acc, a) => acc + a.sentimentScore, 0) / total) * 100
      : 0;

    return {
      total,
      bullish,
      bearish,
      neutral,
      bullishPercent: Math.round((bullish / Math.max(1, total)) * 100),
      bearishPercent: Math.round((bearish / Math.max(1, total)) * 100),
      neutralPercent: Math.round((neutral / Math.max(1, total)) * 100),
      avgScore: Math.round(avgScore)
    };
  }, [articles]);

  // Filtered Articles for the bottom feed
  const filteredArticles = useMemo(() => {
    return articles.filter(a => {
      const matchSource = selectedSourceFilter === 'ALL' || a.source === selectedSourceFilter;
      const matchSentiment = selectedSentimentFilter === 'ALL' || a.sentiment === selectedSentimentFilter;
      return matchSource && matchSentiment;
    });
  }, [articles, selectedSourceFilter, selectedSentimentFilter]);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Aggregated News Sentiment Analytics
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            NLP sentiment analysis aggregated across Merolagani, ShareSansar, NepaliPaisa & Bizshala
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center bg-slate-800/80 border border-slate-700/80 rounded-lg p-0.5 self-start sm:self-auto">
          <button
            onClick={() => setSentimentView('distribution')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              sentimentView === 'distribution'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Sentiment by Portal
          </button>
          <button
            onClick={() => setSentimentView('byScript')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              sentimentView === 'byScript'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Script Sentiment Score
          </button>
          <button
            onClick={() => setSentimentView('correlation')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              sentimentView === 'correlation'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Sentiment vs Price
          </button>
        </div>
      </div>

      {/* Sentiment Gauge & Breakdown Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
        <div>
          <span className="text-[11px] text-slate-400 block">Market Consensus Index</span>
          <div className="text-base font-bold font-mono text-emerald-400 mt-0.5 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>+{overallSentimentStats.avgScore}% Net Bullish</span>
          </div>
          <span className="text-[10px] text-slate-400">Based on {overallSentimentStats.total} live news feeds</span>
        </div>

        <div>
          <span className="text-[11px] text-slate-400 block">Bullish Article Ratio</span>
          <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">
            {overallSentimentStats.bullish} articles ({overallSentimentStats.bullishPercent}%)
          </div>
          <span className="text-[10px] text-emerald-400/80">Supports price increase bias</span>
        </div>

        <div>
          <span className="text-[11px] text-slate-400 block">Bearish Article Ratio</span>
          <div className="text-base font-bold font-mono text-rose-400 mt-0.5">
            {overallSentimentStats.bearish} articles ({overallSentimentStats.bearishPercent}%)
          </div>
          <span className="text-[10px] text-rose-400/80">Downside risk alerts triggered</span>
        </div>

        <div>
          <span className="text-[11px] text-slate-400 block">Neutral / Policy Updates</span>
          <div className="text-base font-bold font-mono text-amber-400 mt-0.5">
            {overallSentimentStats.neutral} articles ({overallSentimentStats.neutralPercent}%)
          </div>
          <span className="text-[10px] text-slate-400">Stable macroeconomic factors</span>
        </div>
      </div>

      {/* Main Chart Section */}
      <div className="h-72 w-full pt-1">
        {sentimentView === 'distribution' && (
          /* Stacked / Grouped Bar Chart of Bullish, Neutral, Bearish by Portal Source */
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sourceDistributionData}
              margin={{ top: 15, right: 15, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis
                dataKey="source"
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
                allowDecimals={false}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const row = payload[0].payload;
                    return (
                      <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 shadow-2xl text-xs space-y-1">
                        <div className="font-bold text-white text-sm border-b border-slate-800 pb-1 flex justify-between gap-4">
                          <span>{label} Feed</span>
                          <span className="text-emerald-400 font-mono">{row.bullishPercent}% Bullish</span>
                        </div>
                        <div className="text-emerald-400">Bullish Articles: {row.bullish}</div>
                        <div className="text-rose-400">Bearish Articles: {row.bearish}</div>
                        <div className="text-amber-400">Neutral Articles: {row.neutral}</div>
                        <div className="text-slate-400 text-[10px] pt-1">Total Scraped: {row.total} articles</div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend wrapperStyle={{ fontSize: 11, paddingTop: '4px' }} />
              <Bar dataKey="bullish" name="Bullish (Positive)" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="neutral" name="Neutral (Steady)" fill="#fbbf24" radius={[4, 4, 0, 0]} />
              <Bar dataKey="bearish" name="Bearish (Negative)" fill="#f43f5e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}

        {sentimentView === 'byScript' && (
          /* Horizontal Bar Chart of Aggregated Sentiment Score by Script */
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={scriptSentimentData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 15, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
              <XAxis
                type="number"
                domain={[-100, 100]}
                stroke="#64748b"
                tick={{ fontSize: 11, fill: '#64748b' }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
                tickFormatter={(v) => `${v > 0 ? '+' : ''}${v}%`}
              />
              <YAxis
                type="category"
                dataKey="symbol"
                stroke="#64748b"
                tick={{ fontSize: 11, fill: '#cbd5e1', fontWeight: 600 }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
              />
              <ReferenceLine x={0} stroke="#475569" strokeWidth={1.5} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const item = payload[0].payload;
                    return (
                      <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 shadow-xl text-xs space-y-1">
                        <div className="font-bold text-white text-sm">{item.symbol}</div>
                        <div className="text-slate-400">{item.name}</div>
                        <div className={`font-mono font-bold ${item.scorePercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                          Avg Sentiment: {item.scorePercent > 0 ? '+' : ''}{item.scorePercent}%
                        </div>
                        <div className="text-slate-400 text-[11px]">
                          Relevant News Count: {item.articleCount}
                        </div>
                        <div className="text-indigo-400 text-[11px]">
                          Predicted Price Change: {item.predictedChange > 0 ? '+' : ''}{item.predictedChange}%
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="scorePercent"
                name="Sentiment Score %"
                radius={[0, 4, 4, 0]}
                onClick={(data: any) => {
                  if (data && data.symbol) onSelectSymbol(data.symbol);
                }}
                className="cursor-pointer"
              >
                {scriptSentimentData.map((entry) => (
                  <Cell
                    key={entry.symbol}
                    fill={entry.color}
                    stroke={entry.symbol === selectedSymbol ? '#ffffff' : 'transparent'}
                    strokeWidth={1.5}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}

        {sentimentView === 'correlation' && (
          /* Sentiment vs Price Change Correlation Chart */
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={correlationData}
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
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const item = payload[0].payload;
                    return (
                      <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 shadow-xl text-xs space-y-1 font-mono">
                        <div className="font-bold text-white text-sm border-b border-slate-800 pb-1">
                          {item.symbol}
                        </div>
                        <div className="text-teal-300">
                          News Sentiment: {item.sentimentPercent > 0 ? '+' : ''}{item.sentimentPercent}%
                        </div>
                        <div className="text-emerald-400">
                          Predicted Price Move: {item.predictedChange > 0 ? '+' : ''}{item.predictedChange}%
                        </div>
                        <div className="text-indigo-300 text-[10px]">
                          Confidence: {item.confidence}%
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="sentimentPercent" name="News Sentiment Score (%)" fill="#38bdf8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="predictedChange" name="Predicted Price Change (%)" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Interactive News Feed Sub-Module */}
      <div className="pt-3 border-t border-slate-800/80 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Underlying News Articles & Sentiment Scoring</span>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Source Filter */}
            <select
              value={selectedSourceFilter}
              onChange={(e) => setSelectedSourceFilter(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="ALL">All Sources</option>
              <option value="Merolagani">Merolagani</option>
              <option value="ShareSansar">ShareSansar</option>
              <option value="NepaliPaisa">NepaliPaisa</option>
              <option value="Bizshala">Bizshala</option>
            </select>

            {/* Sentiment Filter */}
            <select
              value={selectedSentimentFilter}
              onChange={(e) => setSelectedSentimentFilter(e.target.value as any)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="ALL">All Sentiments</option>
              <option value="BULLISH">Bullish Only</option>
              <option value="BEARISH">Bearish Only</option>
              <option value="NEUTRAL">Neutral Only</option>
            </select>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-2 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
          {filteredArticles.map(article => {
            const isBullish = article.sentiment === 'BULLISH';
            const isBearish = article.sentiment === 'BEARISH';
            return (
              <div
                key={article.id}
                className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {article.source}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {article.publishedAt}
                    </span>
                    <div className="flex items-center gap-1">
                      {article.relevantScripts.map(sym => (
                        <button
                          key={sym}
                          onClick={() => onSelectSymbol(sym)}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20"
                        >
                          {sym}
                        </button>
                      ))}
                    </div>
                  </div>
                  <h5 className="font-medium text-slate-200 line-clamp-1">{article.title}</h5>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 font-mono">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                      isBullish
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : isBearish
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {isBullish ? '▲ BULLISH' : isBearish ? '▼ BEARISH' : '▬ NEUTRAL'} ({article.sentimentScore > 0 ? '+' : ''}{(article.sentimentScore * 100).toFixed(0)}%)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
