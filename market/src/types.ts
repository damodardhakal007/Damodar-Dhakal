export interface HistoricalCandle {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface TechnicalIndicators {
  rsi: number; // 0-100
  rsiSignal: 'OVERBOUGHT' | 'OVERSOLD' | 'NEUTRAL';
  macd: {
    macdLine: number;
    signalLine: number;
    histogram: number;
    trend: 'BULLISH_CROSS' | 'BEARISH_CROSS' | 'BULLISH' | 'BEARISH';
  };
  sma20: number;
  sma50: number;
  sma200: number;
  bollingerBands: {
    upper: number;
    middle: number;
    lower: number;
  };
  supportLevel: number;
  resistanceLevel: number;
  volumeTrend: 'SURGING' | 'AVERAGE' | 'DECLINING';
  technicalScore: number; // -100 to +100
}

export interface WebsiteSourceData {
  sourceName: 'Merolagani' | 'ShareSansar' | 'NepaliPaisa' | 'NEPSE';
  sourceUrl: string;
  lastPrice: number;
  change: number;
  percentChange: number;
  volume: number;
  lastUpdated: string;
  status: 'ONLINE' | 'SYNCED' | 'DELAYED';
  notes?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  source: 'Merolagani' | 'ShareSansar' | 'NepaliPaisa' | 'Bizshala';
  url: string;
  publishedAt: string;
  summary: string;
  relevantScripts: string[];
  sentiment: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
  sentimentScore: number; // -1.0 to +1.0
  impactWeight: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface PredictionResult {
  scriptSymbol: string;
  scriptName: string;
  direction: 'INCREASE' | 'DECREASE' | 'NEUTRAL';
  confidencePercentage: number; // e.g., 84%
  predictedPriceRange: {
    min: number;
    max: number;
    target: number;
  };
  predictedChangePercent: number; // e.g. +3.4% or -2.1%
  timeHorizon: 'Next Trading Day' | '3-Day Trend' | 'Weekly Horizon';
  technicalWeight: number; // e.g. 40
  sentimentWeight: number; // e.g. 35
  scrapingConsensusWeight: number; // e.g. 25
  keyCatalysts: string[];
  riskFactors: string[];
  aiExecutiveSummary: string;
  historicalAccuracyRating: number; // e.g. 86.4%
  lastCalculatedAt: string;
}

export interface DividendRecord {
  fiscalYear: string;
  bonusSharePercent: number;
  cashDividendPercent: number;
  totalDividendPercent: number;
  bookClosureDate: string;
  agmDate: string;
  status: 'Distributed' | 'Approved' | 'Proposed';
}

export interface RightShareRecord {
  fiscalYear: string;
  ratio: string;
  units: number;
  pricePerShare: number;
  bookClosureDate: string;
  issueOpenDate: string;
  issueCloseDate: string;
  status: 'Allotted' | 'Approved by SEBON' | 'In Pipeline' | 'Completed';
}

export interface QuarterlyReportRecord {
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4 Audited';
  fiscalYear: string;
  netProfitNprCrores: number;
  netProfitGrowthPercent: number;
  epsAnnualized: number;
  revenueOrNetInterestCrores: number;
  nplPercent?: number;
  carPercent?: number;
  publishedDate: string;
}

export interface FinancialFundamentals {
  eps: number;
  peRatio: number;
  bookValuePerShare: number;
  pbvRatio: number;
  roePercent: number;
  roaPercent: number;
  paidUpCapitalCrores: number;
  sharesOutstanding: number;
  promoterHoldingPercent: number;
  publicHoldingPercent: number;
  week52High: number;
  week52Low: number;
  nplPercent?: number;
  carPercent?: number;
  creditToDepositRatio?: number;
}

export interface MarketDepthLevel {
  orderCount: number;
  quantity: number;
  price: number;
}

export interface MarketDepth {
  symbol: string;
  totalBuyQty: number;
  totalSellQty: number;
  totalBuyOrders?: number;
  totalSellOrders?: number;
  buyRatioPercent: number;
  sellRatioPercent: number;
  marketDebtRatio: number; // Ratio of buy demand to sell overhang
  depthBias: 'BULLISH_BUY_PRESSURE' | 'BEARISH_SELL_OVERHANG' | 'BALANCED';
  vwap?: number;
  circuitUpper?: number;
  circuitLower?: number;
  nepseMarketDepthUrl?: string;
  crossVerificationStatus?: string;
  bids: MarketDepthLevel[];
  asks: MarketDepthLevel[];
}

export interface CrossSourcePriceVerification {
  sourceName: 'NEPSE (nepalstock.com)' | 'Merolagani' | 'ShareSansar' | 'NepaliPaisa';
  url: string;
  price: number;
  variancePercent: number;
  status: 'VERIFIED_EXACT' | 'VERIFIED_SYNCED' | 'DELAYED';
  lastChecked: string;
}

export interface NepseTodayPriceItem {
  sn: number;
  businessDate: string;
  symbol: string;
  securityName: string;
  sector: string;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  closePrice: number; // LTP
  previousClose: number;
  pointChange: number;
  percentChange: number;
  totalTradedQty: number; // Volume
  totalTradedValue: number; // Turnover NPR
  totalTrades: number;
  week52High: number;
  week52Low: number;
  vwap: number;
  circuitUpper: number;
  circuitLower: number;
  nepseTodayPriceUrl: string;
  nepseMarketDepthUrl: string;
  nepseCompanyUrl: string;
  verificationStatus: 'VERIFIED_OFFICIAL_NEPSE' | 'CROSS_VERIFIED';
  crossVerifications: CrossSourcePriceVerification[];
}

export interface NepseCompanyProfile {
  symbol: string;
  name: string;
  sector: string;
  status: 'Active' | 'Delisted' | 'Suspended';
  listedDate: string;
  listedShares: number;
  paidUpCapitalNpr: string;
  faceValue: number;
  registrarRta: string;
  headOffice: string;
  phone: string;
  email: string;
  website: string;
  nepseCompanyUrl: string;
  nepseMarketDepthUrl: string;
  nepseTodayPriceUrl: string;
  merolaganiUrl: string;
  shareSansarUrl: string;
  nepaliPaisaUrl: string;
  crossVerification: {
    paidUpCapitalVerified: boolean;
    sharesVerified: boolean;
    dividendsVerified: boolean;
    reportsVerified: boolean;
    matchScore: number;
  };
}

export interface FloorSheetItem {
  transNo: number;
  contractNo: string;
  symbol: string;
  buyerBroker: string;
  sellerBroker: string;
  quantity: number;
  rate: number;
  amount: number;
  time: string;
}

export interface ScriptProduct {
  symbol: string;
  name: string;
  sector: 'Commercial Banks' | 'Hydropower' | 'Manufacturing & Processing' | 'Microfinance' | 'Life Insurance' | 'Non-Life Insurance' | 'Indices' | 'Commodities';
  currentPrice: number;
  previousClose: number;
  change: number;
  percentChange: number;
  high52w: number;
  low52w: number;
  dayHigh: number;
  dayLow: number;
  volume: number;
  turnover: number;
  marketCapNpr: string;
  nepalstockUrl?: string;
  sources: WebsiteSourceData[];
  technicals: TechnicalIndicators;
  history: HistoricalCandle[];
  prediction: PredictionResult;
  fundamentals?: FinancialFundamentals;
  dividends?: DividendRecord[];
  rightShares?: RightShareRecord[];
  quarterlyReports?: QuarterlyReportRecord[];
  marketDepth?: MarketDepth;
  companyProfile?: NepseCompanyProfile;
  isFavorite?: boolean;
}

export interface MarketAlertRule {
  id: string;
  scriptSymbol: string;
  triggerType: 'PRICE_INCREASE' | 'PRICE_DECREASE' | 'RSI_OVERSOLD' | 'RSI_OVERBOUGHT' | 'VOLUME_SPIKE' | 'SENTIMENT_SHIFT';
  thresholdValue: number;
  conditionDescription: string;
  isActive: boolean;
  createdAt: string;
}

export interface TriggeredAlert {
  id: string;
  timestamp: string;
  scriptSymbol: string;
  scriptName: string;
  title: string;
  description: string;
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  predictedImpact: 'PRICE_INCREASE' | 'PRICE_DECREASE' | 'VOLATILITY';
  sourceWebsite?: string;
  isRead: boolean;
}

export interface MarketSyncStatus {
  lastSyncTime: string;
  isSyncing: boolean;
  marketStatus: 'LIVE_OPEN' | 'PRE_OPEN' | 'MARKET_CLOSED';
  syncCount: number;
  sourcesOnline: {
    merolagani: boolean;
    shareSansar: boolean;
    nepaliPaisa: boolean;
    nepse: boolean;
  };
}
