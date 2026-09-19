import React, { useState } from 'react';
import { NewsArticle, ScriptProduct } from '../types';
import { Newspaper, Sparkles, TrendingUp, TrendingDown, Minus, Send, ExternalLink, PlusCircle } from 'lucide-react';

interface NewsSentimentCardProps {
  articles: NewsArticle[];
  selectedScript: ScriptProduct;
  onAnalyzeCustomNews: (payload: { title: string; summary?: string; source?: string; relevantScript?: string }) => Promise<void>;
}

export const NewsSentimentCard: React.FC<NewsSentimentCardProps> = ({
  articles,
  selectedScript,
  onAnalyzeCustomNews
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newsTitle, setNewsTitle] = useState('');
  const [newsSummary, setNewsSummary] = useState('');
  const [newsSource, setNewsSource] = useState('Merolagani');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter articles relevant to the selected script or general NEPSE
  const relevantArticles = articles.filter(a =>
    a.relevantScripts.includes(selectedScript.symbol) ||
    a.relevantScripts.includes('NEPSE')
  );

  const displayArticles = relevantArticles.length > 0 ? relevantArticles : articles;

  // Sentiment distribution
  const bullishCount = displayArticles.filter(a => a.sentiment === 'BULLISH').length;
  const bearishCount = displayArticles.filter(a => a.sentiment === 'BEARISH').length;
  const neutralCount = displayArticles.length - bullishCount - bearishCount;

  const bullishPercent = Math.round((bullishCount / Math.max(1, displayArticles.length)) * 100);
  const bearishPercent = Math.round((bearishCount / Math.max(1, displayArticles.length)) * 100);
  const neutralPercent = 100 - bullishPercent - bearishPercent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim()) return;
    setIsSubmitting(true);
    try {
      await onAnalyzeCustomNews({
        title: newsTitle.trim(),
        summary: newsSummary.trim(),
        source: newsSource,
        relevantScript: selectedScript.symbol
      });
      setNewsTitle('');
      setNewsSummary('');
      setIsFormOpen(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md space-y-4">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-emerald-400" />
            <h2 className="text-sm sm:text-base font-bold text-white">Market News Sentiment Analysis</h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            NLP sentiment scoring of financial reports & breaking articles from Merolagani, ShareSansar, and NepaliPaisa
          </p>
        </div>

        <button
          id="toggle-add-news-btn"
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>{isFormOpen ? 'Close Analyzer' : 'Analyze Custom News'}</span>
        </button>
      </div>

      {/* Aggregate Sentiment Meter Bar */}
      <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-slate-300 font-medium">News Sentiment for {selectedScript.symbol}:</span>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="text-emerald-400 font-bold">{bullishPercent}% Bullish</span>
            <span className="text-slate-400">{neutralPercent}% Neutral</span>
            <span className="text-rose-400 font-bold">{bearishPercent}% Bearish</span>
          </div>
        </div>

        {/* Multi-segment Progress Bar */}
        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex">
          <div
            className="bg-emerald-500 h-full transition-all duration-500"
            style={{ width: `${bullishPercent}%` }}
            title={`Bullish: ${bullishPercent}%`}
          />
          <div
            className="bg-slate-600 h-full transition-all duration-500"
            style={{ width: `${neutralPercent}%` }}
            title={`Neutral: ${neutralPercent}%`}
          />
          <div
            className="bg-rose-500 h-full transition-all duration-500"
            style={{ width: `${bearishPercent}%` }}
            title={`Bearish: ${bearishPercent}%`}
          />
        </div>
      </div>

      {/* Custom News Analyzer Form */}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="bg-slate-850 p-4 rounded-xl border border-emerald-500/40 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> AI Sentiment Scanner
            </span>
            <span className="text-slate-400 font-normal">Target Script: {selectedScript.symbol}</span>
          </div>

          <div>
            <label className="block text-[11px] text-slate-400 mb-1">News Headline or Article Title *</label>
            <input
              type="text"
              required
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
              placeholder="e.g. Nabil Bank registers 18% net profit increase in audited Q4 report"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Portal Source</label>
              <select
                value={newsSource}
                onChange={(e) => setNewsSource(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
              >
                <option value="Merolagani">Merolagani</option>
                <option value="ShareSansar">ShareSansar</option>
                <option value="NepaliPaisa">NepaliPaisa</option>
                <option value="Bizshala">Bizshala</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Article Summary (Optional)</label>
              <input
                type="text"
                value={newsSummary}
                onChange={(e) => setNewsSummary(e.target.value)}
                placeholder="Key excerpts, numbers, dividend ratios..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !newsTitle.trim()}
            className="w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Running Gemini NLP Sentiment Engine...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Extract Sentiment & Recalculate Price Target</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Scraped Articles List */}
      <div className="space-y-2.5">
        {displayArticles.map(article => {
          const isBullish = article.sentiment === 'BULLISH';
          const isBearish = article.sentiment === 'BEARISH';

          return (
            <div
              key={article.id}
              className="bg-slate-850/40 border border-slate-800/80 rounded-xl p-3.5 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {article.source}
                    </span>
                    <span className="text-[10px] text-slate-500">{article.publishedAt}</span>
                    <div className="flex items-center gap-1">
                      {article.relevantScripts.map(sym => (
                        <span key={sym} className="text-[9px] font-mono px-1 py-0.5 rounded bg-slate-800/90 text-teal-300">
                          #{sym}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Sentiment Pill */}
                <div className="text-right shrink-0">
                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-lg ${
                    isBullish
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : isBearish
                      ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                      : 'bg-slate-700/40 text-slate-300 border border-slate-600/30'
                  }`}>
                    {isBullish && <TrendingUp className="w-3 h-3" />}
                    {isBearish && <TrendingDown className="w-3 h-3" />}
                    {!isBullish && !isBearish && <Minus className="w-3 h-3" />}
                    <span>{article.sentiment}</span>
                    <span className="font-mono text-[10px]">({article.sentimentScore > 0 ? '+' : ''}{article.sentimentScore})</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
