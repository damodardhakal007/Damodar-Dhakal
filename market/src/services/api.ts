import { ScriptProduct, NewsArticle, TriggeredAlert, MarketAlertRule, PredictionResult } from '../types';

export async function fetchAllScripts(): Promise<ScriptProduct[]> {
  const res = await fetch('/api/scripts');
  if (!res.ok) throw new Error('Failed to fetch scripts');
  return res.json();
}

export async function fetchScriptDetails(symbol: string): Promise<ScriptProduct> {
  const res = await fetch(`/api/scripts/${encodeURIComponent(symbol)}`);
  if (!res.ok) throw new Error(`Failed to fetch script ${symbol}`);
  return res.json();
}

export async function triggerAutoSync(): Promise<{
  success: boolean;
  syncCount: number;
  lastSyncTime: string;
  marketStatus: string;
  updatedScripts: number;
}> {
  const res = await fetch('/api/sync', { method: 'POST' });
  if (!res.ok) throw new Error('Failed to trigger sync');
  return res.json();
}

export async function requestDeepPrediction(symbol: string): Promise<PredictionResult> {
  const res = await fetch('/api/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ symbol })
  });
  if (!res.ok) throw new Error('Failed to request prediction');
  return res.json();
}

export async function fetchNewsArticles(): Promise<NewsArticle[]> {
  const res = await fetch('/api/news');
  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
}

export async function analyzeNewsSentiment(payload: {
  title: string;
  summary?: string;
  source?: string;
  relevantScript?: string;
}): Promise<{ article: NewsArticle; reasoning: string }> {
  const res = await fetch('/api/news/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Failed to analyze sentiment');
  return res.json();
}

export async function fetchAlerts(): Promise<{
  triggered: TriggeredAlert[];
  rules: MarketAlertRule[];
}> {
  const res = await fetch('/api/alerts');
  if (!res.ok) throw new Error('Failed to fetch alerts');
  return res.json();
}

export async function createAlertRule(rule: {
  scriptSymbol: string;
  triggerType: string;
  thresholdValue: number;
  conditionDescription?: string;
}): Promise<MarketAlertRule> {
  const res = await fetch('/api/alerts/rule', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rule)
  });
  if (!res.ok) throw new Error('Failed to create alert rule');
  return res.json();
}

export async function deleteAlertRule(ruleId: string): Promise<{ success: boolean }> {
  const res = await fetch(`/api/alerts/rule/${ruleId}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete alert rule');
  return res.json();
}

export async function markAlertAsRead(alertId: string | 'all'): Promise<{ success: boolean }> {
  const res = await fetch('/api/alerts/mark-read', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: alertId })
  });
  if (!res.ok) throw new Error('Failed to update alert');
  return res.json();
}

export async function fetchFloorSheet(symbol?: string): Promise<{
  source: string;
  lastSyncTime: string;
  totalRecords: number;
  totalTurnover: number;
  totalVolume: number;
  trades: import('../types').FloorSheetItem[];
}> {
  const url = symbol && symbol !== 'ALL' ? `/api/floorsheet?symbol=${encodeURIComponent(symbol)}` : '/api/floorsheet';
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch floor sheet');
  return res.json();
}

export async function fetchAccuracyMetrics(): Promise<{
  overallAccuracy: number;
  totalPredictions30d: number;
  successfulPredictions: number;
  failedPredictions: number;
  winRatePercent: number;
  sectorBreakdown: { sector: string; accuracy: number; count: number }[];
  sourceReliability: { source: string; correlationScore: number }[];
}> {
  const res = await fetch('/api/accuracy');
  if (!res.ok) throw new Error('Failed to fetch accuracy data');
  return res.json();
}

export async function fetchNepseTodayPrices(params?: { sector?: string; search?: string }): Promise<{
  officialSource: string;
  lastSyncTime: string;
  totalRecords: number;
  verificationStandard: string;
  crossVerificationOverview: {
    totalMonitored: number;
    exactMatchCount: number;
    maxObservedVariancePercent: number;
    fidelityScore: number;
  };
  data: import('../types').NepseTodayPriceItem[];
}> {
  const query = new URLSearchParams();
  if (params?.sector) query.set('sector', params.sector);
  if (params?.search) query.set('search', params.search);
  const qs = query.toString();
  const res = await fetch(`/api/nepse/today-price${qs ? `?${qs}` : ''}`);
  if (!res.ok) throw new Error("Failed to fetch official NEPSE today's price");
  return res.json();
}

export async function fetchNepseMarketDepth(symbol: string): Promise<any> {
  const res = await fetch(`/api/nepse/marketdepth/${encodeURIComponent(symbol)}`);
  if (!res.ok) throw new Error(`Failed to fetch NEPSE market depth for ${symbol}`);
  return res.json();
}

export async function fetchNepseCompanyProfile(symbol: string): Promise<any> {
  const res = await fetch(`/api/nepse/company/${encodeURIComponent(symbol)}`);
  if (!res.ok) throw new Error(`Failed to fetch NEPSE company profile for ${symbol}`);
  return res.json();
}

export async function triggerCrossVerification(symbol?: string): Promise<{
  success: boolean;
  totalAudited: number;
  timestamp: string;
  auditVerdict: string;
  results: any[];
}> {
  const res = await fetch('/api/nepse/cross-verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ symbol })
  });
  if (!res.ok) throw new Error('Failed to execute cross verification audit');
  return res.json();
}


