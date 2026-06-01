// The Geniuses of Trading - Core Application & Router

document.addEventListener("DOMContentLoaded", () => {
  // --- Core Application State ---
  const state = {
    currentTheme: localStorage.getItem("theme") || "light",
    searchQuery: "",
    selectedFilters: [], // empty = all categories
    mobileMenuOpen: false
  };

  // --- HTML Elements ---
  const appRoot = document.getElementById("app-root");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const mobileToggleBtn = document.getElementById("mobile-toggle");
  const navBar = document.getElementById("nav-bar");
  const htmlElement = document.documentElement;

  // --- Initial Theme Setup ---
  htmlElement.setAttribute("data-theme", state.currentTheme);
  updateThemeIcon();

  // --- Event Listeners ---
  themeToggleBtn.addEventListener("click", toggleTheme);
  mobileToggleBtn.addEventListener("click", toggleMobileMenu);

  // Close mobile menu if clicked outside
  document.addEventListener("click", (e) => {
    if (state.mobileMenuOpen && !navBar.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
      toggleMobileMenu();
    }
  });

  // --- Theme Controller ---
  function toggleTheme() {
    state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    htmlElement.setAttribute("data-theme", state.currentTheme);
    localStorage.setItem("theme", state.currentTheme);
    updateThemeIcon();
  }

  function updateThemeIcon() {
    if (state.currentTheme === "dark") {
      themeToggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon-moon">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    } else {
      themeToggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon-sun">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </svg>
      `;
    }
  }

  // --- Mobile Menu Controller ---
  function toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    navBar.classList.toggle("open", state.mobileMenuOpen);
    mobileToggleBtn.classList.toggle("active", state.mobileMenuOpen);
  }

  function closeMobileMenu() {
    state.mobileMenuOpen = false;
    navBar.classList.remove("open");
    mobileToggleBtn.classList.remove("active");
  }

  // --- Client-Side Router ---
  const routes = {
    "/": renderHome,
    "/traders": renderTraders,
    "/trader/:id": renderTraderProfile,
    "/contribute": renderContribute,
    "/about": renderAbout,
    "/disclaimer": renderDisclaimer,
    "/contact": renderContact,
    "/privacy": renderPrivacy,
    "/terms": renderTerms
  };

  function router() {
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: "instant" });

    const hash = window.location.hash || "#/";
    const path = hash.substring(1); // remove "#"

    // Clear navigation highlights
    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));

    // Highlight active main nav item if appropriate
    if (path === "/" || path === "") {
      document.getElementById("nav-home")?.classList.add("active");
    } else if (path.startsWith("/traders") || path.startsWith("/trader")) {
      document.getElementById("nav-traders")?.classList.add("active");
    } else if (path === "/contribute") {
      document.getElementById("nav-contribute")?.classList.add("active");
    } else if (path === "/about") {
      document.getElementById("nav-about")?.classList.add("active");
    }

    // Dynamic Route Matcher (e.g. /trader/jim-simons)
    let matchedRoute = null;
    let matchedParams = {};

    for (const routePattern in routes) {
      const patternParts = routePattern.split("/");
      const pathParts = path.split("/");

      if (patternParts.length === pathParts.length) {
        let isMatch = true;
        const params = {};

        for (let i = 0; i < patternParts.length; i++) {
          if (patternParts[i].startsWith(":")) {
            const paramName = patternParts[i].substring(1);
            params[paramName] = pathParts[i];
          } else if (patternParts[i] !== pathParts[i]) {
            isMatch = false;
            break;
          }
        }

        if (isMatch) {
          matchedRoute = routes[routePattern];
          matchedParams = params;
          break;
        }
      }
    }

    if (matchedRoute) {
      matchedRoute(matchedParams);
    } else {
      // 404 fallback to home
      window.location.hash = "#/";
    }
  }

  // Bind Router Events
  window.addEventListener("hashchange", router);
  router(); // trigger initial load

  // --- View Renderers ---

  // 1. HOME VIEW
  function renderHome() {
    const featuredIds = ["jim-simons", "ed-seykota", "mark-douglas"];
    const latestIds = ["nassim-taleb", "steve-nison", "jack-schwager"];
    
    const featuredTraders = window.tradersData.filter(t => featuredIds.includes(t.id));
    const latestTraders = window.tradersData.filter(t => latestIds.includes(t.id));

    appRoot.innerHTML = `
      <!-- Hero -->
      <section class="hero">
        <h1>The Geniuses of Trading</h1>
        <p>Technical Analysis, Strategies, and Leading Figures in Financial Markets</p>
        <div class="hero-divider"></div>
      </section>

      <!-- Editorial Intro -->
      <section class="editorial-intro">
        <p>
          <strong>The Geniuses of Trading</strong> is an independent educational project dedicated to traders and
          financial market professionals who have distinguished themselves through results, research,
          method, and concrete contributions to the history of modern trading.
        </p>
        <p>
          Our goal is to provide a concise, structured, and objective archive of truly influential figures,
          selected according to their professional background, documented results, strategies developed,
          and impact on financial markets.
        </p>
        <p>
          The profiles included in this archive, including those suggested by the community, have no
          promotional purpose. They are not intended to advertise brokers, platforms, trading courses, or
          paid services.
        </p>
        <p>
          This project also aims to distinguish itself from the many lists found online, which are often built
          around commercial interests, retail broker affiliations, or the promotion of trading courses and
          speculative products such as CFDs.
        </p>
        <p>
          Here, we do not celebrate trading marketing. We focus on the real figures who have left a mark
          on the markets through authentic careers, concrete results, discipline, research, and genuine
          operational skill.
        </p>
        <p>
          <strong>The Geniuses of Trading</strong> is an independent starting point for orientation, technical study, and
          research. It does not constitute financial advertising, endorsement, or investment advice.
        </p>
      </section>

      <!-- Featured Traders Section -->
      <section style="margin-bottom: 4rem;">
        <div class="section-header">
          <h2 class="section-title">Featured Traders</h2>
          <a href="#/traders" class="section-link">View All Traders</a>
        </div>
        
        <div class="traders-grid">
          ${featuredTraders.map(trader => `
            <div class="trader-card">
              <span class="trader-card-tag">${trader.area}</span>
              <h3>${trader.name}</h3>
              <p class="trader-card-description">${trader.knownFor}</p>
              <a href="#/trader/${trader.id}" class="trader-card-action">Read Profile</a>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Latest Profiles Section -->
      <section style="margin-bottom: 4rem;">
        <div class="section-header">
          <h2 class="section-title">Latest Additions</h2>
        </div>
        
        <div class="traders-grid">
          ${latestTraders.map(trader => `
            <div class="trader-card">
              <span class="trader-card-tag">${trader.area}</span>
              <h3>${trader.name}</h3>
              <p class="trader-card-description">${trader.knownFor}</p>
              <a href="#/trader/${trader.id}" class="trader-card-action">Read Profile</a>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Contribute Panel Callout -->
      <section class="disclaimer-panel" style="border-left-color: var(--accent-success); display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <h4 style="color: var(--accent-success);">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4px;">
              <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
            </svg>
            Contribute to the Archive
          </h4>
          <p>
            Help keep this database current, detailed, and factual. You can submit structural corrections, recommend peer-reviewed source literature, or propose new trader profiles. All submissions undergo editorial verification.
          </p>
        </div>
        <div>
          <a href="#/contribute" class="btn btn-primary" style="align-self: flex-start;">Submit Contribution</a>
        </div>
      </section>

      <!-- Educational Disclaimer -->
      <section class="disclaimer-panel">
        <h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4px;">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          Educational Archive Disclaimer
        </h4>
        <p>
          All information published on this site is purely for educational, historical, and archival research purposes. Nothing on this website constitutes financial advice, investment advisory, recommendations to trade, or an endorsement of any particular strategy or person. Markets carry high structural risk. Past achievements do not guarantee future results.
        </p>
      </section>
    `;
  }

  // 2. TRADERS DIRECTORY VIEW
  function renderTraders() {
    appRoot.innerHTML = `
      <section class="editorial-page" style="max-width: 100%;">
        <h1>Traders Directory</h1>
        <p class="page-description">
          Explore a curated selection of modern traders, analysts, researchers, and market professionals who have contributed to the evolution of technical analysis, quantitative research, risk management, and professional trading.
        </p>

        <!-- Filters and Search panel -->
        <div class="filter-section">
          <div class="search-wrapper">
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="trader-search" class="search-input" placeholder="Search by name, area, or keywords..." value="${state.searchQuery}">
          </div>

          <div class="filter-tags-container">
            <span class="filter-label">Filter by Area:</span>
            <button class="filter-tag ${state.selectedFilters.length === 0 ? 'active' : ''}" data-filter="all">All Specialties</button>
            <button class="filter-tag ${state.selectedFilters.includes('Technical Analysis') ? 'active' : ''}" data-filter="Technical Analysis">Technical Analysis</button>
            <button class="filter-tag ${state.selectedFilters.includes('Discretionary Trading') ? 'active' : ''}" data-filter="Discretionary Trading">Discretionary Trading</button>
            <button class="filter-tag ${state.selectedFilters.includes('Systematic Trading') ? 'active' : ''}" data-filter="Systematic Trading">Systematic Trading</button>
            <button class="filter-tag ${state.selectedFilters.includes('Quantitative Trading') ? 'active' : ''}" data-filter="Quantitative Trading">Quantitative Trading</button>
            <button class="filter-tag ${state.selectedFilters.includes('Risk Management') ? 'active' : ''}" data-filter="Risk Management">Risk Management</button>
            <button class="filter-tag ${state.selectedFilters.includes('Market Psychology') ? 'active' : ''}" data-filter="Market Psychology">Market Psychology</button>
            <button class="filter-tag ${state.selectedFilters.includes('Market Research') ? 'active' : ''}" data-filter="Market Research">Market Research</button>
          </div>
        </div>

        <!-- Directory Listing -->
        <div class="table-responsive">
          <table class="directory-table">
            <thead>
              <tr>
                <th style="width: 25%;">Name</th>
                <th style="width: 25%;">Area</th>
                <th style="width: 40%;">Known For</th>
                <th style="width: 10%; text-align: center;">Archive</th>
              </tr>
            </thead>
            <tbody id="directory-tbody">
              <!-- Filtered rows injected here -->
            </tbody>
          </table>
        </div>
      </section>
    `;

    // Render active directory rows
    filterAndRenderDirectory();

    // Search events
    const searchInput = document.getElementById("trader-search");
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      filterAndRenderDirectory();
    });

    // Tag filter events
    document.querySelectorAll(".filter-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        const filter = tag.getAttribute("data-filter");
        
        if (filter === "all") {
          state.selectedFilters = [];
        } else {
          const index = state.selectedFilters.indexOf(filter);
          if (index > -1) {
            state.selectedFilters.splice(index, 1);
          } else {
            state.selectedFilters.push(filter);
          }
        }
        
        // Re-render filters menu and table
        document.querySelectorAll(".filter-tag").forEach(btn => {
          const btnFilter = btn.getAttribute("data-filter");
          if (btnFilter === "all") {
            if (state.selectedFilters.length === 0) btn.classList.add("active");
            else btn.classList.remove("active");
          } else {
            if (state.selectedFilters.includes(btnFilter)) btn.classList.add("active");
            else btn.classList.remove("active");
          }
        });

        filterAndRenderDirectory();
      });
    });
  }

  function filterAndRenderDirectory() {
    const tbody = document.getElementById("directory-tbody");
    if (!tbody) return;

    const filtered = window.tradersData.filter(trader => {
      // 1. Text Search matching name, knownFor, bio, area
      const textMatch = 
        trader.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        trader.area.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        trader.knownFor.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        trader.bio.toLowerCase().includes(state.searchQuery.toLowerCase());

      // 2. Category Match
      const categoryMatch = 
        state.selectedFilters.length === 0 || 
        state.selectedFilters.includes(trader.area);

      return textMatch && categoryMatch;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="4" class="no-results">
            No traders found matching your criteria. Try adjustments or cleared filters.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(trader => `
      <tr>
        <td class="directory-name-cell">${trader.name}</td>
        <td>
          <span class="trader-card-tag" style="margin-bottom:0; font-size:0.7rem;">${trader.area}</span>
        </td>
        <td style="font-size: 0.92rem; line-height: 1.4;">${trader.knownFor}</td>
        <td style="text-align: center;">
          <a href="#/trader/${trader.id}" class="table-btn">
            View
            <span>→</span>
          </a>
        </td>
      </tr>
    `).join("");
  }

  // 3. SINGLE TRADER PROFILE VIEW
  function renderTraderProfile(params) {
    const trader = window.tradersData.find(t => t.id === params.id);
    if (!trader) {
      appRoot.innerHTML = `
        <div style="text-align: center; padding: 4rem 1.5rem;">
          <h2 style="font-size: 2rem; margin-bottom: 1rem;">Profile Not Found</h2>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">The requested trader profile does not exist in this archive.</p>
          <a href="#/traders" class="btn btn-primary">Return to Directory</a>
        </div>
      `;
      return;
    }

    // Load custom corrections for this trader from localStorage
    const storageKey = `comments_${trader.id}`;
    let comments = JSON.parse(localStorage.getItem(storageKey)) || [];

    appRoot.innerHTML = `
      <article>
        <!-- Profile Header -->
        <div class="profile-header">
          <a href="#/traders" style="font-size: 0.9rem; font-weight: 500; display: inline-flex; align-items: center; gap: 0.35rem; margin-bottom: 1.5rem; color: var(--text-secondary);">
            ← Back to Directory
          </a>
          
          <div class="profile-meta-grid">
            <div class="profile-meta-left">
              <span class="tag">${trader.area}</span>
              <h1>${trader.name}</h1>
              <p class="known-for">${trader.knownFor}</p>
            </div>
            
            <div class="profile-meta-right">
              <div class="meta-info-row">
                <span class="meta-info-label">Specialty Category</span>
                <span class="meta-info-value">${trader.area}</span>
              </div>
              <div class="meta-info-row">
                <span class="meta-info-label">Status in Archive</span>
                <span class="meta-info-value" style="color: var(--accent-success);">Verified Profile</span>
              </div>
              <div class="meta-info-row">
                <span class="meta-info-label">Moderation Date</span>
                <span class="meta-info-value">May 2026</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Columns -->
        <div class="profile-layout">
          <!-- Left Column (Biography & Contributions) -->
          <div class="profile-main">
            ${trader.customContent ? `
              <section class="profile-body-section">
                ${trader.customContent}
              </section>
            ` : `
              <!-- Brief Profile -->
              <section class="profile-body-section">
                <h2>Biography & Historical Impact</h2>
                <p>${trader.bio}</p>
              </section>

              <!-- Why Included -->
              <section class="profile-body-section">
                <h2>Why This Trader Is Included</h2>
                <ul class="why-included-list">
                  ${trader.whyIncluded.map(point => `<li>${point}</li>`).join("")}
                </ul>
              </section>

              <!-- Main Contributions -->
              <section class="profile-body-section">
                <h2>Core Technical Contributions</h2>
                <div class="contributions-grid">
                  <div class="contribution-box">
                    <h3>Trading Methodology</h3>
                    <p>${trader.contributions.methodology}</p>
                  </div>
                  <div class="contribution-box">
                    <h3>Technical Analysis Approach</h3>
                    <p>${trader.contributions.technicalAnalysis}</p>
                  </div>
                  <div class="contribution-box">
                    <h3>Key Research & Publications</h3>
                    <p>${trader.contributions.research}</p>
                  </div>
                  <div class="contribution-box">
                    <h3>Risk Management & Capital Preservation</h3>
                    <p>${trader.contributions.riskManagement}</p>
                  </div>
                </div>
              </section>
            `}
          </div>

          <!-- Right Column (Sources & Resources) -->
          <aside class="profile-sidebar">
            <section class="profile-body-section" style="margin-bottom: 2rem;">
              <h2 style="font-size: 1.3rem;">References & Reading</h2>
              <ul class="sources-list">
                ${trader.sources.map(source => `
                  <li>
                    <div class="source-details">
                      <span class="source-name">${source.name}</span>
                      <span class="source-type">${source.type}</span>
                    </div>
                    <a href="${source.url}" target="_blank" rel="noopener noreferrer" class="source-link-btn">Link</a>
                  </li>
                `).join("")}
              </ul>
            </section>

            <section class="disclaimer-panel" style="margin-top: 1.5rem; padding: 1.2rem; border-radius: 6px;">
              <h4 style="font-size: 0.9rem; margin-bottom: 0.4rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:3px;">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Educational Disclaimer
              </h4>
              <p style="font-size: 0.8rem; line-height: 1.5; margin-bottom: 0;">
                All methods described are for educational review. Trading involves significant losses.
              </p>
            </section>
          </aside>
        </div>

        <!-- Community Submissions -->
        <div class="community-contributions">
          <div class="section-header">
            <h2 class="section-title">Community Research Contributions</h2>
          </div>
          
          <div class="comments-list" id="comments-container">
            ${comments.length === 0 ? `
              <div class="comment-card" style="text-align: center; color: var(--text-muted); border-style: dashed;">
                <p style="margin: 0.5rem 0;">No community additions currently verified for this profile. Submit verified references below.</p>
              </div>
            ` : comments.map(c => `
              <div class="comment-card">
                <div class="comment-header">
                  <span class="comment-author">${escapeHtml(c.name)} <span style="font-weight:normal; color:var(--text-muted);">(${escapeHtml(c.publishName === 'Yes' ? 'Public Credit' : 'Anonymous Scholar')})</span></span>
                  <span class="comment-type-badge">${escapeHtml(c.type)}</span>
                </div>
                <div class="comment-body">
                  "${escapeHtml(c.message)}"
                </div>
                ${c.source ? `<div class="comment-source">Source: <a href="${escapeHtml(c.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(c.source)}</a></div>` : ''}
                <div class="moderation-note">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  Awaiting Global Review (Visible in your browser session)
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Inline correction form -->
          <div class="submit-correction-panel">
            <h3>Submit corrections, insights, or sources</h3>
            <p>Help us improve this educational profile. All submissions are moderated for factuality. signals or promotions will be blocked.</p>
            
            <div id="correction-alert-placeholder"></div>

            <form id="profile-correction-form">
              <div class="form-grid">
                <div class="form-group">
                  <label for="c-name">Name / Handle</label>
                  <input type="text" id="c-name" class="form-control" placeholder="e.g. Finance Historian" required>
                </div>
                <div class="form-group">
                  <label for="c-email">Email (will remain private)</label>
                  <input type="email" id="c-email" class="form-control" placeholder="e.g. scholar@university.edu" required>
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="c-type">Contribution Type</label>
                  <select id="c-type" class="form-control" required>
                    <option value="" disabled selected>Select option</option>
                    <option value="Factual Correction">Factual Correction</option>
                    <option value="Reliable Source Reference">Reliable Source Reference</option>
                    <option value="Academic Insight">Academic Insight</option>
                    <option value="Biographical Addition">Biographical Addition</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="c-source">Verification Source (URL / Book reference)</label>
                  <input type="text" id="c-source" class="form-control" placeholder="e.g. Book ISBN or academic website link">
                </div>
              </div>
              
              <div class="form-group">
                <label for="c-message">Contribution Content (Strictly facts and citations)</label>
                <textarea id="c-message" class="form-control" rows="4" placeholder="Describe the factual correction, source reference, or additional insight..." required></textarea>
              </div>

              <div class="form-group" style="flex-direction:row; align-items:center; margin-bottom: 1.5rem;">
                <input type="checkbox" id="c-publish" class="checkbox-control" checked>
                <label for="c-publish" class="checkbox-label" style="font-weight:normal;">Publish my name/handle with this contribution (otherwise published anonymously)</label>
              </div>

              <button type="submit" class="btn btn-primary">Submit for Moderation</button>
            </form>
          </div>
        </div>
      </article>
    `;

    // Attach correction form submission handler
    const form = document.getElementById("profile-correction-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("c-name").value.trim();
      const email = document.getElementById("c-email").value.trim();
      const type = document.getElementById("c-type").value;
      const source = document.getElementById("c-source").value.trim();
      const message = document.getElementById("c-message").value.trim();
      const publishName = document.getElementById("c-publish").checked ? 'Yes' : 'No';

      if (!name || !email || !type || !message) {
        showFormAlert("correction-alert-placeholder", "Please complete all required fields.", "error");
        return;
      }

      // Save submission
      const newComment = {
        name,
        email,
        type,
        source,
        message,
        publishName,
        timestamp: new Date().toISOString()
      };

      comments.push(newComment);
      localStorage.setItem(storageKey, JSON.stringify(comments));

      // Show success, reset form, and re-render comments list immediately
      form.reset();
      showFormAlert(
        "correction-alert-placeholder", 
        "Thank you! Your contribution has been saved and queued for editor moderation. It is displayed below for your session.", 
        "success"
      );

      // Simple dynamic append without complete page repaint
      renderCommentsList(comments);
    });
  }

  function renderCommentsList(commentsList) {
    const container = document.getElementById("comments-container");
    if (!container) return;

    container.innerHTML = commentsList.map(c => `
      <div class="comment-card">
        <div class="comment-header">
          <span class="comment-author">${escapeHtml(c.name)} <span style="font-weight:normal; color:var(--text-muted);">(${escapeHtml(c.publishName === 'Yes' ? 'Public Credit' : 'Anonymous Scholar')})</span></span>
          <span class="comment-type-badge">${escapeHtml(c.type)}</span>
        </div>
        <div class="comment-body">
          "${escapeHtml(c.message)}"
        </div>
        ${c.source ? `<div class="comment-source">Source: <a href="${escapeHtml(c.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(c.source)}</a></div>` : ''}
        <div class="moderation-note">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          Awaiting Global Review (Visible in your browser session)
        </div>
      </div>
    `).join("");
  }

  // 4. CONTRIBUTE VIEW
  function renderContribute() {
    appRoot.innerHTML = `
      <section class="editorial-page" style="max-width: 100%;">
        <h1>Contribute to the Archive</h1>
        <p class="page-description">
          The Geniuses of Trading is structured as a non-commercial archival reference. We welcome contributions from researchers, market historians, and traders who possess verified documents, publications, or corrections.
        </p>

        <div class="contribute-layout">
          <!-- Information and Guidelines -->
          <div class="contribute-info">
            <h2>Submission Guidelines</h2>
            <p>
              To maintain our standards of neutrality, objectivity, and historical factuality, all submissions are subject to manual editorial review by our moderators before being incorporated into official profiles.
            </p>

            <div class="rules-card rules-allowed">
              <h4>Allowed Contributions</h4>
              <ul>
                <li>Factual corrections (dates, affiliations, historical timelines).</li>
                <li>Reliable, primary sources (academic papers, official reports, peer-reviewed interviews).</li>
                <li>Professional technical insights into public strategies.</li>
                <li>Information regarding books or verified publications.</li>
                <li>Suggestions for new modern trader profiles.</li>
              </ul>
            </div>

            <div class="rules-card rules-not-allowed">
              <h4>Not Allowed under any circumstances</h4>
              <ul>
                <li>Defamatory or promotional text, hype, or personal critiques.</li>
                <li>Gossip, rumors, or unverified performance claims.</li>
                <li>Personal contact information or private documents.</li>
                <li>Commercial advertising or promotional referral links.</li>
                <li>Trading signals, market forecasts, or investment advice.</li>
              </ul>
            </div>
          </div>

          <!-- Contribution Form -->
          <div class="submit-correction-panel">
            <h2>Archive Submission Form</h2>
            <p>Please supply clear factual sources for any information provided.</p>

            <div id="general-contribute-alert-placeholder"></div>

            <form id="general-contribute-form">
              <div class="form-grid">
                <div class="form-group">
                  <label for="contrib-name">Your Name / Title</label>
                  <input type="text" id="contrib-name" class="form-control" placeholder="e.g. Dr. Robert Chen" required>
                </div>
                <div class="form-group">
                  <label for="contrib-email">Email Address</label>
                  <input type="email" id="contrib-email" class="form-control" placeholder="e.g. chen@university.org" required>
                </div>
              </div>

              <div class="form-grid">
                <div class="form-group">
                  <label for="contrib-trader">Trader Profile Concerned</label>
                  <input type="text" id="contrib-trader" class="form-control" placeholder="e.g. Jim Simons or [New Profile Proposal]" required>
                </div>
                <div class="form-group">
                  <label for="contrib-type">Contribution Category</label>
                  <select id="contrib-type" class="form-control" required>
                    <option value="" disabled selected>Select contribution type</option>
                    <option value="Factual Correction">Factual Correction</option>
                    <option value="Reliable Reference/Source">Reliable Reference/Source</option>
                    <option value="Professional Insight">Professional Technical Insight</option>
                    <option value="New Trader Proposal">New Trader Profile Proposal</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="contrib-message">Description of Contribution</label>
                <textarea id="contrib-message" class="form-control" rows="5" placeholder="Specify details, formulas, text corrections, or suggested profile layout..." required></textarea>
              </div>

              <div class="form-group">
                <label for="contrib-source">Citations & Verification Sources</label>
                <input type="text" id="contrib-source" class="form-control" placeholder="URLs to academic publications, books references, or interview dates" required>
              </div>

              <div class="form-group" style="flex-direction:row; align-items:center; margin-bottom: 1.5rem;">
                <input type="checkbox" id="contrib-publish" class="checkbox-control" checked>
                <label for="contrib-publish" class="checkbox-label" style="font-weight:normal;">Publish my credit on the archive if approved</label>
              </div>

              <button type="submit" class="btn btn-primary">Submit Archive Proposal</button>
            </form>
          </div>
        </div>
      </section>
    `;

    // Handle general contribution form submission
    const form = document.getElementById("general-contribute-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contrib-name").value.trim();
      const email = document.getElementById("contrib-email").value.trim();
      const trader = document.getElementById("contrib-trader").value.trim();
      const type = document.getElementById("contrib-type").value;
      const message = document.getElementById("contrib-message").value.trim();
      const source = document.getElementById("contrib-source").value.trim();
      const publish = document.getElementById("contrib-publish").checked ? 'Yes' : 'No';

      if (!name || !email || !trader || !type || !message || !source) {
        showFormAlert("general-contribute-alert-placeholder", "Please complete all required fields.", "error");
        return;
      }

      // Save suggestion in general local storage queue
      const globalQueue = JSON.parse(localStorage.getItem("global_submissions")) || [];
      globalQueue.push({ name, email, trader, type, message, source, publish, timestamp: new Date().toISOString() });
      localStorage.setItem("global_submissions", JSON.stringify(globalQueue));

      form.reset();
      showFormAlert(
        "general-contribute-alert-placeholder", 
        "Thank you. Your proposal has been recorded and submitted to our review board. A confirmation email simulation has been registered.", 
        "success"
      );
    });
  }

  // 5. ABOUT VIEW
  function renderAbout() {
    appRoot.innerHTML = `
      <section class="editorial-page">
        <h1>About the Archive</h1>
        <p>
          <strong>The Geniuses of Trading</strong> is an independent educational initiative and digital archive dedicated to organizing historical resources regarding modern trading pioneers, mathematicians, technicians, and financial professionals.
        </p>
        <p>
          Markets are highly complex, structured systems. Over the past century, specific figures have developed frameworks, written literature, and demonstrated practical methodologies that significantly influenced the modern investment ecosystem. This website aims to document their contributions in a structured, concise, and non-sensational format.
        </p>
        
        <h2>Editorial Principles</h2>
        <p>
          Our organization operates under a strict mandate of neutrality and historical objectivity:
        </p>
        <ul>
          <li><strong>Educational Focus:</strong> The archive does not endorse any specific strategy, indicator, or trading system. It presents methods in their historical context.</li>
          <li><strong>No Performance Hype:</strong> We avoid speculative statements, promises of wealth, or unverified track records. Performance notes are restricted to documented institutional milestones.</li>
          <li><strong>Fact-Based:</strong> All profiles list primary references, peer-reviewed texts, and official organizations so users can consult original sources directly.</li>
          <li><strong>Community-Moderated:</strong> Our records are open to correction and review by the public. We actively encourage verified edits from historians and practitioners.</li>
        </ul>

        <h2>Platform Scope</h2>
        <p>
          This archive is not a commercial service, a brokerage, or a financial advisory service. It is designed to act as an initial reference manual for students of financial history, technical analysis, quantitative programming, and risk theory.
        </p>
      </section>
    `;
  }

  // 6. DISCLAIMER VIEW
  function renderDisclaimer() {
    appRoot.innerHTML = `
      <section class="editorial-page">
        <h1>Educational & Financial Disclaimer</h1>
        
        <div class="disclaimer-panel" style="margin-top: 1.5rem; margin-bottom: 2rem;">
          <h4 style="color: var(--accent-warning);">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4px;">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            CRITICAL REGULATORY NOTICE
          </h4>
          <p>
            The content provided on this website is for general educational, academic, and historical research purposes only. Under no circumstances should this information be interpreted as investment, legal, tax, or financial advice.
          </p>
        </div>

        <p>
          <strong>1. No Investment Advice</strong><br>
          The Geniuses of Trading is not an investment advisor, broker-dealer, or financial analyst. None of the articles, profiles, books references, or strategies explained constitute a solicitation, recommendation, or offer to buy or sell any financial instruments (including stocks, futures, options, currencies, or cryptocurrencies).
        </p>
        
        <p>
          <strong>2. Assumption of Risk</strong><br>
          Trading in financial markets contains high risk and can result in the loss of all deposited capital. Strategies described, including systematic trend following, quantitative models, and options hedging, involve complex mechanisms and are presented here strictly as theoretical or historical concepts. Any decision to implement these methodologies in real markets is done at the user's sole risk.
        </p>
        
        <p>
          <strong>3. Information Accuracy & Updates</strong><br>
          While we strive to ensure that all archival details are accurate and supported by bibliography, market records can be subjective or contain errors. The profiles are not intended to replace primary books, official corporate disclosures, or direct academic materials. We provide no guarantee regarding the ongoing accuracy or completeness of the database.
        </p>

        <p>
          <strong>4. Performance Statements</strong><br>
          Historical returns or achievements referenced (for example, the performance of Jim Simons' Medallion Fund or Ed Seykota's client accounts) are extraordinary historical occurrences. Past performance is not indicative of future performance, and no representation is being made that any account will achieve profits or losses similar to those documented.
        </p>
      </section>
    `;
  }

  // 7. CONTACT VIEW
  function renderContact() {
    appRoot.innerHTML = `
      <section class="editorial-page" style="max-width: 100%;">
        <h1>Contact the Archive</h1>
        <p class="page-description">
          Have an inquiry, media request, or academic collaboration proposal? Get in touch with our editorial team.
        </p>

        <div class="contact-layout">
          <!-- Contact Form -->
          <div class="submit-correction-panel">
            <h2>Send a Message</h2>
            <p>Responses are generally processed within 2–3 business days.</p>
            
            <div id="contact-alert-placeholder"></div>

            <form id="contact-form">
              <div class="form-grid">
                <div class="form-group">
                  <label for="contact-name">Name</label>
                  <input type="text" id="contact-name" class="form-control" placeholder="e.g. Sarah Miller" required>
                </div>
                <div class="form-group">
                  <label for="contact-email">Email Address</label>
                  <input type="email" id="contact-email" class="form-control" placeholder="e.g. sarah@example.com" required>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-subject">Subject</label>
                <input type="text" id="contact-subject" class="form-control" placeholder="e.g. Academic Research Inquiry" required>
              </div>

              <div class="form-group">
                <label for="contact-message">Message</label>
                <textarea id="contact-message" class="form-control" rows="6" placeholder="Write your inquiry here..." required></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Send Inquiry</button>
            </form>
          </div>

          <!-- Contact Sidebar Info -->
          <div class="contact-info-box">
            <div class="contact-item">
              <h4>General Inquiries</h4>
              <p>info@geniusesoftrading.org</p>
            </div>
            
            <div class="contact-item">
              <h4>Academic Submissions</h4>
              <p>editor@geniusesoftrading.org</p>
            </div>

            <div class="contact-item">
              <h4>Institutional Office</h4>
              <p>
                The Geniuses of Trading Archive<br>
                Financial History Division<br>
                100 Wall Street, Suite 1200<br>
                New York, NY 10005, USA
              </p>
            </div>

            <div class="contact-item" style="border-top: 1px solid var(--border-color); padding-top: 1.5rem; margin-top: 0.5rem;">
              <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">
                Please note: We do NOT accept requests for investment advice, asset management inquiries, or trade signals. Such communications will be automatically deleted.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;

    // Handle contact form submission
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !subject || !message) {
        showFormAlert("contact-alert-placeholder", "Please complete all required fields.", "error");
        return;
      }

      // Save inquiry in local storage contact messages queue
      const contactQueue = JSON.parse(localStorage.getItem("contact_messages")) || [];
      contactQueue.push({ name, email, subject, message, timestamp: new Date().toISOString() });
      localStorage.setItem("contact_messages", JSON.stringify(contactQueue));

      form.reset();
      showFormAlert(
        "contact-alert-placeholder", 
        "Thank you! Your message has been sent successfully. A mock transmission has been stored in your session.", 
        "success"
      );
    });
  }

  // 8. PRIVACY VIEW
  function renderPrivacy() {
    appRoot.innerHTML = `
      <section class="editorial-page">
        <h1>Privacy Policy</h1>
        <p>Last updated: May 2026</p>
        <p>
          At <strong>The Geniuses of Trading</strong>, we prioritize the privacy of our visitors. This Privacy Policy document outlines the types of personal information that is received, collected, and how we handle it.
        </p>
        
        <h2>Information Collection & Use</h2>
        <p>
          We do not require users to create accounts to view the archive. If you submit a suggestion, correction, or contact form, we collect:
        </p>
        <ul>
          <li>Your name/handle and email address (to process submissions and verify source credentials).</li>
          <li>Any biographical or technical data you choose to provide in the contribution forms.</li>
        </ul>
        <p>
          We do not sell, trade, or share your email addresses or personal identifiers with third parties. Email addresses provided in forms are used solely for direct editorial follow-ups.
        </p>

        <h2>Cookies & Analytics</h2>
        <p>
          We utilize standard local storage parameters to persist your user settings (such as your Light/Dark mode choice) and cache local forms submissions. We do not use intrusive cross-site tracking cookies or behavioral advertising widgets.
        </p>

        <h2>Data Security</h2>
        <p>
          We apply standard security protocols to safeguard any information transmitted through our submission pages. However, because the internet is not completely secure, we advise against transmitting sensitive personal information or passwords.
        </p>
      </section>
    `;
  }

  // 9. TERMS VIEW
  function renderTerms() {
    appRoot.innerHTML = `
      <section class="editorial-page">
        <h1>Terms of Use</h1>
        <p>Last updated: May 2026</p>
        <p>
          Welcome to <strong>The Geniuses of Trading</strong>. By accessing this educational archive, you agree to comply with and be bound by the following Terms of Use.
        </p>
        
        <h2>Acceptable Use</h2>
        <p>
          The content of this website is provided solely for educational, personal, and research applications. You may reference and quote our profiles provided you credit the archive. You may not harvest, scrape, or copy our profiles for commercial publishing or monetization.
        </p>
        
        <h2>User Submissions</h2>
        <p>
          By submitting corrections, sources, or insights, you warrant that the information provided is factually accurate to the best of your knowledge and does not infringe upon any copyright or intellectual property rights. By checking the permission boxes, you grant this archive a non-exclusive, royalty-free, perpetual license to format, edit, and publish your contribution in our educational profiles.
        </p>

        <h2>Intellectual Property & Copyright</h2>
        <p>
          All site designs, custom logo structures, styles, and custom text summaries are copyright of The Geniuses of Trading, except for quotes, book citations, and external research papers, which remain the property of their respective authors and publishers.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          This website and its administrators shall not be liable for any direct, indirect, incidental, or consequential losses resulting from the use of this archive, including financial losses incurred from implementing trading strategies mentioned in our profiles. Consult a licensed advisor before engaging in financial markets.
        </p>
      </section>
    `;
  }

  // --- Utility Functions ---

  // HTML Entity Escaper for Security
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Render Alert Banner for Forms
  function showFormAlert(placeholderId, message, type) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;

    placeholder.innerHTML = `
      <div class="alert-banner alert-banner-success">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div>${escapeHtml(message)}</div>
      </div>
    `;

    // Scroll slightly to reveal alert if needed
    placeholder.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});
