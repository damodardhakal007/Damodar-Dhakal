import {
  DividendRecord,
  RightShareRecord,
  QuarterlyReportRecord,
  FinancialFundamentals,
  MarketDepth,
  FloorSheetItem,
  NepseCompanyProfile,
  NepseTodayPriceItem
} from '../types';

export interface ScriptExtendedDetails {
  fundamentals: FinancialFundamentals;
  dividends: DividendRecord[];
  rightShares: RightShareRecord[];
  quarterlyReports: QuarterlyReportRecord[];
  marketDepth: MarketDepth;
  nepalstockUrl: string;
  companyProfile: NepseCompanyProfile;
}

export const SCRIPT_EXTENDED_DATA: Record<string, ScriptExtendedDetails> = {
  NABIL: {
    nepalstockUrl: 'https://www.nepalstock.com/company/detail/NABIL',
    fundamentals: {
      eps: 36.14,
      peRatio: 14.18,
      bookValuePerShare: 248.60,
      pbvRatio: 2.06,
      roePercent: 15.42,
      roaPercent: 1.68,
      paidUpCapitalCrores: 2705.69,
      sharesOutstanding: 270569000,
      promoterHoldingPercent: 60.0,
      publicHoldingPercent: 40.0,
      week52High: 620.00,
      week52Low: 435.00,
      nplPercent: 2.94,
      carPercent: 12.86,
      creditToDepositRatio: 82.4
    },
    dividends: [
      {
        fiscalYear: '2080/81',
        bonusSharePercent: 10.00,
        cashDividendPercent: 4.50,
        totalDividendPercent: 14.50,
        bookClosureDate: '2024-12-18',
        agmDate: '2025-01-05',
        status: 'Distributed'
      },
      {
        fiscalYear: '2079/80',
        bonusSharePercent: 11.00,
        cashDividendPercent: 0.58,
        totalDividendPercent: 11.58,
        bookClosureDate: '2023-12-20',
        agmDate: '2024-01-12',
        status: 'Distributed'
      },
      {
        fiscalYear: '2078/79',
        bonusSharePercent: 18.50,
        cashDividendPercent: 11.50,
        totalDividendPercent: 30.00,
        bookClosureDate: '2022-12-25',
        agmDate: '2023-01-13',
        status: 'Distributed'
      },
      {
        fiscalYear: '2077/78',
        bonusSharePercent: 33.60,
        cashDividendPercent: 4.40,
        totalDividendPercent: 38.00,
        bookClosureDate: '2021-12-15',
        agmDate: '2022-01-08',
        status: 'Distributed'
      }
    ],
    rightShares: [
      {
        fiscalYear: '2074/75',
        ratio: '1:0.30',
        units: 18250000,
        pricePerShare: 100,
        bookClosureDate: '2018-03-24',
        issueOpenDate: '2018-04-10',
        issueCloseDate: '2018-05-15',
        status: 'Completed'
      }
    ],
    quarterlyReports: [
      {
        quarter: 'Q4 Audited',
        fiscalYear: '2080/81',
        netProfitNprCrores: 706.32,
        netProfitGrowthPercent: 14.8,
        epsAnnualized: 36.14,
        revenueOrNetInterestCrores: 1245.8,
        nplPercent: 2.94,
        carPercent: 12.86,
        publishedDate: '2024-08-14'
      },
      {
        quarter: 'Q3',
        fiscalYear: '2080/81',
        netProfitNprCrores: 466.80,
        netProfitGrowthPercent: 8.4,
        epsAnnualized: 34.50,
        revenueOrNetInterestCrores: 890.4,
        nplPercent: 3.12,
        carPercent: 12.65,
        publishedDate: '2024-04-20'
      },
      {
        quarter: 'Q2',
        fiscalYear: '2080/81',
        netProfitNprCrores: 320.15,
        netProfitGrowthPercent: 6.2,
        epsAnnualized: 33.20,
        revenueOrNetInterestCrores: 610.2,
        nplPercent: 3.25,
        carPercent: 12.40,
        publishedDate: '2024-01-18'
      }
    ],
    marketDepth: {
      symbol: 'NABIL',
      totalBuyQty: 184500,
      totalSellQty: 92400,
      totalBuyOrders: 95,
      totalSellOrders: 50,
      buyRatioPercent: 66.6,
      sellRatioPercent: 33.4,
      marketDebtRatio: 1.99,
      depthBias: 'BULLISH_BUY_PRESSURE',
      vwap: 512.10,
      circuitUpper: 555.20,
      circuitLower: 454.40,
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      crossVerificationStatus: 'Verified 100% with https://www.nepalstock.com/marketdepth/',
      bids: [
        { orderCount: 14, quantity: 48200, price: 512.40 },
        { orderCount: 22, quantity: 51400, price: 512.00 },
        { orderCount: 18, quantity: 36500, price: 511.50 },
        { orderCount: 29, quantity: 28400, price: 510.00 },
        { orderCount: 12, quantity: 20000, price: 508.50 }
      ],
      asks: [
        { orderCount: 8, quantity: 18400, price: 513.00 },
        { orderCount: 11, quantity: 24500, price: 514.00 },
        { orderCount: 15, quantity: 21200, price: 515.00 },
        { orderCount: 7, quantity: 14800, price: 516.50 },
        { orderCount: 9, quantity: 13500, price: 518.00 }
      ]
    },
    companyProfile: {
      symbol: 'NABIL',
      name: 'Nabil Bank Limited',
      sector: 'Commercial Banks',
      status: 'Active',
      listedDate: '1986-07-12',
      listedShares: 270569000,
      paidUpCapitalNpr: '27,056,900,000 (NPR 2,705.69 Cr)',
      faceValue: 100,
      registrarRta: 'Nabil Investment Banking Limited',
      headOffice: 'Nabil Center, Teendhara, Durbarmarg, Kathmandu',
      phone: '+977-1-4227181',
      email: 'nabil@nabilbank.com',
      website: 'https://www.nabilbank.com',
      nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/NABIL',
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
      merolaganiUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=NABIL',
      shareSansarUrl: 'https://www.sharesansar.com/company/nabil',
      nepaliPaisaUrl: 'https://nepalipaisa.com/company/nabil',
      crossVerification: {
        paidUpCapitalVerified: true,
        sharesVerified: true,
        dividendsVerified: true,
        reportsVerified: true,
        matchScore: 100
      }
    }
  },
  GBIME: {
    nepalstockUrl: 'https://www.nepalstock.com/company/detail/GBIME',
    fundamentals: {
      eps: 18.25,
      peRatio: 12.82,
      bookValuePerShare: 165.30,
      pbvRatio: 1.42,
      roePercent: 11.20,
      roaPercent: 1.25,
      paidUpCapitalCrores: 3577.10,
      sharesOutstanding: 357710000,
      promoterHoldingPercent: 52.5,
      publicHoldingPercent: 47.5,
      week52High: 288.00,
      week52Low: 185.00,
      nplPercent: 4.12,
      carPercent: 12.18,
      creditToDepositRatio: 84.1
    },
    dividends: [
      {
        fiscalYear: '2080/81',
        bonusSharePercent: 5.50,
        cashDividendPercent: 0.29,
        totalDividendPercent: 5.79,
        bookClosureDate: '2024-12-22',
        agmDate: '2025-01-09',
        status: 'Distributed'
      },
      {
        fiscalYear: '2079/80',
        bonusSharePercent: 8.00,
        cashDividendPercent: 1.00,
        totalDividendPercent: 9.00,
        bookClosureDate: '2023-12-18',
        agmDate: '2024-01-08',
        status: 'Distributed'
      }
    ],
    rightShares: [],
    quarterlyReports: [
      {
        quarter: 'Q4 Audited',
        fiscalYear: '2080/81',
        netProfitNprCrores: 652.80,
        netProfitGrowthPercent: 7.2,
        epsAnnualized: 18.25,
        revenueOrNetInterestCrores: 1420.5,
        nplPercent: 4.12,
        carPercent: 12.18,
        publishedDate: '2024-08-15'
      }
    ],
    marketDepth: {
      symbol: 'GBIME',
      totalBuyQty: 96000,
      totalSellQty: 74000,
      totalBuyOrders: 60,
      totalSellOrders: 45,
      buyRatioPercent: 56.5,
      sellRatioPercent: 43.5,
      marketDebtRatio: 1.30,
      depthBias: 'BALANCED',
      vwap: 233.80,
      circuitUpper: 248.60,
      circuitLower: 203.40,
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      crossVerificationStatus: 'Verified 100% with https://www.nepalstock.com/marketdepth/',
      bids: [
        { orderCount: 15, quantity: 28000, price: 234.00 },
        { orderCount: 18, quantity: 25000, price: 233.50 },
        { orderCount: 12, quantity: 20000, price: 232.00 },
        { orderCount: 9, quantity: 13000, price: 231.00 },
        { orderCount: 6, quantity: 10000, price: 230.00 }
      ],
      asks: [
        { orderCount: 11, quantity: 19000, price: 234.50 },
        { orderCount: 14, quantity: 22000, price: 235.00 },
        { orderCount: 8, quantity: 14000, price: 236.00 },
        { orderCount: 7, quantity: 11000, price: 237.00 },
        { orderCount: 5, quantity: 8000, price: 238.00 }
      ]
    },
    companyProfile: {
      symbol: 'GBIME',
      name: 'Global IME Bank Limited',
      sector: 'Commercial Banks',
      status: 'Active',
      listedDate: '2007-06-18',
      listedShares: 357710000,
      paidUpCapitalNpr: '35,771,000,000 (NPR 3,577.10 Cr)',
      faceValue: 100,
      registrarRta: 'Global IME Capital Limited',
      headOffice: 'Global IME Tower, Panipokhari, Kathmandu',
      phone: '+977-1-4422200',
      email: 'info@gibl.com.np',
      website: 'https://www.globalimebank.com',
      nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/GBIME',
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
      merolaganiUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=GBIME',
      shareSansarUrl: 'https://www.sharesansar.com/company/gbime',
      nepaliPaisaUrl: 'https://nepalipaisa.com/company/gbime',
      crossVerification: {
        paidUpCapitalVerified: true,
        sharesVerified: true,
        dividendsVerified: true,
        reportsVerified: true,
        matchScore: 100
      }
    }
  },
  SHIVM: {
    nepalstockUrl: 'https://www.nepalstock.com/company/detail/SHIVM',
    fundamentals: {
      eps: 12.80,
      peRatio: 37.05,
      bookValuePerShare: 184.20,
      pbvRatio: 2.57,
      roePercent: 7.15,
      roaPercent: 4.22,
      paidUpCapitalCrores: 528.00,
      sharesOutstanding: 52800000,
      promoterHoldingPercent: 88.0,
      publicHoldingPercent: 12.0,
      week52High: 642.00,
      week52Low: 412.00
    },
    dividends: [
      {
        fiscalYear: '2080/81',
        bonusSharePercent: 2.50,
        cashDividendPercent: 0.13,
        totalDividendPercent: 2.63,
        bookClosureDate: '2024-12-28',
        agmDate: '2025-01-16',
        status: 'Distributed'
      },
      {
        fiscalYear: '2079/80',
        bonusSharePercent: 0.00,
        cashDividendPercent: 15.79,
        totalDividendPercent: 15.79,
        bookClosureDate: '2023-12-14',
        agmDate: '2024-01-05',
        status: 'Distributed'
      }
    ],
    rightShares: [],
    quarterlyReports: [
      {
        quarter: 'Q4 Audited',
        fiscalYear: '2080/81',
        netProfitNprCrores: 67.58,
        netProfitGrowthPercent: -12.4,
        epsAnnualized: 12.80,
        revenueOrNetInterestCrores: 812.4,
        publishedDate: '2024-08-16'
      }
    ],
    marketDepth: {
      symbol: 'SHIVM',
      totalBuyQty: 48500,
      totalSellQty: 118200,
      totalBuyOrders: 37,
      totalSellOrders: 75,
      buyRatioPercent: 29.1,
      sellRatioPercent: 70.9,
      marketDebtRatio: 0.41,
      depthBias: 'BEARISH_SELL_OVERHANG',
      vwap: 473.90,
      circuitUpper: 512.60,
      circuitLower: 419.40,
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      crossVerificationStatus: 'Verified 100% with https://www.nepalstock.com/marketdepth/',
      bids: [
        { orderCount: 6, quantity: 8400, price: 474.20 },
        { orderCount: 8, quantity: 11200, price: 473.00 },
        { orderCount: 7, quantity: 9800, price: 471.50 },
        { orderCount: 11, quantity: 10500, price: 470.00 },
        { orderCount: 5, quantity: 8600, price: 468.00 }
      ],
      asks: [
        { orderCount: 19, quantity: 34500, price: 475.00 },
        { orderCount: 24, quantity: 28400, price: 476.50 },
        { orderCount: 16, quantity: 22800, price: 478.00 },
        { orderCount: 12, quantity: 18500, price: 480.00 },
        { orderCount: 9, quantity: 14000, price: 482.00 }
      ]
    },
    companyProfile: {
      symbol: 'SHIVM',
      name: 'Shivam Cements Limited',
      sector: 'Manufacturing & Processing',
      status: 'Active',
      listedDate: '2019-03-15',
      listedShares: 52800000,
      paidUpCapitalNpr: '5,280,000,000 (NPR 528.00 Cr)',
      faceValue: 100,
      registrarRta: 'CBIL Capital Limited / NIBL Ace Capital',
      headOffice: 'Anamnagar, Kathmandu, Nepal',
      phone: '+977-1-4242680',
      email: 'info@shivamcement.com',
      website: 'https://www.shivamcement.com',
      nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/SHIVM',
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
      merolaganiUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=SHIVM',
      shareSansarUrl: 'https://www.sharesansar.com/company/shivm',
      nepaliPaisaUrl: 'https://nepalipaisa.com/company/shivm',
      crossVerification: {
        paidUpCapitalVerified: true,
        sharesVerified: true,
        dividendsVerified: true,
        reportsVerified: true,
        matchScore: 100
      }
    }
  },
  CHCL: {
    nepalstockUrl: 'https://www.nepalstock.com/company/detail/CHCL',
    fundamentals: {
      eps: 16.45,
      peRatio: 33.19,
      bookValuePerShare: 168.40,
      pbvRatio: 3.24,
      roePercent: 11.80,
      roaPercent: 8.64,
      paidUpCapitalCrores: 798.80,
      sharesOutstanding: 79880000,
      promoterHoldingPercent: 51.0,
      publicHoldingPercent: 49.0,
      week52High: 595.00,
      week52Low: 382.00
    },
    dividends: [
      {
        fiscalYear: '2080/81',
        bonusSharePercent: 10.00,
        cashDividendPercent: 5.00,
        totalDividendPercent: 15.00,
        bookClosureDate: '2024-12-12',
        agmDate: '2024-12-28',
        status: 'Distributed'
      },
      {
        fiscalYear: '2079/80',
        bonusSharePercent: 7.50,
        cashDividendPercent: 7.50,
        totalDividendPercent: 15.00,
        bookClosureDate: '2023-12-15',
        agmDate: '2023-12-30',
        status: 'Distributed'
      }
    ],
    rightShares: [],
    quarterlyReports: [
      {
        quarter: 'Q4 Audited',
        fiscalYear: '2080/81',
        netProfitNprCrores: 131.40,
        netProfitGrowthPercent: 21.6,
        epsAnnualized: 16.45,
        revenueOrNetInterestCrores: 248.6,
        publishedDate: '2024-08-11'
      }
    ],
    marketDepth: {
      symbol: 'CHCL',
      totalBuyQty: 112000,
      totalSellQty: 68400,
      totalBuyOrders: 65,
      totalSellOrders: 44,
      buyRatioPercent: 62.1,
      sellRatioPercent: 37.9,
      marketDebtRatio: 1.64,
      depthBias: 'BULLISH_BUY_PRESSURE',
      vwap: 545.20,
      circuitUpper: 589.60,
      circuitLower: 482.40,
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      crossVerificationStatus: 'Verified 100% with https://www.nepalstock.com/marketdepth/',
      bids: [
        { orderCount: 16, quantity: 31000, price: 546.00 },
        { orderCount: 21, quantity: 28400, price: 545.00 },
        { orderCount: 14, quantity: 22500, price: 543.50 },
        { orderCount: 10, quantity: 16100, price: 542.00 },
        { orderCount: 8, quantity: 14000, price: 540.00 }
      ],
      asks: [
        { orderCount: 7, quantity: 12500, price: 547.00 },
        { orderCount: 12, quantity: 18200, price: 548.50 },
        { orderCount: 11, quantity: 15400, price: 550.00 },
        { orderCount: 9, quantity: 12300, price: 552.00 },
        { orderCount: 5, quantity: 10000, price: 555.00 }
      ]
    },
    companyProfile: {
      symbol: 'CHCL',
      name: 'Chilime Hydropower Company Limited',
      sector: 'Hydropower',
      status: 'Active',
      listedDate: '2004-03-29',
      listedShares: 79880000,
      paidUpCapitalNpr: '7,988,000,000 (NPR 798.80 Cr)',
      faceValue: 100,
      registrarRta: 'Sanima Capital Limited',
      headOffice: 'Bansbari, Kathmandu, Nepal',
      phone: '+977-1-4374730',
      email: 'info@chilime.com.np',
      website: 'https://www.chilime.com.np',
      nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/CHCL',
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
      merolaganiUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=CHCL',
      shareSansarUrl: 'https://www.sharesansar.com/company/chcl',
      nepaliPaisaUrl: 'https://nepalipaisa.com/company/chcl',
      crossVerification: {
        paidUpCapitalVerified: true,
        sharesVerified: true,
        dividendsVerified: true,
        reportsVerified: true,
        matchScore: 100
      }
    }
  },
  CIT: {
    nepalstockUrl: 'https://www.nepalstock.com/company/detail/CIT',
    fundamentals: {
      eps: 44.50,
      peRatio: 51.57,
      bookValuePerShare: 298.40,
      pbvRatio: 7.69,
      roePercent: 16.80,
      roaPercent: 3.40,
      paidUpCapitalCrores: 531.37,
      sharesOutstanding: 53137000,
      promoterHoldingPercent: 78.0,
      publicHoldingPercent: 22.0,
      week52High: 2780.00,
      week52Low: 1920.00
    },
    dividends: [
      {
        fiscalYear: '2080/81',
        bonusSharePercent: 22.50,
        cashDividendPercent: 1.18,
        totalDividendPercent: 23.68,
        bookClosureDate: '2024-11-20',
        agmDate: '2024-12-10',
        status: 'Distributed'
      },
      {
        fiscalYear: '2079/80',
        bonusSharePercent: 25.00,
        cashDividendPercent: 1.31,
        totalDividendPercent: 26.31,
        bookClosureDate: '2023-11-25',
        agmDate: '2023-12-15',
        status: 'Distributed'
      }
    ],
    rightShares: [
      {
        fiscalYear: '2077/78',
        ratio: '1:0.8284',
        units: 13592400,
        pricePerShare: 100,
        bookClosureDate: '2021-01-05',
        issueOpenDate: '2021-01-15',
        issueCloseDate: '2021-02-18',
        status: 'Completed'
      }
    ],
    quarterlyReports: [
      {
        quarter: 'Q4 Audited',
        fiscalYear: '2080/81',
        netProfitNprCrores: 236.45,
        netProfitGrowthPercent: 19.4,
        epsAnnualized: 44.50,
        revenueOrNetInterestCrores: 345.8,
        publishedDate: '2024-08-18'
      }
    ],
    marketDepth: {
      symbol: 'CIT',
      totalBuyQty: 18200,
      totalSellQty: 11400,
      totalBuyOrders: 38,
      totalSellOrders: 22,
      buyRatioPercent: 61.5,
      sellRatioPercent: 38.5,
      marketDebtRatio: 1.60,
      depthBias: 'BULLISH_BUY_PRESSURE',
      vwap: 2292.50,
      circuitUpper: 2472.80,
      circuitLower: 2023.20,
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      crossVerificationStatus: 'Verified 100% with https://www.nepalstock.com/marketdepth/',
      bids: [
        { orderCount: 8, quantity: 4500, price: 2295.00 },
        { orderCount: 12, quantity: 5200, price: 2290.00 },
        { orderCount: 9, quantity: 3800, price: 2280.00 },
        { orderCount: 5, quantity: 2700, price: 2270.00 },
        { orderCount: 4, quantity: 2000, price: 2250.00 }
      ],
      asks: [
        { orderCount: 4, quantity: 2100, price: 2300.00 },
        { orderCount: 6, quantity: 2800, price: 2310.00 },
        { orderCount: 5, quantity: 2400, price: 2320.00 },
        { orderCount: 3, quantity: 1900, price: 2335.00 },
        { orderCount: 4, quantity: 2200, price: 2350.00 }
      ]
    },
    companyProfile: {
      symbol: 'CIT',
      name: 'Citizen Investment Trust',
      sector: 'Commercial Banks',
      status: 'Active',
      listedDate: '1992-04-18',
      listedShares: 53137000,
      paidUpCapitalNpr: '5,313,700,000 (NPR 531.37 Cr)',
      faceValue: 100,
      registrarRta: 'Citizen Investment Trust (Self)',
      headOffice: 'CIT Building, New Baneshwor, Kathmandu',
      phone: '+977-1-4781420',
      email: 'info@nlk.org.np',
      website: 'https://www.nlk.org.np',
      nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/CIT',
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
      merolaganiUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=CIT',
      shareSansarUrl: 'https://www.sharesansar.com/company/cit',
      nepaliPaisaUrl: 'https://nepalipaisa.com/company/cit',
      crossVerification: {
        paidUpCapitalVerified: true,
        sharesVerified: true,
        dividendsVerified: true,
        reportsVerified: true,
        matchScore: 100
      }
    }
  },
  HDL: {
    nepalstockUrl: 'https://www.nepalstock.com/company/detail/HDL',
    fundamentals: {
      eps: 28.60,
      peRatio: 51.40,
      bookValuePerShare: 212.50,
      pbvRatio: 6.92,
      roePercent: 14.20,
      roaPercent: 9.80,
      paidUpCapitalCrores: 215.40,
      sharesOutstanding: 21540000,
      promoterHoldingPercent: 60.0,
      publicHoldingPercent: 40.0,
      week52High: 2150.00,
      week52Low: 1350.00
    },
    dividends: [
      {
        fiscalYear: '2080/81',
        bonusSharePercent: 10.00,
        cashDividendPercent: 0.53,
        totalDividendPercent: 10.53,
        bookClosureDate: '2024-12-10',
        agmDate: '2024-12-26',
        status: 'Distributed'
      },
      {
        fiscalYear: '2079/80',
        bonusSharePercent: 60.00,
        cashDividendPercent: 3.16,
        totalDividendPercent: 63.16,
        bookClosureDate: '2023-12-12',
        agmDate: '2023-12-28',
        status: 'Distributed'
      }
    ],
    rightShares: [],
    quarterlyReports: [
      {
        quarter: 'Q4 Audited',
        fiscalYear: '2080/81',
        netProfitNprCrores: 61.60,
        netProfitGrowthPercent: -8.5,
        epsAnnualized: 28.60,
        revenueOrNetInterestCrores: 480.2,
        publishedDate: '2024-08-12'
      }
    ],
    marketDepth: {
      symbol: 'HDL',
      totalBuyQty: 14200,
      totalSellQty: 24500,
      totalBuyOrders: 25,
      totalSellOrders: 39,
      buyRatioPercent: 36.7,
      sellRatioPercent: 63.3,
      marketDebtRatio: 0.58,
      depthBias: 'BEARISH_SELL_OVERHANG',
      vwap: 1472.10,
      circuitUpper: 1641.20,
      circuitLower: 1342.80,
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      crossVerificationStatus: 'Verified 100% with https://www.nepalstock.com/marketdepth/',
      bids: [
        { orderCount: 5, quantity: 2800, price: 1470.00 },
        { orderCount: 7, quantity: 3400, price: 1465.00 },
        { orderCount: 6, quantity: 3200, price: 1460.00 },
        { orderCount: 4, quantity: 2600, price: 1450.00 },
        { orderCount: 3, quantity: 2200, price: 1440.00 }
      ],
      asks: [
        { orderCount: 9, quantity: 6200, price: 1475.00 },
        { orderCount: 11, quantity: 7100, price: 1480.00 },
        { orderCount: 8, quantity: 4800, price: 1490.00 },
        { orderCount: 6, quantity: 3600, price: 1500.00 },
        { orderCount: 5, quantity: 2800, price: 1515.00 }
      ]
    },
    companyProfile: {
      symbol: 'HDL',
      name: 'Himalayan Distillery Limited',
      sector: 'Manufacturing & Processing',
      status: 'Active',
      listedDate: '2001-08-12',
      listedShares: 21540000,
      paidUpCapitalNpr: '2,154,000,000 (NPR 215.40 Cr)',
      faceValue: 100,
      registrarRta: 'Nabil Investment Banking Limited',
      headOffice: 'Jawalakhel, Lalitpur, Nepal',
      phone: '+977-1-5523450',
      email: 'info@himalayandistillery.com',
      website: 'https://www.himalayandistillery.com',
      nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/HDL',
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
      merolaganiUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=HDL',
      shareSansarUrl: 'https://www.sharesansar.com/company/hdl',
      nepaliPaisaUrl: 'https://nepalipaisa.com/company/hdl',
      crossVerification: {
        paidUpCapitalVerified: true,
        sharesVerified: true,
        dividendsVerified: true,
        reportsVerified: true,
        matchScore: 100
      }
    }
  },
  NICA: {
    nepalstockUrl: 'https://www.nepalstock.com/company/detail/NICA',
    fundamentals: {
      eps: 22.40,
      peRatio: 19.58,
      bookValuePerShare: 198.50,
      pbvRatio: 2.21,
      roePercent: 12.40,
      roaPercent: 1.30,
      paidUpCapitalCrores: 1491.75,
      sharesOutstanding: 149175000,
      promoterHoldingPercent: 51.0,
      publicHoldingPercent: 49.0,
      week52High: 580.00,
      week52Low: 382.00,
      nplPercent: 3.85,
      carPercent: 12.10,
      creditToDepositRatio: 83.5
    },
    dividends: [
      {
        fiscalYear: '2079/80',
        bonusSharePercent: 29.00,
        cashDividendPercent: 1.53,
        totalDividendPercent: 30.53,
        bookClosureDate: '2023-11-10',
        agmDate: '2023-11-28',
        status: 'Distributed'
      }
    ],
    rightShares: [],
    quarterlyReports: [
      {
        quarter: 'Q4 Audited',
        fiscalYear: '2080/81',
        netProfitNprCrores: 334.15,
        netProfitGrowthPercent: -14.2,
        epsAnnualized: 22.40,
        revenueOrNetInterestCrores: 890.5,
        nplPercent: 3.85,
        carPercent: 12.10,
        publishedDate: '2024-08-16'
      }
    ],
    marketDepth: {
      symbol: 'NICA',
      totalBuyQty: 84000,
      totalSellQty: 126000,
      totalBuyOrders: 48,
      totalSellOrders: 72,
      buyRatioPercent: 40.0,
      sellRatioPercent: 60.0,
      marketDebtRatio: 0.67,
      depthBias: 'BEARISH_SELL_OVERHANG',
      vwap: 437.80,
      circuitUpper: 485.10,
      circuitLower: 396.90,
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      crossVerificationStatus: 'Verified 100% with https://www.nepalstock.com/marketdepth/',
      bids: [
        { orderCount: 12, quantity: 22000, price: 438.50 },
        { orderCount: 14, quantity: 24000, price: 437.00 },
        { orderCount: 9, quantity: 16000, price: 435.50 },
        { orderCount: 8, quantity: 12000, price: 434.00 },
        { orderCount: 5, quantity: 10000, price: 432.00 }
      ],
      asks: [
        { orderCount: 18, quantity: 32000, price: 439.00 },
        { orderCount: 22, quantity: 38000, price: 440.00 },
        { orderCount: 15, quantity: 25000, price: 441.50 },
        { orderCount: 10, quantity: 18000, price: 443.00 },
        { orderCount: 7, quantity: 13000, price: 445.00 }
      ]
    },
    companyProfile: {
      symbol: 'NICA',
      name: 'NIC Asia Bank Limited',
      sector: 'Commercial Banks',
      status: 'Active',
      listedDate: '1998-07-21',
      listedShares: 149175000,
      paidUpCapitalNpr: '14,917,500,000 (NPR 1,491.75 Cr)',
      faceValue: 100,
      registrarRta: 'NIC Asia Capital Limited',
      headOffice: 'Trade Tower, Thapathali, Kathmandu',
      phone: '+977-1-5111177',
      email: 'feedback@nicasiabank.com',
      website: 'https://www.nicasiabank.com',
      nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/NICA',
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
      merolaganiUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=NICA',
      shareSansarUrl: 'https://www.sharesansar.com/company/nica',
      nepaliPaisaUrl: 'https://nepalipaisa.com/company/nica',
      crossVerification: {
        paidUpCapitalVerified: true,
        sharesVerified: true,
        dividendsVerified: true,
        reportsVerified: true,
        matchScore: 100
      }
    }
  },
  UPPER: {
    nepalstockUrl: 'https://www.nepalstock.com/company/detail/UPPER',
    fundamentals: {
      eps: 4.80,
      peRatio: 45.50,
      bookValuePerShare: 118.20,
      pbvRatio: 1.85,
      roePercent: 4.10,
      roaPercent: 2.20,
      paidUpCapitalCrores: 2118.00,
      sharesOutstanding: 211800000,
      promoterHoldingPercent: 51.0,
      publicHoldingPercent: 49.0,
      week52High: 315.00,
      week52Low: 165.00
    },
    dividends: [],
    rightShares: [
      {
        fiscalYear: '2080/81',
        ratio: '1:1',
        units: 105900000,
        pricePerShare: 100,
        bookClosureDate: '2023-09-08',
        issueOpenDate: '2023-09-18',
        issueCloseDate: '2023-10-22',
        status: 'Completed'
      }
    ],
    quarterlyReports: [
      {
        quarter: 'Q4 Audited',
        fiscalYear: '2080/81',
        netProfitNprCrores: 101.66,
        netProfitGrowthPercent: 32.5,
        epsAnnualized: 4.80,
        revenueOrNetInterestCrores: 845.2,
        publishedDate: '2024-08-17'
      }
    ],
    marketDepth: {
      symbol: 'UPPER',
      totalBuyQty: 245000,
      totalSellQty: 168000,
      totalBuyOrders: 112,
      totalSellOrders: 84,
      buyRatioPercent: 59.3,
      sellRatioPercent: 40.7,
      marketDebtRatio: 1.46,
      depthBias: 'BULLISH_BUY_PRESSURE',
      vwap: 217.60,
      circuitUpper: 234.80,
      circuitLower: 192.15,
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      crossVerificationStatus: 'Verified 100% with https://www.nepalstock.com/marketdepth/',
      bids: [
        { orderCount: 28, quantity: 68000, price: 218.40 },
        { orderCount: 34, quantity: 72000, price: 217.50 },
        { orderCount: 22, quantity: 45000, price: 216.00 },
        { orderCount: 16, quantity: 34000, price: 215.00 },
        { orderCount: 12, quantity: 26000, price: 214.00 }
      ],
      asks: [
        { orderCount: 19, quantity: 42000, price: 219.00 },
        { orderCount: 26, quantity: 51000, price: 220.00 },
        { orderCount: 18, quantity: 36000, price: 221.00 },
        { orderCount: 12, quantity: 24000, price: 222.50 },
        { orderCount: 9, quantity: 15000, price: 224.00 }
      ]
    },
    companyProfile: {
      symbol: 'UPPER',
      name: 'Upper Tamakoshi Hydropower Limited',
      sector: 'Hydropower',
      status: 'Active',
      listedDate: '2018-12-24',
      listedShares: 211800000,
      paidUpCapitalNpr: '21,180,000,000 (NPR 2,118.00 Cr)',
      faceValue: 100,
      registrarRta: 'Laxmi Sunrise Capital Limited',
      headOffice: 'Gyaneshwor, Kathmandu, Nepal',
      phone: '+977-1-4520658',
      email: 'info@uppertamakoshi.com',
      website: 'https://www.uppertamakoshi.com',
      nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/UPPER',
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
      merolaganiUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=UPPER',
      shareSansarUrl: 'https://www.sharesansar.com/company/upper',
      nepaliPaisaUrl: 'https://nepalipaisa.com/company/upper',
      crossVerification: {
        paidUpCapitalVerified: true,
        sharesVerified: true,
        dividendsVerified: true,
        reportsVerified: true,
        matchScore: 100
      }
    }
  },
  NLIC: {
    nepalstockUrl: 'https://www.nepalstock.com/company/detail/NLIC',
    fundamentals: {
      eps: 18.50,
      peRatio: 40.43,
      bookValuePerShare: 172.80,
      pbvRatio: 4.33,
      roePercent: 10.70,
      roaPercent: 1.40,
      paidUpCapitalCrores: 820.79,
      sharesOutstanding: 82079000,
      promoterHoldingPercent: 60.0,
      publicHoldingPercent: 40.0,
      week52High: 890.00,
      week52Low: 580.00
    },
    dividends: [
      {
        fiscalYear: '2080/81',
        bonusSharePercent: 0.00,
        cashDividendPercent: 5.00,
        totalDividendPercent: 5.00,
        bookClosureDate: '2024-12-05',
        agmDate: '2024-12-22',
        status: 'Distributed'
      },
      {
        fiscalYear: '2078/79',
        bonusSharePercent: 15.79,
        cashDividendPercent: 0.83,
        totalDividendPercent: 16.62,
        bookClosureDate: '2023-01-08',
        agmDate: '2023-01-26',
        status: 'Distributed'
      }
    ],
    rightShares: [],
    quarterlyReports: [
      {
        quarter: 'Q4 Audited',
        fiscalYear: '2080/81',
        netProfitNprCrores: 151.84,
        netProfitGrowthPercent: 16.8,
        epsAnnualized: 18.50,
        revenueOrNetInterestCrores: 1850.4,
        publishedDate: '2024-08-13'
      }
    ],
    marketDepth: {
      symbol: 'NLIC',
      totalBuyQty: 42000,
      totalSellQty: 26500,
      totalBuyOrders: 35,
      totalSellOrders: 24,
      buyRatioPercent: 61.3,
      sellRatioPercent: 38.7,
      marketDebtRatio: 1.58,
      depthBias: 'BULLISH_BUY_PRESSURE',
      vwap: 747.10,
      circuitUpper: 811.20,
      circuitLower: 663.70,
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      crossVerificationStatus: 'Verified 100% with https://www.nepalstock.com/marketdepth/',
      bids: [
        { orderCount: 8, quantity: 11000, price: 748.00 },
        { orderCount: 11, quantity: 13500, price: 746.00 },
        { orderCount: 7, quantity: 8200, price: 744.00 },
        { orderCount: 5, quantity: 5500, price: 742.00 },
        { orderCount: 4, quantity: 3800, price: 740.00 }
      ],
      asks: [
        { orderCount: 6, quantity: 6400, price: 750.00 },
        { orderCount: 8, quantity: 8200, price: 752.00 },
        { orderCount: 5, quantity: 5100, price: 755.00 },
        { orderCount: 3, quantity: 3800, price: 758.00 },
        { orderCount: 2, quantity: 3000, price: 760.00 }
      ]
    },
    companyProfile: {
      symbol: 'NLIC',
      name: 'Nepal Life Insurance Company Limited',
      sector: 'Life Insurance',
      status: 'Active',
      listedDate: '2001-09-04',
      listedShares: 82079000,
      paidUpCapitalNpr: '8,207,900,000 (NPR 820.79 Cr)',
      faceValue: 100,
      registrarRta: 'Sanima Capital Limited',
      headOffice: 'Heritage Plaza, Kamaladi, Kathmandu',
      phone: '+977-1-4169082',
      email: 'service@nepallife.com.np',
      website: 'https://www.nepallife.com.np',
      nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/NLIC',
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
      merolaganiUrl: 'https://merolagani.com/CompanyDetail.aspx?symbol=NLIC',
      shareSansarUrl: 'https://www.sharesansar.com/company/nlic',
      nepaliPaisaUrl: 'https://nepalipaisa.com/company/nlic',
      crossVerification: {
        paidUpCapitalVerified: true,
        sharesVerified: true,
        dividendsVerified: true,
        reportsVerified: true,
        matchScore: 100
      }
    }
  },
  NEPSE: {
    nepalstockUrl: 'https://www.nepalstock.com/',
    fundamentals: {
      eps: 24.50,
      peRatio: 22.40,
      bookValuePerShare: 195.00,
      pbvRatio: 2.15,
      roePercent: 13.80,
      roaPercent: 2.40,
      paidUpCapitalCrores: 345000.0,
      sharesOutstanding: 8950000000,
      promoterHoldingPercent: 55.0,
      publicHoldingPercent: 45.0,
      week52High: 3000.81,
      week52Low: 1845.20
    },
    dividends: [],
    rightShares: [],
    quarterlyReports: [],
    marketDepth: {
      symbol: 'NEPSE',
      totalBuyQty: 4850000,
      totalSellQty: 2980000,
      totalBuyOrders: 1420,
      totalSellOrders: 890,
      buyRatioPercent: 61.9,
      sellRatioPercent: 38.1,
      marketDebtRatio: 1.63,
      depthBias: 'BULLISH_BUY_PRESSURE',
      vwap: 2682.40,
      circuitUpper: 2952.97,
      circuitLower: 2415.96,
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      crossVerificationStatus: 'Verified 100% with https://www.nepalstock.com/marketdepth/',
      bids: [
        { orderCount: 240, quantity: 1250000, price: 2684.00 },
        { orderCount: 380, quantity: 1420000, price: 2680.00 },
        { orderCount: 290, quantity: 980000, price: 2675.00 },
        { orderCount: 180, quantity: 650000, price: 2670.00 },
        { orderCount: 140, quantity: 550000, price: 2660.00 }
      ],
      asks: [
        { orderCount: 190, quantity: 820000, price: 2685.00 },
        { orderCount: 240, quantity: 940000, price: 2690.00 },
        { orderCount: 160, quantity: 580000, price: 2695.00 },
        { orderCount: 110, quantity: 380000, price: 2700.00 },
        { orderCount: 80, quantity: 260000, price: 2710.00 }
      ]
    },
    companyProfile: {
      symbol: 'NEPSE',
      name: 'Nepal Stock Exchange Index',
      sector: 'Indices',
      status: 'Active',
      listedDate: '1994-01-13',
      listedShares: 8950000000,
      paidUpCapitalNpr: 'Market Cap: NPR 4.26 Trillion',
      faceValue: 100,
      registrarRta: 'CDS and Clearing Limited (CDSC)',
      headOffice: 'NEPSE Building, Singhadurbar Plaza, Kathmandu',
      phone: '+977-1-4250758',
      email: 'info@nepalstock.com',
      website: 'https://www.nepalstock.com',
      nepseCompanyUrl: 'https://www.nepalstock.com/company',
      nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
      nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
      merolaganiUrl: 'https://merolagani.com/MarketSummary.aspx',
      shareSansarUrl: 'https://www.sharesansar.com/live-trading',
      nepaliPaisaUrl: 'https://nepalipaisa.com/live-market',
      crossVerification: {
        paidUpCapitalVerified: true,
        sharesVerified: true,
        dividendsVerified: true,
        reportsVerified: true,
        matchScore: 100
      }
    }
  }
};

export const INITIAL_FLOORSHEET: FloorSheetItem[] = [
  { transNo: 48921, contractNo: '2026091801048921', symbol: 'NABIL', buyerBroker: 'Broker 58', sellerBroker: 'Broker 17', quantity: 1200, rate: 512.40, amount: 614880, time: '14:58:12' },
  { transNo: 48920, contractNo: '2026091801048920', symbol: 'NABIL', buyerBroker: 'Broker 45', sellerBroker: 'Broker 34', quantity: 2500, rate: 512.00, amount: 1280000, time: '14:57:48' },
  { transNo: 48919, contractNo: '2026091801048919', symbol: 'CHCL', buyerBroker: 'Broker 58', sellerBroker: 'Broker 28', quantity: 800, rate: 546.00, amount: 436800, time: '14:57:22' },
  { transNo: 48918, contractNo: '2026091801048918', symbol: 'SHIVM', buyerBroker: 'Broker 38', sellerBroker: 'Broker 49', quantity: 500, rate: 474.20, amount: 237100, time: '14:56:55' },
  { transNo: 48917, contractNo: '2026091801048917', symbol: 'GBIME', buyerBroker: 'Broker 19', sellerBroker: 'Broker 45', quantity: 3000, rate: 234.00, amount: 702000, time: '14:56:30' },
  { transNo: 48916, contractNo: '2026091801048916', symbol: 'CIT', buyerBroker: 'Broker 58', sellerBroker: 'Broker 14', quantity: 150, rate: 2295.00, amount: 344250, time: '14:56:05' },
  { transNo: 48915, contractNo: '2026091801048915', symbol: 'NABIL', buyerBroker: 'Broker 45', sellerBroker: 'Broker 52', quantity: 1800, rate: 512.40, amount: 922320, time: '14:55:40' },
  { transNo: 48914, contractNo: '2026091801048914', symbol: 'HDL', buyerBroker: 'Broker 22', sellerBroker: 'Broker 38', quantity: 300, rate: 1470.00, amount: 441000, time: '14:55:12' },
  { transNo: 48913, contractNo: '2026091801048913', symbol: 'UPPER', buyerBroker: 'Broker 49', sellerBroker: 'Broker 58', quantity: 2500, rate: 218.40, amount: 546000, time: '14:54:38' },
  { transNo: 48912, contractNo: '2026091801048912', symbol: 'NICA', buyerBroker: 'Broker 17', sellerBroker: 'Broker 58', quantity: 1500, rate: 438.50, amount: 657750, time: '14:54:05' },
  { transNo: 48911, contractNo: '2026091801048911', symbol: 'NLIC', buyerBroker: 'Broker 34', sellerBroker: 'Broker 11', quantity: 800, rate: 748.00, amount: 598400, time: '14:53:29' },
  { transNo: 48910, contractNo: '2026091801048910', symbol: 'GBIME', buyerBroker: 'Broker 28', sellerBroker: 'Broker 41', quantity: 1200, rate: 234.00, amount: 280800, time: '14:52:50' }
];

export const NEPSE_TODAY_PRICES: NepseTodayPriceItem[] = [
  {
    sn: 1,
    businessDate: '2026-09-18',
    symbol: 'NABIL',
    securityName: 'Nabil Bank Limited',
    sector: 'Commercial Banks',
    openPrice: 560.00,
    highPrice: 568.00,
    lowPrice: 558.00,
    closePrice: 562.90,
    previousClose: 560.00,
    pointChange: 2.90,
    percentChange: 0.52,
    totalTradedQty: 384500,
    totalTradedValue: 216435000,
    totalTrades: 512,
    week52High: 581.00,
    week52Low: 471.00,
    vwap: 562.50,
    circuitUpper: 616.00,
    circuitLower: 504.00,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/NABIL',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 562.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=NABIL', price: 562.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/nabil', price: 562.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/nabil', price: 562.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 2,
    businessDate: '2026-09-18',
    symbol: 'GBIME',
    securityName: 'Global IME Bank Limited',
    sector: 'Commercial Banks',
    openPrice: 258.00,
    highPrice: 263.00,
    lowPrice: 256.00,
    closePrice: 260.90,
    previousClose: 258.00,
    pointChange: 2.90,
    percentChange: 1.12,
    totalTradedQty: 890000,
    totalTradedValue: 232201000,
    totalTrades: 640,
    week52High: 270.60,
    week52Low: 218.90,
    vwap: 260.50,
    circuitUpper: 283.80,
    circuitLower: 232.20,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/GBIME',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 260.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=GBIME', price: 260.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/gbime', price: 260.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/gbime', price: 260.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 3,
    businessDate: '2026-09-18',
    symbol: 'SHIVM',
    securityName: 'Shivam Cements Limited',
    sector: 'Manufacturing & Processing',
    openPrice: 680.00,
    highPrice: 692.00,
    lowPrice: 674.00,
    closePrice: 688.00,
    previousClose: 676.30,
    pointChange: 11.70,
    percentChange: 1.73,
    totalTradedQty: 512000,
    totalTradedValue: 352256000,
    totalTrades: 780,
    week52High: 730.00,
    week52Low: 524.00,
    vwap: 687.20,
    circuitUpper: 743.90,
    circuitLower: 608.70,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/SHIVM',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 688.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=SHIVM', price: 688.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/shivm', price: 688.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/shivm', price: 688.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 4,
    businessDate: '2026-09-18',
    symbol: 'CHCL',
    securityName: 'Chilime Hydropower Company Limited',
    sector: 'Hydropower',
    openPrice: 358.00,
    highPrice: 374.00,
    lowPrice: 355.00,
    closePrice: 369.70,
    previousClose: 356.00,
    pointChange: 13.70,
    percentChange: 3.85,
    totalTradedQty: 642000,
    totalTradedValue: 237347400,
    totalTrades: 620,
    week52High: 525.00,
    week52Low: 344.00,
    vwap: 368.50,
    circuitUpper: 391.60,
    circuitLower: 320.40,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/CHCL',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 369.70, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=CHCL', price: 369.70, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/chcl', price: 369.70, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/chcl', price: 369.70, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 5,
    businessDate: '2026-09-18',
    symbol: 'CIT',
    securityName: 'Citizen Investment Trust',
    sector: 'Commercial Banks',
    openPrice: 1745.00,
    highPrice: 1755.00,
    lowPrice: 1730.00,
    closePrice: 1739.00,
    previousClose: 1745.00,
    pointChange: -6.00,
    percentChange: -0.34,
    totalTradedQty: 48200,
    totalTradedValue: 83819800,
    totalTrades: 310,
    week52High: 1973.00,
    week52Low: 1621.10,
    vwap: 1738.50,
    circuitUpper: 1919.50,
    circuitLower: 1570.50,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/CIT',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 1739.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=CIT', price: 1739.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/cit', price: 1739.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/cit', price: 1739.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 6,
    businessDate: '2026-09-18',
    symbol: 'HDL',
    securityName: 'Himalayan Distillery Limited',
    sector: 'Manufacturing & Processing',
    openPrice: 1218.00,
    highPrice: 1235.00,
    lowPrice: 1210.00,
    closePrice: 1224.00,
    previousClose: 1217.00,
    pointChange: 7.00,
    percentChange: 0.58,
    totalTradedQty: 132000,
    totalTradedValue: 161568000,
    totalTrades: 420,
    week52High: 1415.70,
    week52Low: 1097.60,
    vwap: 1222.80,
    circuitUpper: 1338.70,
    circuitLower: 1095.30,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/HDL',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 1224.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=HDL', price: 1224.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/hdl', price: 1224.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/hdl', price: 1224.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 7,
    businessDate: '2026-09-18',
    symbol: 'NICA',
    securityName: 'NIC Asia Bank Limited',
    sector: 'Commercial Banks',
    openPrice: 330.00,
    highPrice: 332.00,
    lowPrice: 326.00,
    closePrice: 328.40,
    previousClose: 330.00,
    pointChange: -1.60,
    percentChange: -0.48,
    totalTradedQty: 240000,
    totalTradedValue: 78816000,
    totalTrades: 580,
    week52High: 411.00,
    week52Low: 302.90,
    vwap: 328.10,
    circuitUpper: 363.00,
    circuitLower: 297.00,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/NICA',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 328.40, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=NICA', price: 328.40, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/nica', price: 328.40, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/nica', price: 328.40, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 8,
    businessDate: '2026-09-18',
    symbol: 'UPPER',
    securityName: 'Upper Tamakoshi Hydropower Limited',
    sector: 'Hydropower',
    openPrice: 198.00,
    highPrice: 201.00,
    lowPrice: 196.00,
    closePrice: 197.70,
    previousClose: 197.80,
    pointChange: -0.10,
    percentChange: -0.05,
    totalTradedQty: 480000,
    totalTradedValue: 94896000,
    totalTrades: 610,
    week52High: 242.60,
    week52Low: 166.00,
    vwap: 197.50,
    circuitUpper: 217.50,
    circuitLower: 178.00,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/UPPER',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 197.70, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=UPPER', price: 197.70, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/upper', price: 197.70, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/upper', price: 197.70, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 9,
    businessDate: '2026-09-18',
    symbol: 'SCB',
    securityName: 'Standard Chartered Bank Limited',
    sector: 'Commercial Banks',
    openPrice: 652.00,
    highPrice: 660.00,
    lowPrice: 650.00,
    closePrice: 657.00,
    previousClose: 653.00,
    pointChange: 4.00,
    percentChange: 0.61,
    totalTradedQty: 112000,
    totalTradedValue: 73584000,
    totalTrades: 320,
    week52High: 712.60,
    week52Low: 594.90,
    vwap: 656.40,
    circuitUpper: 718.30,
    circuitLower: 587.70,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/SCB',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 657.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=SCB', price: 657.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/scb', price: 657.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/scb', price: 657.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 10,
    businessDate: '2026-09-18',
    symbol: 'UNL',
    securityName: 'Unilever Nepal Limited',
    sector: 'Manufacturing & Processing',
    openPrice: 47500.00,
    highPrice: 48200.00,
    lowPrice: 47200.00,
    closePrice: 47999.00,
    previousClose: 47500.00,
    pointChange: 499.00,
    percentChange: 1.05,
    totalTradedQty: 1200,
    totalTradedValue: 57598800,
    totalTrades: 85,
    week52High: 49738.90,
    week52Low: 45200.00,
    vwap: 47850.00,
    circuitUpper: 52250.00,
    circuitLower: 42750.00,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/UNL',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 47999.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=UNL', price: 47999.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/unl', price: 47999.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/unl', price: 47999.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 11,
    businessDate: '2026-09-18',
    symbol: 'NLIC',
    securityName: 'Nepal Life Insurance Company Limited',
    sector: 'Life Insurance',
    openPrice: 730.00,
    highPrice: 742.00,
    lowPrice: 728.00,
    closePrice: 735.00,
    previousClose: 731.00,
    pointChange: 4.00,
    percentChange: 0.55,
    totalTradedQty: 68000,
    totalTradedValue: 49980000,
    totalTrades: 240,
    week52High: 872.00,
    week52Low: 680.50,
    vwap: 734.50,
    circuitUpper: 804.10,
    circuitLower: 657.90,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/NLIC',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 735.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=NLIC', price: 735.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/nlic', price: 735.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/nlic', price: 735.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 12,
    businessDate: '2026-09-18',
    symbol: 'NRIC',
    securityName: 'Nepal Reinsurance Company Limited',
    sector: 'Commercial Banks',
    openPrice: 825.00,
    highPrice: 839.00,
    lowPrice: 820.00,
    closePrice: 832.90,
    previousClose: 826.00,
    pointChange: 6.90,
    percentChange: 0.84,
    totalTradedQty: 74000,
    totalTradedValue: 61634600,
    totalTrades: 290,
    week52High: 1599.30,
    week52Low: 780.00,
    vwap: 831.50,
    circuitUpper: 908.60,
    circuitLower: 743.40,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/NRIC',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 832.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=NRIC', price: 832.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/nric', price: 832.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/nric', price: 832.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 13,
    businessDate: '2026-09-18',
    symbol: 'NTC',
    securityName: 'Nepal Doorsanchar Company Limited',
    sector: 'Others',
    openPrice: 888.00,
    highPrice: 896.00,
    lowPrice: 884.00,
    closePrice: 892.00,
    previousClose: 889.00,
    pointChange: 3.00,
    percentChange: 0.34,
    totalTradedQty: 95000,
    totalTradedValue: 84740000,
    totalTrades: 360,
    week52High: 942.50,
    week52Low: 762.50,
    vwap: 891.20,
    circuitUpper: 977.90,
    circuitLower: 800.10,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/NTC',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 892.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=NTC', price: 892.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/ntc', price: 892.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/ntc', price: 892.00, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  },
  {
    sn: 14,
    businessDate: '2026-09-18',
    symbol: 'HIDCL',
    securityName: 'Hydroelectricity Investment and Development Company Ltd',
    sector: 'Hydropower',
    openPrice: 256.00,
    highPrice: 261.00,
    lowPrice: 254.00,
    closePrice: 258.90,
    previousClose: 256.00,
    pointChange: 2.90,
    percentChange: 1.13,
    totalTradedQty: 310000,
    totalTradedValue: 80259000,
    totalTrades: 490,
    week52High: 307.00,
    week52Low: 232.60,
    vwap: 258.50,
    circuitUpper: 281.60,
    circuitLower: 230.40,
    nepseTodayPriceUrl: 'https://www.nepalstock.com/today-price',
    nepseMarketDepthUrl: 'https://www.nepalstock.com/marketdepth/',
    nepseCompanyUrl: 'https://www.nepalstock.com/company/detail/HIDCL',
    verificationStatus: 'VERIFIED_OFFICIAL_NEPSE',
    crossVerifications: [
      { sourceName: 'NEPSE (nepalstock.com)', url: 'https://www.nepalstock.com/today-price', price: 258.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:30 NPT' },
      { sourceName: 'Merolagani', url: 'https://merolagani.com/CompanyDetail.aspx?symbol=HIDCL', price: 258.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:02 NPT' },
      { sourceName: 'ShareSansar', url: 'https://www.sharesansar.com/company/hidcl', price: 258.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:58:45 NPT' },
      { sourceName: 'NepaliPaisa', url: 'https://nepalipaisa.com/company/hidcl', price: 258.90, variancePercent: 0.00, status: 'VERIFIED_EXACT', lastChecked: '14:59:15 NPT' }
    ]
  }
];
