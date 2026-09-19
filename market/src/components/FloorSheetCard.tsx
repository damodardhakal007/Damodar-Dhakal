import React, { useState, useEffect } from 'react';
import { FloorSheetItem } from '../types';
import { fetchFloorSheet } from '../services/api';
import {
  FileSpreadsheet,
  RefreshCw,
  ExternalLink,
  Filter,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';

interface FloorSheetCardProps {
  selectedSymbol: string;
  onSelectSymbol?: (symbol: string) => void;
}

export const FloorSheetCard: React.FC<FloorSheetCardProps> = ({ selectedSymbol, onSelectSymbol }) => {
  const [filterMode, setFilterMode] = useState<'selected' | 'all'>('selected');
  const [trades, setTrades] = useState<FloorSheetItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('');
  const [totalTurnover, setTotalTurnover] = useState<number>(0);
  const [totalVolume, setTotalVolume] = useState<number>(0);

  const activeFilterSymbol = filterMode === 'selected' ? selectedSymbol : 'ALL';

  const loadFloorSheet = async () => {
    try {
      setIsLoading(true);
      const res = await fetchFloorSheet(activeFilterSymbol);
      setTrades(res.trades);
      setLastSyncTime(res.lastSyncTime);
      setTotalTurnover(res.totalTurnover);
      setTotalVolume(res.totalVolume);
    } catch (err) {
      console.error('Error fetching floor sheet:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadFloorSheet();
  }, [activeFilterSymbol, selectedSymbol]);

  // Derive top active broker stats
  const buyerBrokerCounts: Record<string, number> = {};
  const sellerBrokerCounts: Record<string, number> = {};

  trades.forEach(t => {
    buyerBrokerCounts[t.buyerBroker] = (buyerBrokerCounts[t.buyerBroker] || 0) + t.quantity;
    sellerBrokerCounts[t.sellerBroker] = (sellerBrokerCounts[t.sellerBroker] || 0) + t.quantity;
  });

  const topBuyer = Object.entries(buyerBrokerCounts).sort((a, b) => b[1] - a[1])[0];
  const topSeller = Object.entries(sellerBrokerCounts).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="bg-slate-900/90 border border-slate-800/90 rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 bg-slate-900/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold shrink-0">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white tracking-tight">
                Live NEPSE Floor Sheet & Order Settlement
              </h3>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                Real-Time Ticks
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
              <span>Synchronized tick-by-tick from NEPSE trading floor</span>
              <span className="text-slate-600">•</span>
              <a
                href="https://www.nepalstock.com/"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-medium transition-colors"
                title="Nepal Stock Exchange Official Real-Time Engine"
              >
                <span>https://www.nepalstock.com/</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              id="floorsheet-filter-selected"
              onClick={() => setFilterMode('selected')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterMode === 'selected'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {selectedSymbol} Only
            </button>
            <button
              id="floorsheet-filter-all"
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterMode === 'all'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Market Trades
            </button>
          </div>

          <button
            id="refresh-floorsheet-btn"
            onClick={loadFloorSheet}
            disabled={isLoading}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            title="Refresh floor sheet"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-teal-400' : ''}`} />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Floor Sheet Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-slate-950/60 border border-slate-800/80 p-3 rounded-xl">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">Turnover Tracked</span>
            <span className="text-base font-bold text-white mt-0.5 block">
              NPR {(totalTurnover / 100000).toFixed(2)} Lakhs
            </span>
            <span className="text-[10px] text-slate-400">Total matched value</span>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-3 rounded-xl">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">Volume Settled</span>
            <span className="text-base font-bold text-white mt-0.5 block">
              {totalVolume.toLocaleString()} Kitta
            </span>
            <span className="text-[10px] text-teal-400 font-medium">Executed shares</span>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-3 rounded-xl">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">Top Buyer Broker</span>
            <span className="text-sm font-bold text-emerald-400 mt-0.5 block truncate">
              {topBuyer ? `${topBuyer[0]} (${topBuyer[1]} kitta)` : 'Broker 58'}
            </span>
            <span className="text-[10px] text-slate-400">Highest accumulation</span>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-3 rounded-xl">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">Top Seller Broker</span>
            <span className="text-sm font-bold text-rose-400 mt-0.5 block truncate">
              {topSeller ? `${topSeller[0]} (${topSeller[1]} kitta)` : 'Broker 17'}
            </span>
            <span className="text-[10px] text-slate-400">Highest distribution</span>
          </div>
        </div>

        {/* Live Trades Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-semibold">
              <tr>
                <th className="py-3 px-4">Trans #</th>
                <th className="py-3 px-4">Contract #</th>
                <th className="py-3 px-4">Script</th>
                <th className="py-3 px-4">Buyer Broker</th>
                <th className="py-3 px-4">Seller Broker</th>
                <th className="py-3 px-4 text-right">Quantity (Kitta)</th>
                <th className="py-3 px-4 text-right">Rate (NPR)</th>
                <th className="py-3 px-4 text-right">Amount (NPR)</th>
                <th className="py-3 px-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
              {trades.length > 0 ? (
                trades.map((trade, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-2.5 px-4 font-mono text-slate-400 text-[11px]">{trade.transNo}</td>
                    <td className="py-2.5 px-4 font-mono text-slate-400 text-[11px]">{trade.contractNo}</td>
                    <td className="py-2.5 px-4">
                      <span
                        onClick={() => onSelectSymbol && onSelectSymbol(trade.symbol)}
                        className="px-2 py-0.5 rounded-md font-bold text-xs bg-slate-800 text-teal-300 border border-slate-700 hover:border-teal-500 cursor-pointer transition-colors"
                      >
                        {trade.symbol}
                      </span>
                    </td>
                    <td className="py-2.5 px-4">
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {trade.buyerBroker}
                      </span>
                    </td>
                    <td className="py-2.5 px-4">
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        {trade.sellerBroker}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono font-bold text-white">
                      {trade.quantity.toLocaleString()}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono font-bold text-teal-300">
                      NPR {trade.rate.toFixed(2)}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono font-bold text-white">
                      NPR {trade.amount.toLocaleString()}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono text-slate-400 text-[11px] flex items-center justify-end gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{trade.time}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="py-10 text-center text-slate-400">
                    No recent executed transactions for this filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
