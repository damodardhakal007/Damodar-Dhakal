import { ScriptProduct, NewsArticle, MarketAlertRule, TriggeredAlert } from '../types';
import { SCRIPT_EXTENDED_DATA } from './companyFinancials';

const RAW_SCRIPTS: ScriptProduct[] = [
  {
    symbol: 'NEPSE',
    name: 'Nepal Stock Exchange Index',
    sector: 'Indices',
    currentPrice: 2647.22,
    previousClose: 2624.37,
    change: 22.85,
    percentChange: 0.87,
    high52w: 2960.40,
    low52w: 2487.18,
    dayHigh: 2647.48,
    dayLow: 2614.13,
    volume: 18420950,
    turnover: 7420500000,
    marketCapNpr: '4.26 Trillion',
    sources: [
      {
        sourceName: 'NEPSE',
        sourceUrl: 'https://nepalstock.com.np',
        lastPrice: 2647.22,
        change: 22.85,
        percentChange: 0.87,
        volume: 18420950,
        lastUpdated: '14:58:30 NPT',
        status: 'SYNCED',
        notes: 'Official live settlement stream'
      },
      {
        sourceName: 'Merolagani',
        sourceUrl: 'https://merolagani.com/MarketSummary.aspx',
        lastPrice: 2647.22,
        change: 22.85,
        percentChange: 0.87,
        volume: 18420950,
        lastUpdated: '14:59:02 NPT',
        status: 'SYNCED',
        notes: 'Floor sheet & live market depth verified'
      },
      {
        sourceName: 'ShareSansar',
        sourceUrl: 'https://www.sharesansar.com/live-trading',
        lastPrice: 2647.22,
        change: 22.85,
        percentChange: 0.87,
        volume: 18419200,
        lastUpdated: '14:58:45 NPT',
        status: 'SYNCED',
        notes: 'Order book imbalance: 62% Bids vs 38% Asks'
      },
      {
        sourceName: 'NepaliPaisa',
        sourceUrl: 'https://nepalipaisa.com/live-market',
        lastPrice: 2647.22,
        change: 22.85,
        percentChange: 0.87,
        volume: 18420950,
        lastUpdated: '14:58:15 NPT',
        status: 'SYNCED',
        notes: 'Top turnover sector: Banking & Hydropower'
      }
    ],
    technicals: {
      rsi: 61.4,
      rsiSignal: 'NEUTRAL',
      macd: {
        macdLine: 24.8,
        signalLine: 18.2,
        histogram: 6.6,
        trend: 'BULLISH'
      },
      sma20: 2610.4,
      sma50: 2540.8,
      sma200: 2315.0,
      bollingerBands: {
        upper: 2740.0,
        middle: 2610.4,
        lower: 2480.8
      },
      supportLevel: 2620.0,
      resistanceLevel: 2750.0,
      volumeTrend: 'SURGING',
      technicalScore: 78
    },
    history: [
      { date: '2026-08-25', open: 2580, high: 2605, low: 2570, close: 2598, volume: 12500000 },
      { date: '2026-08-26', open: 2600, high: 2618, low: 2588, close: 2612, volume: 13200000 },
      { date: '2026-08-27', open: 2615, high: 2635, low: 2608, close: 2630, volume: 14500000 },
      { date: '2026-08-30', open: 2632, high: 2645, low: 2620, close: 2625, volume: 13900000 },
      { date: '2026-08-31', open: 2628, high: 2660, low: 2622, close: 2655, volume: 16100000 },
      { date: '2026-09-01', open: 2658, high: 2672, low: 2640, close: 2648, volume: 15400000 },
      { date: '2026-09-02', open: 2650, high: 2670, low: 2645, close: 2665, volume: 16800000 },
      { date: '2026-09-03', open: 2668, high: 2690, low: 2655, close: 2682, volume: 17500000 },
      { date: '2026-09-06', open: 2680, high: 2685, low: 2640, close: 2652, volume: 16200000 },
      { date: '2026-09-07', open: 2655, high: 2698, low: 2648, close: 2684.52, volume: 18420950 }
    ],
    prediction: {
      scriptSymbol: 'NEPSE',
      scriptName: 'Nepal Stock Exchange Index',
      direction: 'INCREASE',
      confidencePercentage: 86,
      predictedPriceRange: {
        min: 2710.0,
        max: 2765.0,
        target: 2738.0
      },
      predictedChangePercent: 2.0,
      timeHorizon: 'Next Trading Day',
      technicalWeight: 40,
      sentimentWeight: 35,
      scrapingConsensusWeight: 25,
      keyCatalysts: [
        'Nepal Rastra Bank monetary easing signals and surplus banking system liquidity',
        'Multi-broker floor sheet data confirms institutional net buying of over 420M NPR',
        'MACD golden crossover above signal line with above-average volume surge'
      ],
      riskFactors: [
        'Overhead psychological resistance at 2,750 points',
        'Potential profit booking on high-beta hydro scripts'
      ],
      aiExecutiveSummary: 'Predictive models indicate high probability of NEPSE Index continuing upward momentum. Technical moving averages (SMA20 > SMA50) along with positive market news sentiment across Merolagani and ShareSansar suggest sustained buyer aggression toward the 2,735-2,750 target band.',
      historicalAccuracyRating: 88.2,
      lastCalculatedAt: 'Just now'
    },
    isFavorite: true
  },
  {
    symbol: 'NABIL',
    name: 'Nabil Bank Limited',
    sector: 'Commercial Banks',
    currentPrice: 562.90,
    previousClose: 560.00,
    change: 2.90,
    percentChange: 0.52,
    high52w: 581.00,
    low52w: 471.00,
    dayHigh: 568.00,
    dayLow: 558.00,
    volume: 384500,
    turnover: 216435000,
    marketCapNpr: '152.3 Billion',
    sources: [
      {
        sourceName: 'Merolagani',
        sourceUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=NABIL',
        lastPrice: 562.90,
        change: 2.90,
        percentChange: 0.52,
        volume: 384500,
        lastUpdated: '14:59:10 NPT',
        status: 'SYNCED',
        notes: 'P/E Ratio 15.6x, EPS NPR 36.1'
      },
      {
        sourceName: 'ShareSansar',
        sourceUrl: 'https://www.sharesansar.com/company/nabil',
        lastPrice: 562.90,
        change: 2.90,
        percentChange: 0.52,
        volume: 384500,
        lastUpdated: '14:58:55 NPT',
        status: 'SYNCED',
        notes: 'Top institutional buyer: Broker 58 & 45'
      },
      {
        sourceName: 'NepaliPaisa',
        sourceUrl: 'https://nepalipaisa.com/nabil',
        lastPrice: 562.90,
        change: 2.90,
        percentChange: 0.52,
        volume: 384500,
        lastUpdated: '14:59:00 NPT',
        status: 'SYNCED',
        notes: 'Quarterly Net Profit up 16.8% YoY'
      },
      {
        sourceName: 'NEPSE',
        sourceUrl: 'https://nepalstock.com.np/company/detail/NABIL',
        lastPrice: 562.90,
        change: 2.90,
        percentChange: 0.52,
        volume: 384500,
        lastUpdated: '14:58:30 NPT',
        status: 'SYNCED',
        notes: 'Active trading status'
      }
    ],
    technicals: {
      rsi: 68.2,
      rsiSignal: 'NEUTRAL',
      macd: {
        macdLine: 8.4,
        signalLine: 5.1,
        histogram: 3.3,
        trend: 'BULLISH'
      },
      sma20: 494.5,
      sma50: 481.0,
      sma200: 468.2,
      bollingerBands: {
        upper: 524.0,
        middle: 494.5,
        lower: 465.0
      },
      supportLevel: 495.0,
      resistanceLevel: 528.0,
      volumeTrend: 'SURGING',
      technicalScore: 84
    },
    history: [
      { date: '2026-08-25', open: 485, high: 490, low: 482, close: 488, volume: 195000 },
      { date: '2026-08-26', open: 489, high: 494, low: 486, close: 492, volume: 210000 },
      { date: '2026-08-27', open: 493, high: 497, low: 490, close: 495, volume: 228000 },
      { date: '2026-08-30', open: 496, high: 499, low: 492, close: 494, volume: 240000 },
      { date: '2026-08-31', open: 495, high: 502, low: 493, close: 500, volume: 310000 },
      { date: '2026-09-01', open: 501, high: 505, low: 496, close: 498, volume: 285000 },
      { date: '2026-09-02', open: 499, high: 504, low: 497, close: 502, volume: 320000 },
      { date: '2026-09-03', open: 503, high: 508, low: 500, close: 505, volume: 345000 },
      { date: '2026-09-06', open: 505, high: 507, low: 496, close: 498, volume: 290000 },
      { date: '2026-09-07', open: 499, high: 516, low: 499, close: 512.4, volume: 384500 }
    ],
    prediction: {
      scriptSymbol: 'NABIL',
      scriptName: 'Nabil Bank Limited',
      direction: 'INCREASE',
      confidencePercentage: 89,
      predictedPriceRange: {
        min: 524.0,
        max: 538.0,
        target: 532.0
      },
      predictedChangePercent: 3.82,
      timeHorizon: 'Next Trading Day',
      technicalWeight: 45,
      sentimentWeight: 30,
      scrapingConsensusWeight: 25,
      keyCatalysts: [
        'High dividend distribution expectation following stellar Q4 capital adequacy ratio',
        'Strong accumulation across Broker 58, 45, and 34 captured in Merolagani floorsheet',
        'Breakout above key resistance of 505 NPR on 1.4x 10-day average volume'
      ],
      riskFactors: [
        'Broader sector non-performing loan adjustments',
        'Short term consolidation near 530 psychological barrier'
      ],
      aiExecutiveSummary: 'NABIL shows solid bullish confluence. Scraped order books across ShareSansar and NepaliPaisa show bid/ask depth heavily tilted 67% toward buyers. Real-time momentum metrics and positive earnings sentiment point to price expansion toward 532 NPR.',
      historicalAccuracyRating: 91.5,
      lastCalculatedAt: 'Just now'
    },
    isFavorite: true
  },
  {
    symbol: 'SHIVM',
    name: 'Shivam Cements Limited',
    sector: 'Manufacturing & Processing',
    currentPrice: 688.00,
    previousClose: 676.30,
    change: 11.70,
    percentChange: 1.73,
    high52w: 730.00,
    low52w: 524.00,
    dayHigh: 692.00,
    dayLow: 674.00,
    volume: 512000,
    turnover: 352256000,
    marketCapNpr: '37.1 Billion',
    sources: [
      {
        sourceName: 'Merolagani',
        sourceUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=SHIVM',
        lastPrice: 688.00,
        change: 11.70,
        percentChange: 1.73,
        volume: 512000,
        lastUpdated: '14:59:12 NPT',
        status: 'SYNCED',
        notes: 'Active buying reported on manufacturing counter'
      },
      {
        sourceName: 'ShareSansar',
        sourceUrl: 'https://www.sharesansar.com/company/shivm',
        lastPrice: 688.00,
        change: 11.70,
        percentChange: 1.73,
        volume: 511800,
        lastUpdated: '14:58:50 NPT',
        status: 'SYNCED',
        notes: 'Order book verified: 58% demand vs 42% supply'
      },
      {
        sourceName: 'NepaliPaisa',
        sourceUrl: 'https://nepalipaisa.com/shivm',
        lastPrice: 688.00,
        change: 11.70,
        percentChange: 1.73,
        volume: 512000,
        lastUpdated: '14:58:35 NPT',
        status: 'SYNCED',
        notes: 'Cement sector leading trading turnover'
      },
      {
        sourceName: 'NEPSE',
        sourceUrl: 'https://nepalstock.com.np/company/detail/SHIVM',
        lastPrice: 688.00,
        change: 11.70,
        percentChange: 1.73,
        volume: 512000,
        lastUpdated: '14:58:30 NPT',
        status: 'SYNCED',
        notes: 'Active script'
      }
    ],
    technicals: {
      rsi: 38.6,
      rsiSignal: 'NEUTRAL',
      macd: {
        macdLine: -4.2,
        signalLine: -1.5,
        histogram: -2.7,
        trend: 'BEARISH'
      },
      sma20: 492.0,
      sma50: 515.0,
      sma200: 528.0,
      bollingerBands: {
        upper: 520.0,
        middle: 492.0,
        lower: 464.0
      },
      supportLevel: 460.0,
      resistanceLevel: 490.0,
      volumeTrend: 'SURGING',
      technicalScore: -64
    },
    history: [
      { date: '2026-08-25', open: 510, high: 514, low: 502, close: 504, volume: 380000 },
      { date: '2026-08-26', open: 505, high: 508, low: 498, close: 500, volume: 410000 },
      { date: '2026-08-27', open: 501, high: 503, low: 492, close: 494, volume: 440000 },
      { date: '2026-08-30', open: 495, high: 498, low: 489, close: 491, volume: 390000 },
      { date: '2026-08-31', open: 492, high: 496, low: 485, close: 488, volume: 420000 },
      { date: '2026-09-01', open: 489, high: 492, low: 482, close: 485, volume: 460000 },
      { date: '2026-09-02', open: 486, high: 490, low: 481, close: 484, volume: 430000 },
      { date: '2026-09-03', open: 485, high: 488, low: 480, close: 482, volume: 410000 },
      { date: '2026-09-06', open: 484, high: 489, low: 482, close: 485, volume: 450000 },
      { date: '2026-09-07', open: 486, high: 486, low: 468, close: 472.1, volume: 512000 }
    ],
    prediction: {
      scriptSymbol: 'SHIVM',
      scriptName: 'Shivam Cements Limited',
      direction: 'DECREASE',
      confidencePercentage: 83,
      predictedPriceRange: {
        min: 455.0,
        max: 468.0,
        target: 461.0
      },
      predictedChangePercent: -2.35,
      timeHorizon: 'Next Trading Day',
      technicalWeight: 45,
      sentimentWeight: 35,
      scrapingConsensusWeight: 20,
      keyCatalysts: [
        'Persistent breakdown below 20-day SMA with increasing distribution volume',
        'Negative supply overhang indicated by ShareSansar real-time market depth',
        'Industry reports highlighting clinker transport cost inflation'
      ],
      riskFactors: [
        'Technical bounce possible if price touches solid 460 support zone',
        'Oversold RSI trigger approaching under 35'
      ],
      aiExecutiveSummary: 'Technical signals and order book flows signal continuation of price decrease for SHIVM. Sellers dominate both top broker floorsheets and online quotes, targeting support test near 460-462 NPR before potential stabilization.',
      historicalAccuracyRating: 84.7,
      lastCalculatedAt: 'Just now'
    }
  },
  {
    symbol: 'CHCL',
    name: 'Chilime Hydropower Company',
    sector: 'Hydropower',
    currentPrice: 369.70,
    previousClose: 356.00,
    change: 13.70,
    percentChange: 3.85,
    high52w: 525.00,
    low52w: 344.00,
    dayHigh: 374.00,
    dayLow: 355.00,
    volume: 642000,
    turnover: 237347400,
    marketCapNpr: '29.5 Billion',
    sources: [
      {
        sourceName: 'Merolagani',
        sourceUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=CHCL',
        lastPrice: 369.70,
        change: 13.70,
        percentChange: 3.85,
        volume: 642000,
        lastUpdated: '14:59:05 NPT',
        status: 'SYNCED',
        notes: 'Monsoon power export revenue surge reported'
      },
      {
        sourceName: 'ShareSansar',
        sourceUrl: 'https://www.sharesansar.com/company/chcl',
        lastPrice: 369.70,
        change: 13.70,
        percentChange: 3.85,
        volume: 641500,
        lastUpdated: '14:58:45 NPT',
        status: 'SYNCED',
        notes: 'Broker 42 & 49 continuous absorption'
      },
      {
        sourceName: 'NepaliPaisa',
        sourceUrl: 'https://nepalipaisa.com/chcl',
        lastPrice: 369.70,
        change: 13.70,
        percentChange: 3.85,
        volume: 642000,
        lastUpdated: '14:58:50 NPT',
        status: 'SYNCED',
        notes: 'Hydropower index leader today'
      },
      {
        sourceName: 'NEPSE',
        sourceUrl: 'https://nepalstock.com.np/company/detail/CHCL',
        lastPrice: 369.70,
        change: 13.70,
        percentChange: 3.85,
        volume: 642000,
        lastUpdated: '14:58:30 NPT',
        status: 'SYNCED',
        notes: 'Active trading status'
      }
    ],
    technicals: {
      rsi: 71.2,
      rsiSignal: 'OVERBOUGHT',
      macd: {
        macdLine: 12.5,
        signalLine: 7.2,
        histogram: 5.3,
        trend: 'BULLISH'
      },
      sma20: 462.0,
      sma50: 440.0,
      sma200: 420.0,
      bollingerBands: {
        upper: 498.0,
        middle: 462.0,
        lower: 426.0
      },
      supportLevel: 472.0,
      resistanceLevel: 510.0,
      volumeTrend: 'SURGING',
      technicalScore: 88
    },
    history: [
      { date: '2026-08-25', open: 440, high: 448, low: 436, close: 445, volume: 280000 },
      { date: '2026-08-26', open: 446, high: 452, low: 442, close: 450, volume: 310000 },
      { date: '2026-08-27', open: 452, high: 458, low: 448, close: 455, volume: 340000 },
      { date: '2026-08-30', open: 456, high: 462, low: 452, close: 459, volume: 380000 },
      { date: '2026-08-31', open: 460, high: 468, low: 457, close: 465, volume: 420000 },
      { date: '2026-09-01', open: 466, high: 472, low: 462, close: 468, volume: 460000 },
      { date: '2026-09-02', open: 469, high: 475, low: 465, close: 470, volume: 490000 },
      { date: '2026-09-03', open: 471, high: 478, low: 468, close: 474, volume: 520000 },
      { date: '2026-09-06', open: 473, high: 476, low: 468, close: 471.5, volume: 480000 },
      { date: '2026-09-07', open: 470, high: 492, low: 470, close: 489, volume: 642000 }
    ],
    prediction: {
      scriptSymbol: 'CHCL',
      scriptName: 'Chilime Hydropower Company',
      direction: 'INCREASE',
      confidencePercentage: 81,
      predictedPriceRange: {
        min: 498.0,
        max: 515.0,
        target: 508.0
      },
      predictedChangePercent: 3.88,
      timeHorizon: 'Next Trading Day',
      technicalWeight: 40,
      sentimentWeight: 40,
      scrapingConsensusWeight: 20,
      keyCatalysts: [
        'India-Nepal cross-border power transmission expansion pact boosting sentiment',
        'Record trading volume breakthrough past 600K units',
        'Aggressive institutional bidding noted across NepaliPaisa live tracker'
      ],
      riskFactors: [
        'RSI entering overbought threshold at 71.2; trailing stop loss recommended',
        'Psychological resistance barrier at 500 NPR'
      ],
      aiExecutiveSummary: 'Strong upward momentum supported by high positive sentiment from regional energy export agreements. Price increase expected with targeted test of 505-510 NPR range.',
      historicalAccuracyRating: 87.1,
      lastCalculatedAt: 'Just now'
    },
    isFavorite: true
  },
  {
    symbol: 'GBIME',
    name: 'Global IME Bank Limited',
    sector: 'Commercial Banks',
    currentPrice: 260.90,
    previousClose: 258.00,
    change: 2.90,
    percentChange: 1.12,
    high52w: 270.60,
    low52w: 218.90,
    dayHigh: 263.00,
    dayLow: 256.00,
    volume: 890000,
    turnover: 232201000,
    marketCapNpr: '93.8 Billion',
    sources: [
      {
        sourceName: 'Merolagani',
        sourceUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=GBIME',
        lastPrice: 260.90,
        change: 2.90,
        percentChange: 1.12,
        volume: 890000,
        lastUpdated: '14:59:15 NPT',
        status: 'SYNCED',
        notes: 'P/B Ratio 1.2x, high margin of safety'
      },
      {
        sourceName: 'ShareSansar',
        sourceUrl: 'https://www.sharesansar.com/company/gbime',
        lastPrice: 260.90,
        change: 2.90,
        percentChange: 1.12,
        volume: 889500,
        lastUpdated: '14:58:40 NPT',
        status: 'SYNCED',
        notes: 'High retail volume accumulation'
      },
      {
        sourceName: 'NepaliPaisa',
        sourceUrl: 'https://nepalipaisa.com/gbime',
        lastPrice: 260.90,
        change: 2.90,
        percentChange: 1.12,
        volume: 890000,
        lastUpdated: '14:58:55 NPT',
        status: 'SYNCED',
        notes: 'Consistent deposit base expansion'
      },
      {
        sourceName: 'NEPSE',
        sourceUrl: 'https://nepalstock.com.np/company/detail/GBIME',
        lastPrice: 260.90,
        change: 2.90,
        percentChange: 1.12,
        volume: 890000,
        lastUpdated: '14:58:30 NPT',
        status: 'SYNCED',
        notes: 'Active script'
      }
    ],
    technicals: {
      rsi: 58.4,
      rsiSignal: 'NEUTRAL',
      macd: {
        macdLine: 3.2,
        signalLine: 2.1,
        histogram: 1.1,
        trend: 'BULLISH'
      },
      sma20: 231.0,
      sma50: 224.0,
      sma200: 218.5,
      bollingerBands: {
        upper: 242.0,
        middle: 231.0,
        lower: 220.0
      },
      supportLevel: 230.0,
      resistanceLevel: 244.0,
      volumeTrend: 'SURGING',
      technicalScore: 72
    },
    history: [
      { date: '2026-08-25', open: 226, high: 229, low: 224, close: 227, volume: 550000 },
      { date: '2026-08-26', open: 228, high: 231, low: 226, close: 229, volume: 610000 },
      { date: '2026-08-27', open: 230, high: 233, low: 228, close: 231, volume: 640000 },
      { date: '2026-08-30', open: 232, high: 234, low: 229, close: 230, volume: 580000 },
      { date: '2026-08-31', open: 231, high: 235, low: 230, close: 233, volume: 720000 },
      { date: '2026-09-01', open: 233, high: 236, low: 231, close: 234, volume: 690000 },
      { date: '2026-09-02', open: 234, high: 237, low: 232, close: 235, volume: 780000 },
      { date: '2026-09-03', open: 236, high: 238, low: 233, close: 234, volume: 810000 },
      { date: '2026-09-06', open: 235, high: 236, low: 231, close: 233, volume: 750000 },
      { date: '2026-09-07', open: 232, high: 238.5, low: 232, close: 236.8, volume: 890000 }
    ],
    prediction: {
      scriptSymbol: 'GBIME',
      scriptName: 'Global IME Bank Limited',
      direction: 'INCREASE',
      confidencePercentage: 82,
      predictedPriceRange: {
        min: 241.0,
        max: 248.0,
        target: 244.5
      },
      predictedChangePercent: 3.25,
      timeHorizon: 'Next Trading Day',
      technicalWeight: 45,
      sentimentWeight: 30,
      scrapingConsensusWeight: 25,
      keyCatalysts: [
        'Attractive valuation multiples relative to commercial banking peer average',
        'Steady accumulation by retail and mutual funds noted on ShareSansar portfolio reports',
        'Favorable interest spread margin stability'
      ],
      riskFactors: [
        'Large float supply requiring elevated market turnover for steep rallies'
      ],
      aiExecutiveSummary: 'Predictive analytics forecast positive price action for GBIME as capital rotates into low P/E banking blue-chips. Expected push toward 244 NPR.',
      historicalAccuracyRating: 85.9,
      lastCalculatedAt: 'Just now'
    }
  },
  {
    symbol: 'CIT',
    name: 'Citizen Investment Trust',
    sector: 'Commercial Banks',
    currentPrice: 1739.00,
    previousClose: 1745.00,
    change: -6.00,
    percentChange: -0.34,
    high52w: 1973.00,
    low52w: 1621.10,
    dayHigh: 1755.00,
    dayLow: 1730.00,
    volume: 48200,
    turnover: 83819800,
    marketCapNpr: '92.4 Billion',
    sources: [
      {
        sourceName: 'Merolagani',
        sourceUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=CIT',
        lastPrice: 1739.00,
        change: -6.00,
        percentChange: -0.34,
        volume: 48200,
        lastUpdated: '14:59:08 NPT',
        status: 'SYNCED',
        notes: 'Low volatility, steady institutional holding'
      },
      {
        sourceName: 'ShareSansar',
        sourceUrl: 'https://www.sharesansar.com/company/cit',
        lastPrice: 1739.00,
        change: -6.00,
        percentChange: -0.34,
        volume: 48150,
        lastUpdated: '14:58:35 NPT',
        status: 'SYNCED',
        notes: 'Evenly balanced order books'
      },
      {
        sourceName: 'NepaliPaisa',
        sourceUrl: 'https://nepalipaisa.com/cit',
        lastPrice: 1739.00,
        change: -6.00,
        percentChange: -0.34,
        volume: 48200,
        lastUpdated: '14:58:45 NPT',
        status: 'SYNCED',
        notes: 'Mutual fund NAV reports pending'
      },
      {
        sourceName: 'NEPSE',
        sourceUrl: 'https://nepalstock.com.np/company/detail/CIT',
        lastPrice: 1739.00,
        change: -6.00,
        percentChange: -0.34,
        volume: 48200,
        lastUpdated: '14:58:30 NPT',
        status: 'SYNCED',
        notes: 'Active script'
      }
    ],
    technicals: {
      rsi: 47.5,
      rsiSignal: 'NEUTRAL',
      macd: {
        macdLine: -2.1,
        signalLine: 1.4,
        histogram: -3.5,
        trend: 'BEARISH'
      },
      sma20: 2505.0,
      sma50: 2540.0,
      sma200: 2420.0,
      bollingerBands: {
        upper: 2580.0,
        middle: 2505.0,
        lower: 2430.0
      },
      supportLevel: 2450.0,
      resistanceLevel: 2550.0,
      volumeTrend: 'AVERAGE',
      technicalScore: -15
    },
    history: [
      { date: '2026-08-25', open: 2520, high: 2540, low: 2510, close: 2530, volume: 42000 },
      { date: '2026-08-26', open: 2535, high: 2550, low: 2520, close: 2525, volume: 44000 },
      { date: '2026-08-27', open: 2530, high: 2545, low: 2515, close: 2520, volume: 46000 },
      { date: '2026-08-30', open: 2520, high: 2530, low: 2500, close: 2505, volume: 41000 },
      { date: '2026-08-31', open: 2510, high: 2535, low: 2500, close: 2515, volume: 49000 },
      { date: '2026-09-01', open: 2520, high: 2530, low: 2505, close: 2510, volume: 45000 },
      { date: '2026-09-02', open: 2515, high: 2525, low: 2500, close: 2508, volume: 43000 },
      { date: '2026-09-03', open: 2510, high: 2520, low: 2500, close: 2512, volume: 47000 },
      { date: '2026-09-06', open: 2515, high: 2520, low: 2505, close: 2510, volume: 44000 },
      { date: '2026-09-07', open: 2510, high: 2520, low: 2470, close: 2480, volume: 48200 }
    ],
    prediction: {
      scriptSymbol: 'CIT',
      scriptName: 'Citizen Investment Trust',
      direction: 'NEUTRAL',
      confidencePercentage: 74,
      predictedPriceRange: {
        min: 2465.0,
        max: 2495.0,
        target: 2482.0
      },
      predictedChangePercent: 0.08,
      timeHorizon: 'Next Trading Day',
      technicalWeight: 40,
      sentimentWeight: 30,
      scrapingConsensusWeight: 30,
      keyCatalysts: [
        'Strong defensive profile with high long-term institutional backing',
        'Consolidating inside narrow range 2,460 - 2,520 NPR'
      ],
      riskFactors: [
        'Lack of immediate speculative catalyst'
      ],
      aiExecutiveSummary: 'CIT is experiencing consolidation around 2,480 NPR. Technical indicators display neutral momentum with near-zero histogram. Minor sideways fluctuation expected in the next trading session.',
      historicalAccuracyRating: 89.0,
      lastCalculatedAt: 'Just now'
    }
  },
  {
    symbol: 'HDL',
    name: 'Himalayan Distillery Limited',
    sector: 'Manufacturing & Processing',
    currentPrice: 1224.00,
    previousClose: 1217.00,
    change: 7.00,
    percentChange: 0.58,
    high52w: 1415.70,
    low52w: 1097.60,
    dayHigh: 1235.00,
    dayLow: 1210.00,
    volume: 132000,
    turnover: 161568000,
    marketCapNpr: '30.6 Billion',
    sources: [
      {
        sourceName: 'Merolagani',
        sourceUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=HDL',
        lastPrice: 1224.00,
        change: 7.00,
        percentChange: 0.58,
        volume: 132000,
        lastUpdated: '14:59:18 NPT',
        status: 'SYNCED',
        notes: 'Festival season sales volume uptick reported'
      },
      {
        sourceName: 'ShareSansar',
        sourceUrl: 'https://www.sharesansar.com/company/hdl',
        lastPrice: 1224.00,
        change: 7.00,
        percentChange: 0.58,
        volume: 131800,
        lastUpdated: '14:58:48 NPT',
        status: 'SYNCED',
        notes: 'Buy pressure high from Broker 38 and 44'
      },
      {
        sourceName: 'NepaliPaisa',
        sourceUrl: 'https://nepalipaisa.com/hdl',
        lastPrice: 1224.00,
        change: 7.00,
        percentChange: 0.58,
        volume: 132000,
        lastUpdated: '14:58:52 NPT',
        status: 'SYNCED',
        notes: 'Turnover ranked #4 on manufacturing sub-index'
      },
      {
        sourceName: 'NEPSE',
        sourceUrl: 'https://nepalstock.com.np/company/detail/HDL',
        lastPrice: 1224.00,
        change: 7.00,
        percentChange: 0.58,
        volume: 132000,
        lastUpdated: '14:58:30 NPT',
        status: 'SYNCED',
        notes: 'Active script'
      }
    ],
    technicals: {
      rsi: 65.8,
      rsiSignal: 'NEUTRAL',
      macd: {
        macdLine: 18.2,
        signalLine: 11.5,
        histogram: 6.7,
        trend: 'BULLISH'
      },
      sma20: 1475.0,
      sma50: 1420.0,
      sma200: 1590.0,
      bollingerBands: {
        upper: 1565.0,
        middle: 1475.0,
        lower: 1385.0
      },
      supportLevel: 1480.0,
      resistanceLevel: 1585.0,
      volumeTrend: 'SURGING',
      technicalScore: 82
    },
    history: [
      { date: '2026-08-25', open: 1420, high: 1445, low: 1410, close: 1435, volume: 85000 },
      { date: '2026-08-26', open: 1440, high: 1460, low: 1430, close: 1450, volume: 92000 },
      { date: '2026-08-27', open: 1455, high: 1475, low: 1445, close: 1468, volume: 98000 },
      { date: '2026-08-30', open: 1470, high: 1485, low: 1460, close: 1475, volume: 105000 },
      { date: '2026-08-31', open: 1480, high: 1500, low: 1470, close: 1492, volume: 115000 },
      { date: '2026-09-01', open: 1495, high: 1515, low: 1485, close: 1505, volume: 110000 },
      { date: '2026-09-02', open: 1510, high: 1525, low: 1495, close: 1512, volume: 120000 },
      { date: '2026-09-03', open: 1515, high: 1530, low: 1500, close: 1508, volume: 118000 },
      { date: '2026-09-06', open: 1510, high: 1518, low: 1490, close: 1495, volume: 102000 },
      { date: '2026-09-07', open: 1490, high: 1555, low: 1490, close: 1540, volume: 132000 }
    ],
    prediction: {
      scriptSymbol: 'HDL',
      scriptName: 'Himalayan Distillery Limited',
      direction: 'INCREASE',
      confidencePercentage: 85,
      predictedPriceRange: {
        min: 1570.0,
        max: 1620.0,
        target: 1595.0
      },
      predictedChangePercent: 3.57,
      timeHorizon: 'Next Trading Day',
      technicalWeight: 45,
      sentimentWeight: 35,
      scrapingConsensusWeight: 20,
      keyCatalysts: [
        'Dashain and Tihar festive season consumption surge driving corporate revenue expectations',
        'Decisive volume breakout crossing above 20-day SMA',
        'Strong buy side consensus across Merolagani and ShareSansar'
      ],
      riskFactors: [
        'Long-term 200-day moving average overhead resistance at 1,590 NPR'
      ],
      aiExecutiveSummary: 'Predictive algorithm forecasts sustained price increase for HDL toward 1,595 NPR. Seasonal sentiment spikes and bullish momentum indicators are heavily aligned across all scraped data points.',
      historicalAccuracyRating: 87.8,
      lastCalculatedAt: 'Just now'
    }
  }
];

export const INITIAL_SCRIPTS: ScriptProduct[] = RAW_SCRIPTS.map(s => {
  const ext = SCRIPT_EXTENDED_DATA[s.symbol];
  if (ext) {
    return {
      ...s,
      nepalstockUrl: ext.nepalstockUrl,
      fundamentals: ext.fundamentals,
      dividends: ext.dividends,
      rightShares: ext.rightShares,
      quarterlyReports: ext.quarterlyReports,
      marketDepth: ext.marketDepth,
      companyProfile: ext.companyProfile
    };
  }
  return s;
});

export const INITIAL_NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Nepal Rastra Bank maintains supportive policy stance; interbank liquidity remains abundant above NPR 110 Billion',
    source: 'ShareSansar',
    url: 'https://www.sharesansar.com/newsdetail/nrb-liquidity-update',
    publishedAt: '28 mins ago',
    summary: 'Nepal Rastra Bank reported high loanable funds in commercial banks, keeping borrowing interest rates near historic multi-year lows and spurring equity market participation.',
    relevantScripts: ['NEPSE', 'NABIL', 'GBIME'],
    sentiment: 'BULLISH',
    sentimentScore: 0.88,
    impactWeight: 'HIGH'
  },
  {
    id: 'news-2',
    title: 'Commercial Banks register 14.5% surge in Q4 net operating revenue led by Nabil and Global IME',
    source: 'Merolagani',
    url: 'https://merolagani.com/NewsDetail.aspx?newsID=109842',
    publishedAt: '1 hour ago',
    summary: 'Audited financial reports reflect strong recovery in interest spreads and reduced provisions, setting expectations for higher cash and bonus dividends for FY 2082/83.',
    relevantScripts: ['NABIL', 'GBIME'],
    sentiment: 'BULLISH',
    sentimentScore: 0.82,
    impactWeight: 'HIGH'
  },
  {
    id: 'news-3',
    title: 'Hydropower electricity export to regional grids crosses 650 MW as river discharge peaks',
    source: 'NepaliPaisa',
    url: 'https://nepalipaisa.com/news/hydropower-export-peaks',
    publishedAt: '2 hours ago',
    summary: 'Nepal Electricity Authority reported milestone revenue from high-capacity transmission lines, benefiting listed hydro producers like Chilime Hydropower (CHCL).',
    relevantScripts: ['CHCL', 'NEPSE'],
    sentiment: 'BULLISH',
    sentimentScore: 0.79,
    impactWeight: 'MEDIUM'
  },
  {
    id: 'news-4',
    title: 'Cement manufacturers face raw material transport freight hike amidst infrastructure slowdown',
    source: 'Bizshala',
    url: 'https://bizshala.com/story/cement-cost-challenges',
    publishedAt: '3 hours ago',
    summary: 'Rising clinker logistics costs and sluggish monsoon construction demand continue to compress near-term gross profit margins across cement producers.',
    relevantScripts: ['SHIVM'],
    sentiment: 'BEARISH',
    sentimentScore: -0.74,
    impactWeight: 'HIGH'
  },
  {
    id: 'news-5',
    title: 'Citizen Investment Trust plans capital deployment into high-yield sovereign securities and green energy funds',
    source: 'ShareSansar',
    url: 'https://www.sharesansar.com/newsdetail/cit-fund-deployment',
    publishedAt: '4 hours ago',
    summary: 'CIT announced strategic allocations into secured fixed-income bonds, ensuring stable portfolio yield while maintaining balanced equity holdings.',
    relevantScripts: ['CIT'],
    sentiment: 'NEUTRAL',
    sentimentScore: 0.15,
    impactWeight: 'LOW'
  }
];

export const INITIAL_ALERTS: TriggeredAlert[] = [
  {
    id: 'alert-1',
    timestamp: '14:52 NPT',
    scriptSymbol: 'NABIL',
    scriptName: 'Nabil Bank Limited',
    title: 'Bullish Momentum & Volume Spike Detected',
    description: 'Trading volume surged +135% above 10-day moving average with cross-website consensus on Merolagani and ShareSansar pointing to price increase.',
    severity: 'CRITICAL',
    predictedImpact: 'PRICE_INCREASE',
    sourceWebsite: 'ShareSansar / Merolagani',
    isRead: false
  },
  {
    id: 'alert-2',
    timestamp: '14:38 NPT',
    scriptSymbol: 'SHIVM',
    scriptName: 'Shivam Cements Limited',
    title: 'Bearish Breakdown & Order Book Imbalance',
    description: 'ShareSansar and NepaliPaisa live depth shows ask-side supply exceeds bid demand by 71%. Price decrease predicted toward 461 NPR support.',
    severity: 'WARNING',
    predictedImpact: 'PRICE_DECREASE',
    sourceWebsite: 'ShareSansar',
    isRead: false
  },
  {
    id: 'alert-3',
    timestamp: '14:15 NPT',
    scriptSymbol: 'CHCL',
    scriptName: 'Chilime Hydropower Company',
    title: 'News Sentiment Surge (+0.79) & Resistance Break',
    description: 'Positive cross-border electricity export news triggered institutional bid aggression. RSI reached 71.2 with predicted +3.88% price hike.',
    severity: 'CRITICAL',
    predictedImpact: 'PRICE_INCREASE',
    sourceWebsite: 'NepaliPaisa / NEPSE',
    isRead: true
  }
];

export const INITIAL_ALERT_RULES: MarketAlertRule[] = [
  {
    id: 'rule-1',
    scriptSymbol: 'NABIL',
    triggerType: 'PRICE_INCREASE',
    thresholdValue: 2.5,
    conditionDescription: 'Alert when predicted price increase exceeds +2.5%',
    isActive: true,
    createdAt: '2026-09-01'
  },
  {
    id: 'rule-2',
    scriptSymbol: 'SHIVM',
    triggerType: 'PRICE_DECREASE',
    thresholdValue: 2.0,
    conditionDescription: 'Alert when price falls or predicted drop exceeds -2.0%',
    isActive: true,
    createdAt: '2026-09-02'
  },
  {
    id: 'rule-3',
    scriptSymbol: 'CHCL',
    triggerType: 'VOLUME_SPIKE',
    thresholdValue: 1.5,
    conditionDescription: 'Alert when trading volume crosses 1.5x 10-day average',
    isActive: true,
    createdAt: '2026-09-04'
  },
  {
    id: 'rule-4',
    scriptSymbol: 'NEPSE',
    triggerType: 'SENTIMENT_SHIFT',
    thresholdValue: 0.7,
    conditionDescription: 'Alert when news sentiment score shifts above +0.70',
    isActive: true,
    createdAt: '2026-09-05'
  }
];
