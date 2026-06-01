// The Geniuses of Trading - Core Database
const tradersData = [
  {
    id: "jim-simons",
    name: "James Harris Simons",
    area: "Quantitative Trading",
    knownFor: "The Mathematician Who Changed Modern Trading",
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
    customContent: `
      <div style="font-size: 1.5rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1;">—</div>
      <p>James Harris Simons was one of the greatest innovators in contemporary finance. A mathematician, founder of Renaissance Technologies, and creator of the legendary Medallion Fund, he proved that markets could be approached not through emotion, opinion, or subjective forecasts, but through data, statistics, mathematical models, and automated systems.</p>
      <p>His greatness lies not only in the extraordinary results achieved, but in the way he transformed trading itself. Simons replaced discretionary intuition with scientific research, algorithms, pattern recognition, and rigorous risk management. Through his work, quantitative trading became one of the dominant forces in global markets.</p>
      <p>Even after his passing, his legacy continues through Renaissance Technologies, one of the most private, independent, and respected organizations in the world of finance. The Medallion Fund remains an almost inaccessible symbol: not a product built to be sold to the public, but a private financial laboratory based on expertise, selection, and results.</p>
      <p>Simons represents the opposite of modern financial marketing. He is not remembered for courses, promises, or publicity, but for building a real, documented, and revolutionary method.</p>
      <p>For this reason, James Harris Simons stands among the true geniuses of trading: he created an era, forever changing the way markets are studied, interpreted, and traded.</p>
      <p style="margin-top: 2rem; font-weight: 600; color: var(--text-primary); font-size: 1.1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
        What is, in your view, the most important legacy James Simons left to modern trading?
      </p>
    `,
    sources: [
      { name: "Simons Foundation", type: "Official Website", url: "https://www.simonsfoundation.org" },
      { name: "The Man Who Solved the Market", type: "Book", url: "https://www.google.com/search?q=The+Man+Who+Solved+the+Market+Gregory+Zuckerman" },
      { name: "Numberphile Interview with Jim Simons (2016)", type: "Video/Interview", url: "https://www.youtube.com/watch?v=QNznD9hMEh0" },
      { name: "Characteristic Forms and Geometric Invariants (Chern & Simons, 1974)", type: "Research Paper", url: "https://www.jstor.org/stable/1971013" }
    ]
  },
  {
    id: "nassim-taleb",
    name: "Nassim Nicholas Taleb",
    area: "Risk Management",
    knownFor: "The trader-philosopher who changed the way markets think about risk",
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
    customContent: `
      <div style="font-size: 1.5rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1;">—</div>
      <p>Nassim Nicholas Taleb is one of the most original and influential figures in modern finance. A former options trader, scholar of uncertainty, and author of the Black Swan theory, he challenged many of the traditional models used to measure risk in financial markets.</p>
      <p>His importance does not come only from trading, but from his ability to transform direct market experience into a broader vision: major unexpected events are not marginal exceptions, but decisive forces capable of changing markets, economies, and entire systems.</p>
      <p>Taleb criticized excessive confidence in models based on statistical normality, arguing that many classic risk-management tools underestimate exactly what matters most: extreme, rare, and devastating events. From this view came his focus on tail-risk hedging and the use of options as instruments capable of creating asymmetric payoffs during moments of crisis.</p>
      <p>His approach is not simply about forecasting the future. It is about building systems that can survive the unpredictable and, in some cases, benefit from it. This is the core of antifragility: not merely resisting chaos, but designing structures that may improve through volatility, stress, and uncertainty.</p>
      <p>Taleb represents a different kind of trader. He is not known for financial marketing or for promising simple formulas, but for asking a radical question: what happens when the models fail precisely at the moments that matter most?</p>
      <p>For this reason, Nassim Nicholas Taleb is included in The Geniuses of Trading. He brought to trading and risk management a unique perspective built on probability, philosophy, operational experience, and deep skepticism toward false certainty.</p>
      <p>His contribution remains essential for anyone who wants to truly understand risk, uncertainty, and the fragility of modern markets.</p>
    `,
    sources: [
      { name: "Nassim Taleb's Academic & Professional Page", type: "Official Website", url: "https://www.fooledbyrandomness.com" },
      { name: "The Black Swan: The Impact of the Highly Improbable", type: "Book", url: "https://www.google.com/search?q=The+Black+Swan+Nassim+Taleb" },
      { name: "Statistical Consequences of Fat Tails (Taleb, 2020)", type: "Research Paper", url: "https://arxiv.org/abs/2001.10488" }
    ]
  },
  {
    id: "paul-tudor-jones",
    name: "Paul Tudor Jones",
    area: "Discretionary Trading",
    knownFor: "The macro trader who anticipated Black Monday",
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
    customContent: `
      <div style="font-size: 1.5rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1;">—</div>
      <p>Paul Tudor Jones is one of the most influential discretionary macro traders in modern financial history. Founder of Tudor Investment Corporation, he became legendary for anticipating and profiting from the 1987 stock market crash, known as Black Monday.</p>
      <p>His importance goes far beyond a single historic trade. Jones built a distinctive trading style based on macroeconomic vision, market cycles, technical analysis, capital protection, and exceptional mental discipline.</p>
      <p>He represents the kind of trader who combines intuition with preparation. His work is not based on simplistic formulas or public promises, but on the ability to read global markets, identify imbalances, and act decisively when risk and reward are strongly asymmetric.</p>
      <p>Jones is widely associated with the 200-day moving average, used as a key reference to understand the broader structure of market trends. He is also known for a powerful risk-management philosophy: every position must be constantly questioned. For him, protecting capital is as important as generating returns.</p>
      <p>His figure is also linked to the documentary Trader, which offered a rare look into high-level discretionary trading, showing the pressure, speed, and depth of analysis required to operate in major markets.</p>
      <p>Paul Tudor Jones is included in The Geniuses of Trading because he left a lasting mark on macro trading. He proved that intuition and method can coexist, but only when supported by study, discipline, mental flexibility, and strict risk control.</p>
      <p>He is not a symbol of financial marketing, but of an authentic trading school: the school of great market operators capable of reading uncertainty and transforming it into opportunity.</p>
      <p>For this reason, Paul Tudor Jones remains one of the true geniuses of modern trading.</p>
    `,
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
