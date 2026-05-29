// The Geniuses of Trading - Core Database
const tradersData = [
  {
    id: "jim-simons",
    name: "Jim Simons",
    area: "Quantitative Trading",
    knownFor: "Founder of Renaissance Technologies and Medallion Fund, pioneer of quantitative and mathematical investing.",
    bio: "James Harris Simons (1938–2024) was an American mathematician, hedge fund manager, and philanthropist. In 1982, he founded Renaissance Technologies, a private hedge fund based in New York. Its flagship Medallion Fund, famed for the greatest track record in modern financial history, pioneered quantitative trading, relying entirely on mathematical and statistical models to execute automated trades. By excluding human emotion and qualitative judgment, Simons established code-driven algorithmic trading as the dominant force in global markets.",
    whyIncluded: [
      "Achieved unprecedented annualized returns of over 60% gross (39% net of fees) from 1988 to 2018, demonstrating the supreme efficacy of mathematical modeling.",
      "Replaced traditional fundamental research with pure quantitative, statistical arbitrage, and pattern recognition systems.",
      "Led the industry-wide transition of Wall Street towards quantitative finance, algorithmic execution, and high-frequency trading (HFT).",
      "Contributed significantly to mathematics, particularly the Chern-Simons invariants, which are foundational in modern differential geometry and theoretical physics.",
      "Proved that complex mathematical models could systematically extract profits from short-term market inefficiencies without forecasting long-term economic trends."
    ],
    contributions: {
      methodology: "Systematic mathematical modeling and automated execution. Analyzed massive historical datasets to identify statistical patterns and correlations that are imperceptible to human analysts. Positions are held for short durations and executed automatically through sophisticated algorithms.",
      technicalAnalysis: "Non-traditional. The Medallion Fund rejected classic chart patterns (head-and-shoulders, trendlines) in favor of multidimensional statistical anomalies, mean-reversion signals, and cross-asset correlations.",
      research: "Co-developer of the Chern-Simons invariants. Conducted extensive corporate research into predictive signal processing, speech recognition algorithms, and data pattern recognition adapted for finance.",
      books: "Academic mathematical publications. His life and Renaissance Technologies are documented in the bestselling biography 'The Man Who Solved the Market' by Gregory Zuckerman.",
      achievements: "Built the most profitable hedge fund in history. Co-founded the Simons Foundation, donating billions to mathematics and basic science research.",
      riskManagement: "Rigid, system-wide automated risk limits. Medallion utilized dynamic position sizing, ensuring no single trade or market event could cause catastrophic loss, backed by massive diversification across thousands of global instruments."
    },
    sources: [
      { name: "Simons Foundation", type: "Official Website", url: "https://www.simonsfoundation.org" },
      { name: "The Man Who Solved the Market", type: "Book", url: "https://www.google.com/search?q=The+Man+Who+Solved+the+Market+Gregory+Zuckerman" },
      { name: "Numberphile Interview with Jim Simons (2016)", type: "Video/Interview", url: "https://www.youtube.com/watch?v=QNznD9hMEh0" },
      { name: "Characteristic Forms and Geometric Invariants (Chern & Simons, 1974)", type: "Research Paper", url: "https://www.jstor.org/stable/1971013" }
    ]
  },
  {
    id: "ed-seykota",
    name: "Ed Seykota",
    area: "Systematic Trading",
    knownFor: "Pioneering computerized trend-following systems and integrating psychology into trading models.",
    bio: "Edward Arthur Seykota (born 1946) is a legendary commodities trader who, in the early 1970s, designed and implemented the first commercial computerized trading system for managing clients' money in the futures markets. Combining strict rules-based systems with mainframe computer power, Seykota achieved spectacular returns. He famously multiplied one client's account from $5,000 to $15 million over a 12-year period. Beyond algorithms, Seykota is renowned for his insights into the psychological aspects of trading and emotional regulation.",
    whyIncluded: [
      "Designed and coded the first commercial computerized trend-following system on IBM mainframes in the early 1970s.",
      "Developed a highly structured rules-based trend-following system utilizing exponential moving averages.",
      "Demonstrated the viability of mechanical trading systems by achieving staggering multi-million dollar returns from small starting accounts.",
      "Featured as a core subject in Jack Schwager's classic book 'Market Wizards', establishing him as a founding father of systematic trading.",
      "Pioneered the study of emotional states in trading, arguing that a trader's psychology is the ultimate driver of system compliance."
    ],
    contributions: {
      methodology: "Pure systematic trend-following. Reactive trading rather than predictive forecasting. The system waits for a trend to establish, enters, rides the trend using trailing stops, and exits when the trend reverses.",
      technicalAnalysis: "Primarily trend lines, breakouts, and exponential moving averages (EMAs) to identify market direction. He prefers simple systems over complex configurations.",
      research: "Early computerized simulation of trading systems. Spent decades testing various moving average combinations, stop-loss distances, and capital allocation models.",
      books: "Author of 'The Trading Tribe' (2005), which outlines his psychological theories, and 'Govopoly in the Signpost Forest' (2013).",
      achievements: "Created the first computer-guided commodity fund. Established the 'Trading Tribe', a global network of local groups dedicated to resolving emotional blocks through active support.",
      riskManagement: "Strict adherence to stop-losses. He famously summarized his risk management principles as: '1. Cut losses. 2. Ride winners. 3. Keep bets small. 4. Follow the rules without question. 5. Know when to break the rules.'"
    },
    sources: [
      { name: "Ed Seykota's Official Website", type: "Official Website", url: "https://www.seykota.com" },
      { name: "Market Wizards: Interviews with Top Traders", type: "Book", url: "https://www.google.com/search?q=Market+Wizards+Jack+Schwager" },
      { name: "The Trading Tribe: Process and Philosophy", type: "Article/Resource", url: "https://www.seykota.com/tribe/" }
    ]
  },
  {
    id: "steve-nison",
    name: "Steve Nison",
    area: "Technical Analysis",
    knownFor: "Introducing Japanese Candlestick charting techniques to the Western financial world.",
    bio: "Steve Nison is a professional technical analyst, author, and researcher. In the late 1980s, while working as a senior analyst at Merrill Lynch, Nison researched traditional Japanese candlestick charting methods—a visual system used in Japan since the 18th-century rice markets but entirely unknown to Western traders. Through extensive translation and research, Nison published books and articles that popularized these techniques globally. Today, candlestick charts are the default display on virtually every trading platform in the world.",
    whyIncluded: [
      "Translated, structured, and adapted centuries-old Japanese charting methods for Western markets.",
      "Authored the definitive books that introduced terms like Doji, Hammer, and Engulfing to Western financial vernacular.",
      "Transformed global trading interfaces; candlesticks are now the near-universal default chart format for stocks, forex, crypto, and commodities.",
      "Trained trading teams at major global investment banks, central banks, and retail brokerages.",
      "Pioneered the integration of sentiment analysis (depicted by candle bodies and shadows) with classic Western technical support and resistance."
    ],
    contributions: {
      methodology: "Sentiment-based visual analysis. Interprets the psychological battle between buyers and sellers within specific time intervals by analyzing the relationships between the Open, High, Low, and Close.",
      technicalAnalysis: "Candlestick pattern identification (such as Morning Stars, Shooting Stars, Haramis, and Marubozus) used as primary trade triggers and confirmation metrics.",
      research: "Decades of historical research, locating and translating old Japanese texts, including works attributed to Munehisa Homma, the legendary 18th-century Japanese merchant.",
      books: "Author of the seminal texts 'Japanese Candlestick Charting Techniques' (1991) and 'Beyond Candlesticks' (1994).",
      achievements: "Founder of Candlecharts.com. Awarded the CMT Association's Chartered Market Technician designation and credited with unifying Western and Eastern technical analysis.",
      riskManagement: "Utilizes candlestick extremes (such as the high of a bearish Shooting Star or low of a bullish Hammer) to establish precise, objective stop-loss levels immediately upon entry."
    },
    sources: [
      { name: "Candlecharts.com - Steve Nison's Official Portal", type: "Official Website", url: "https://www.candlecharts.com" },
      { name: "Japanese Candlestick Charting Techniques", type: "Book", url: "https://www.google.com/search?q=Japanese+Candlestick+Charting+Techniques+Steve+Nison" },
      { name: "Beyond Candlesticks: New Japanese Charting Techniques Revealed", type: "Book", url: "https://www.google.com/search?q=Beyond+Candlesticks+Steve+Nison" }
    ]
  },
  {
    id: "mark-douglas",
    name: "Mark Douglas",
    area: "Market Psychology",
    knownFor: "Authoring 'Trading in the Zone' and teaching the concept of probabilistic thinking in trading.",
    bio: "Mark Douglas (1948–2015) was a pioneer in trading psychology, a professional coach, and a public speaker. Disturbed by the high failure rate among technically competent traders, Douglas discovered that the primary barrier to trading success is cognitive, not technical. He dedicated his life to teaching traders how to think in probabilities, eliminate fear, overcome cognitive biases (like loss aversion), and establish a disciplined, objective state of mind required for long-term consistency.",
    whyIncluded: [
      "Established trading psychology as a fundamental pillar of professional trading education.",
      "Authored 'Trading in the Zone', widely considered the most influential book on the cognitive aspects of financial markets.",
      "Developed the 'Five Fundamental Truths' of trading that guide traders in accepting risk and uncertainty.",
      "Coached institutional trading desks, hedge fund managers, and retail traders globally for over three decades.",
      "Redefined the purpose of technical analysis from a 'predictive tool' to a method for identifying a statistical edge."
    ],
    contributions: {
      methodology: "Mindset-oriented execution. Focuses on removing emotional reactions (fear, greed, euphoria) by adopting a objective, probabilistic framework. Recommends practicing execution without focusing on individual trade outcomes.",
      technicalAnalysis: "Views technical patterns not as absolute indicators of what the market *will* do, but rather as visual definitions of an 'edge'—a higher probability of one variable occurring over another.",
      research: "Investigated cognitive dissonance, expectancy theory, reinforcement conditioning, and the psychological impact of randomness on human decision-making.",
      books: "Author of the classic bestsellers 'The Disciplined Trader' (1990) and 'Trading in the Zone' (2000).",
      achievements: "Created the Trading Behavior Dynamics training program. Developed educational frameworks adopted by exchanges and financial institutions worldwide.",
      riskManagement: "Absolute risk acceptance. Teaches that if you truly accept the risk of a trade, you will feel no fear or stress, and will execute stops and targets flawlessly because 'anything can happen' on any given trade."
    },
    sources: [
      { name: "Trading in the Zone (Official Publisher)", type: "Book", url: "https://www.google.com/search?q=Trading+in+the+Zone+Mark+Douglas" },
      { name: "The Disciplined Trader: Developing Winning Attitudes", type: "Book", url: "https://www.google.com/search?q=The+Disciplined+Trader+Mark+Douglas" },
      { name: "Mark Douglas Video Archive (Probabilistic Thinking Seminars)", type: "Video/Interview", url: "https://www.youtube.com/results?search_query=Mark+Douglas+Trading+in+the+Zone" }
    ]
  },
  {
    id: "nassim-taleb",
    name: "Nassim Nicholas Taleb",
    area: "Risk Management",
    knownFor: "Developing the Black Swan theory and pioneering research on tail-risk hedging and uncertainty.",
    bio: "Nassim Nicholas Taleb (born 1960) is a Lebanese-American essayist, mathematical statistician, former options trader, and risk analyst. He spent more than 20 years as a quantitative option trader, specializing in hedging 'tail risks' (unpredictable, extreme market events). Taleb challenged mainstream financial economics by demonstrating that standard models (such as the bell curve and Modern Portfolio Theory) drastically underestimate the frequency and impact of market crashes, offering instead a framework based on antifragility.",
    whyIncluded: [
      "Developed the 'Black Swan' theory, detailing the impact of highly improbable, high-impact events on financial systems.",
      "Pioneered options-based tail-risk hedging strategies designed to protect portfolios against system-wide collapses.",
      "Challenged the mathematical validity of value-at-risk (VaR) models and standard normal distributions in financial risk management.",
      "Authored the multi-volume philosophical and mathematical essay collection 'Incerto' (translated into dozens of languages).",
      "Introduced the concept of 'Antifragility'—constructing portfolios and systems that actually benefit from volatility, disorder, and stress."
    ],
    contributions: {
      methodology: "Asymmetric volatility trading. Implementing a 'Barbell Strategy'—allocating 85-90% of capital in extremely safe instruments (like short-term Treasuries) and the remaining 10-15% in highly speculative, leveraged options designed to pay off massively during market stress.",
      technicalAnalysis: "Rejects standard technical indicators (moving averages, oscillators) as unscientific. Relies strictly on option Greeks, statistical fat tails, and power-law distributions.",
      research: "Mathematical statistics of fat-tailed distributions, heuristics, decision theory under uncertainty, and the philosophy of probability.",
      books: "Author of 'Fooled by Randomness' (2001), 'The Black Swan' (2007), 'Antifragile' (2012), 'Skin in the Game' (2018), and the academic text 'Statistical Consequences of Fat Tails' (2020).",
      achievements: "Distinguished Professor of Risk Engineering at NYU Tandon. Co-founder of Empirica Capital. Correctly anticipated the structural weaknesses behind the 2008 financial crisis.",
      riskManagement: "Focuses on the absolute elimination of the risk of ruin. Rather than optimizing average returns, he advocates for structural survival: avoiding debt, hedging tail-risk, and ensuring a system can withstand extreme volatility."
    },
    sources: [
      { name: "Nassim Taleb's Academic & Professional Page", type: "Official Website", url: "https://www.fooledbyrandomness.com" },
      { name: "The Black Swan: The Impact of the Highly Improbable", type: "Book", url: "https://www.google.com/search?q=The+Black+Swan+Nassim+Taleb" },
      { name: "Statistical Consequences of Fat Tails (Taleb, 2020)", type: "Research Paper", url: "https://arxiv.org/abs/2001.10488" }
    ]
  },
  {
    id: "jack-schwager",
    name: "Jack Schwager",
    area: "Market Research",
    knownFor: "Authoring the 'Market Wizards' series, documenting the strategies and mindsets of elite traders.",
    bio: "Jack D. Schwager (born 1948) is an American author, financial researcher, and industry expert in futures, hedge funds, and alternative investments. Over several decades, Schwager interviewed dozens of the most successful traders of our era across various asset classes. Through these detailed case studies, he extracted the common principles of trading mastery. His books serve as the definitive educational record of professional trading, proving that success lies in risk control and psychological alignment, not a single static indicator.",
    whyIncluded: [
      "Created the definitive oral history and practical archive of modern trading success across multiple decades.",
      "Identified and cataloged key commonalities among elite performers (risk control, discipline, patience, personal style).",
      "Established the core principle that there is no single 'correct' trading system; successful traders must find a method that aligns with their unique personality.",
      "Demystified hedge fund structures and CTA performance, making professional portfolio theory accessible to the public.",
      "Authored widely referenced textbooks on futures markets and technical analysis."
    ],
    contributions: {
      methodology: "Comparative performance analysis. Synthesizes qualitative insights from discretionary, systematic, quantitative, and macro traders to isolate universal rules of market engagement.",
      technicalAnalysis: "Evaluates chart patterns and trend-following systems based on historical risk/reward efficiency rather than dogmatic rules. Focuses on support/resistance and false breakouts.",
      research: "Performance auditing of commodity trading advisors (CTAs) and hedge funds. Created performance evaluation metrics for trading talent.",
      books: "Author of 'Market Wizards' (1989), 'The New Market Wizards' (1992), 'Stock Market Wizards' (2001), 'Hedge Fund Market Wizards' (2012), and 'Market Sense and Nonsense' (2012).",
      achievements: "Co-founder of FundSeeder, a platform connecting independent trading talent with institutional allocator capital. Served as Director of Futures Research for Prudential Securities.",
      riskManagement: "Universal preservation of capital. Emphasizes that risk management is the single most critical element of trading. Advocates for pre-defining risk on every trade and scaling position size relative to the account equity."
    },
    sources: [
      { name: "FundSeeder - Trading Talent Platform", type: "Official Website", url: "https://www.fundseeder.com" },
      { name: "Market Wizards: Interviews with Top Traders (Original)", type: "Book", url: "https://www.google.com/search?q=Market+Wizards+Jack+Schwager+Original" },
      { name: "Common Traits of Market Wizards (Jack Schwager Presentation)", type: "Video/Interview", url: "https://www.youtube.com/results?search_query=Jack+Schwager+Common+Traits+of+Market+Wizards" }
    ]
  },
  {
    id: "paul-tudor-jones",
    name: "Paul Tudor Jones",
    area: "Discretionary Trading",
    knownFor: "Founder of Tudor Investment Corporation, famous for predicting and profiting from the 1987 Black Monday crash.",
    bio: "Paul Tudor Jones II (born 1954) is a legendary American discretionary macro trader and hedge fund manager. In 1980, he founded Tudor Investment Corporation, leading it to become one of the premier macro funds in the world. Jones is best known for predicting the historic 'Black Monday' stock market crash of October 1987. By aggressively shorting stock index futures, he achieved a net return of over 62% in a single month and finished the year up 201.3%. His style is defined by aggressive risk management, deep market intuition, and combining macroeconomic indicators with strict technical charting.",
    whyIncluded: [
      "Achieved legendary returns during the 1987 crash, proving the efficacy of discretionary macro hedging and trend analysis.",
      "Pioneered the usage of the 200-day simple moving average as a structural filter for discretionary trading directions.",
      "Co-founded the Robin Hood Foundation, a major philanthropic organization focusing on poverty alleviation in New York.",
      "Main subject of the renowned 1987 documentary 'Trader', offering a rare look inside high-stakes discretionary market analysis.",
      "Consistently emphasized asymmetric risk-to-reward ratios, targeting trades with a minimum of 5-to-1 return potential."
    ],
    contributions: {
      methodology: "Discretionary global macro trading. Analyzes international interest rates, currencies, commodities, and equities. Combines big-picture economic fundamentals with price action and momentum analysis to locate high-probability turning points.",
      technicalAnalysis: "Heavily chart-focused. Believes that price patterns reflect market sentiment and crowd psychology. He famously monitors the 200-day moving average to define macro trend boundaries ('My metric for everything I look at is the 200-day moving average').",
      research: "Extensive study of historical market cycles, comparison templates of past bubble peaks (comparing 1929 and 1987), and correlation dynamics between diverse asset classes.",
      books: "Featured in Jack Schwager's original 'Market Wizards' (1989) and subject of numerous studies in market history.",
      achievements: "Built Tudor Investment Corporation into a multi-billion dollar macro investment powerhouse. Honored with lifetime achievement awards by the hedge fund industry.",
      riskManagement: "Mental agility and ego preservation. He operates under the principle that 'every day I assume every position I have is wrong.' Employs strict visual stop-losses and decreases position sizes when trading poorly."
    },
    sources: [
      { name: "Tudor Investment Corporation", type: "Official Website", url: "https://www.tudor.com" },
      { name: "Market Wizards: Interviews with Top Traders", type: "Book", url: "https://www.google.com/search?q=Market+Wizards+Jack+Schwager" },
      { name: "Trader (1987 Documentary)", type: "Video/Interview", url: "https://www.youtube.com/results?search_query=Paul+Tudor+Jones+Trader+1987+Documentary" }
    ]
  }
];

// Export for app.js loading
if (typeof module !== "undefined" && module.exports) {
  module.exports = { tradersData };
} else {
  window.tradersData = tradersData;
}
