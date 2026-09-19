import React, { useState } from 'react';
import { TriggeredAlert, MarketAlertRule, ScriptProduct } from '../types';
import { Bell, X, AlertTriangle, ArrowUpRight, ArrowDownRight, CheckCircle2, PlusCircle, Trash2, Volume2, VolumeX, ShieldAlert } from 'lucide-react';

interface MarketAlertsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  alerts: TriggeredAlert[];
  alertRules: MarketAlertRule[];
  scripts: ScriptProduct[];
  onMarkRead: (id: string | 'all') => void;
  onCreateRule: (rule: { scriptSymbol: string; triggerType: string; thresholdValue: number; conditionDescription?: string }) => Promise<void>;
  onDeleteRule: (id: string) => Promise<void>;
}

export const MarketAlertsDrawer: React.FC<MarketAlertsDrawerProps> = ({
  isOpen,
  onClose,
  alerts,
  alertRules,
  scripts,
  onMarkRead,
  onCreateRule,
  onDeleteRule
}) => {
  const [activeTab, setActiveTab] = useState<'triggered' | 'rules'>('triggered');
  const [isAddingRule, setIsAddingRule] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState(scripts[0]?.symbol || 'NABIL');
  const [triggerType, setTriggerType] = useState('PRICE_INCREASE');
  const [threshold, setThreshold] = useState('2.5');
  const [audioChime, setAudioChime] = useState(true);

  if (!isOpen) return null;

  const handleAddRule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSymbol || !threshold) return;
    await onCreateRule({
      scriptSymbol: selectedSymbol,
      triggerType,
      thresholdValue: parseFloat(threshold),
      conditionDescription: `Alert when ${triggerType.replace('_', ' ')} reaches ${threshold}`
    });
    setIsAddingRule(false);
  };

  const unreadCount = alerts.filter(a => !a.isRead).length;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md bg-slate-900 h-full border-l border-slate-800 shadow-2xl flex flex-col justify-between">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                Potential Market Shift Alerts
                {unreadCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-rose-500 text-white font-bold">
                    {unreadCount} new
                  </span>
                )}
              </h2>
              <p className="text-[11px] text-slate-400">Automated signals triggered per script</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setAudioChime(!audioChime)}
              className="p-1.5 text-slate-400 hover:text-slate-200 rounded"
              title={audioChime ? 'Mute alert chime' : 'Enable alert chime'}
            >
              {audioChime ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 text-xs">
          <button
            onClick={() => setActiveTab('triggered')}
            className={`flex-1 py-2.5 font-semibold text-center border-b-2 transition-all ${
              activeTab === 'triggered'
                ? 'border-emerald-500 text-emerald-400 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Triggered Alerts ({alerts.length})
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={`flex-1 py-2.5 font-semibold text-center border-b-2 transition-all ${
              activeTab === 'rules'
                ? 'border-emerald-500 text-emerald-400 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Script Alert Rules ({alertRules.length})
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          
          {activeTab === 'triggered' && (
            <>
              {alerts.length > 0 && (
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => onMarkRead('all')}
                    className="text-[11px] text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3" /> Mark all read
                  </button>
                </div>
              )}

              {alerts.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-xs">
                  <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500/40 mb-2" />
                  No market shift alerts triggered yet. Monitoring real-time feeds...
                </div>
              ) : (
                alerts.map(alert => {
                  const isIncrease = alert.predictedImpact === 'PRICE_INCREASE';
                  return (
                    <div
                      key={alert.id}
                      onClick={() => onMarkRead(alert.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        !alert.isRead
                          ? 'bg-slate-800/80 border-rose-500/40 shadow-sm'
                          : 'bg-slate-850/40 border-slate-800 opacity-80'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-xs font-mono text-white bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                            {alert.scriptSymbol}
                          </span>
                          <span className={`inline-flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            isIncrease ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'
                          }`}>
                            {isIncrease ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                            {alert.predictedImpact.replace('_', ' ')}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">{alert.timestamp}</span>
                      </div>

                      <div className="font-semibold text-xs text-slate-200 mb-1">{alert.title}</div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{alert.description}</p>
                      
                      {alert.sourceWebsite && (
                        <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span>Source: {alert.sourceWebsite}</span>
                          {!alert.isRead && <span className="text-rose-400 font-bold">• Unread</span>}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </>
          )}

          {activeTab === 'rules' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400">Configured shift triggers:</span>
                <button
                  onClick={() => setIsAddingRule(!isAddingRule)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>New Script Rule</span>
                </button>
              </div>

              {isAddingRule && (
                <form onSubmit={handleAddRule} className="p-3.5 rounded-xl bg-slate-850 border border-emerald-500/40 space-y-3 text-xs">
                  <div className="font-bold text-white text-xs">Set Script Alert Rule</div>
                  <div>
                    <label className="block text-slate-400 mb-1">Target Script</label>
                    <select
                      value={selectedSymbol}
                      onChange={(e) => setSelectedSymbol(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white"
                    >
                      {scripts.map(s => (
                        <option key={s.symbol} value={s.symbol}>{s.symbol} - {s.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-slate-400 mb-1">Trigger Condition</label>
                      <select
                        value={triggerType}
                        onChange={(e) => setTriggerType(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-[11px]"
                      >
                        <option value="PRICE_INCREASE">Price Increase %</option>
                        <option value="PRICE_DECREASE">Price Decrease %</option>
                        <option value="VOLUME_SPIKE">Volume Spike (x avg)</option>
                        <option value="SENTIMENT_SHIFT">Sentiment Score (&gt;)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Threshold</label>
                      <input
                        type="number"
                        step="0.1"
                        value={threshold}
                        onChange={(e) => setThreshold(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button
                      type="submit"
                      className="flex-1 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
                    >
                      Activate Rule
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddingRule(false)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {alertRules.map(rule => (
                <div
                  key={rule.id}
                  className="p-3 rounded-xl bg-slate-850/60 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-bold font-mono text-white bg-slate-800 px-1.5 py-0.5 rounded">
                        {rule.scriptSymbol}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-semibold font-mono">
                        {rule.triggerType.replace('_', ' ')} &gt;= {rule.thresholdValue}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">{rule.conditionDescription}</p>
                  </div>

                  <button
                    onClick={() => onDeleteRule(rule.id)}
                    className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                    title="Delete rule"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 text-center text-xs text-slate-500 font-mono">
          Auto-synchronized across Merolagani, ShareSansar, NepaliPaisa & NEPSE
        </div>

      </div>
    </div>
  );
};
