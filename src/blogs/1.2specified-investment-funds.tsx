import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

/* ------------------------------------------------------------------ */
/*  Markdown content – lifted verbatim from the .md file               */
/* ------------------------------------------------------------------ */
const markdown = `
# Specified Investment Funds (SIFs): The Niche Advantage for 22-45-Year-Old Indian Investors

> “If you want outsized returns, you have to be willing to go where the crowd isn’t—yet.”

Mutual funds cover the broad market; PMS and AIFs cater to the ultra-wealthy. **Specified Investment Funds (SIFs)** sit in the middle—**bespoke, concentrated, and lightly regulated vehicles** that give discerning investors aged 22-45 **targeted exposure to themes, sectors, or strategies** that plain-vanilla products simply cannot access.

At **Mozno Advisory**, we curate SIFs for clients who want:

- **Pre-IPO tech unicorns** before they list at 3× the valuation  
- **Green-energy infrastructure** yielding 12–14 % IRRs  
- **Quant-driven long-short** strategies uncorrelated to Nifty swings  
- **Fractional ownership** of Grade-A commercial real estate with 8 % rental yields  

This 2,000-word guide demystifies SIFs—what they are, how they’re structured, the risks, the rewards, and how to integrate them into a modern Indian portfolio.

---

## 1. What Exactly Is a Specified Investment Fund?

| Feature | Mutual Fund | PMS | AIF Cat-III | SIF |
|---------|-------------|-----|-------------|-----|
| **Minimum Ticket** | ₹500 SIP | ₹50 lakh | ₹1 crore | ₹10–25 lakh* |
| **Regulation** | SEBI MF Regs | SEBI PMS Regs | SEBI AIF Regs | **Contractual / LLP** |
| **Concentration** | Diversified ≤10 % per stock | ≤25 % per stock | Flexible | **Up to 100 % single theme** |
| **Liquidity** | Daily | Monthly | Quarterly–Yearly | **Strategy-specific** |
| **Reporting** | Monthly factsheet | Monthly | Quarterly | **Custom dashboards** |

\*Ticket size is **set by the investment manager and Mozno Advisory jointly**—allowing **young professionals** to club family money or use **step-up commitments**.

---

## 2. Why SIFs Make Sense for 22-45-Year-Olds

### 2.1 Demographic Tailwinds
- **Long runway**: 20–35 years to harvest illiquidity premiums.  
- **Higher risk appetite**: Still in wealth-accumulation phase.  
- **Tech-savvy**: Comfortable with data rooms, virtual roadshows, and tokenised assets.

### 2.2 Market Gaps SIFs Fill

| Gap | Vanilla Product Limitation | SIF Solution |
|-----|----------------------------|--------------|
| **Pre-IPO Access** | Mutual funds cannot hold unlisted | Dedicated pre-IPO fund |
| **Thematic Leverage** | Index funds cap sector weights | 2× leveraged climate-tech fund |
| **Distressed Debt** | Credit-risk funds restricted | Special-situation SIF buying NPA pools at 40 % discount |

---

## 3. Common SIF Strategies in India (2024-25)

### 3.1 Pre-IPO Tech Pool
- **Target IRR**: 18–22 % over 4–5 years  
- **Pipeline**: 8–10 late-stage fintech, SaaS, and EV-charging startups  
- **Exit**: IPO, strategic sale, or buyback

### 3.2 Green Infrastructure Yield Trust
- **Asset**: 250 MW solar farms with 20-year PPA at ₹4.5/kWh  
- **Yield**: 12 % pre-tax cash yield + 2 % escalation  
- **Structure**: LLP with quarterly distributions

### 3.3 Quant Long-Short Equity
- **Edge**: Machine-learning factor model (momentum + quality)  
- **Gross exposure**: 150 % long / 50 % short  
- **Target**: 12–15 % net CAGR with <8 % max drawdown

### 3.4 Fractional Commercial Real Estate (CRE)
- **Asset**: Grade-A office in Bengaluru’s ORR, 95 % occupancy  
- **Minimum bite**: ₹25 lakh for 1,000 sq ft equivalent  
- **Returns**: 8 % net rental yield + 4–5 % capital appreciation

---

## 4. How SIFs Are Structured

### 4.1 Legal Wrapper
- **Special Purpose LLP** or **Trust**  
- **Investment Management Agreement (IMA)** defining fees, hurdle, high-water mark  
- **SEBI AIF-like governance** even if not formally registered (voluntary adoption)

### 4.2 Fee Stack

| Fee Component | Typical Range |
|---------------|---------------|
| **Management Fee** | 1–1.5 % p.a. |
| **Performance Fee** | 10–15 % above hurdle (8 % IRR) |
| **Exit Load** | 2 % first year, 1 % second, nil thereafter |

### 4.3 Liquidity Windows
- **Annual redemption** with 90-day notice  
- **Quarterly NAV** published by independent valuer  
- **Secondary trading desk** for fractional CRE tokens (optional)

---

## 5. Risk Map: What Can Go Wrong?

| Risk | Mitigation Tactics |
|------|--------------------|
| **Liquidity** | Staggered exits, secondary market quotes |
| **Concentration** | Cap single-name exposure via side-pockets |
| **Regulatory** | Voluntary SEBI AIF registration; quarterly legal audit |
| **Valuation** | Third-party CA/valuer + conservative DCF assumptions |
| **Key-Man** | Co-manager structure + key-man insurance |

---

## 6. Suitability Checklist for Investors

| Criterion | Conservative | Balanced | Aggressive |
|-----------|--------------|----------|------------|
| **Net-worth in SIF** | ≤ 5 % | 5–15 % | 15–30 % |
| **Emergency Fund** | 12 months | 9 months | 6 months |
| **Time Horizon** | ≥ 7 yrs | ≥ 5 yrs | ≥ 3 yrs |
| **Knowledge** | Basic | Moderate | Advanced |

---

## 7. Taxation Primer FY 2025-26

| Structure | STCG (< 3 yrs) | LTCG (≥ 3 yrs) | Notes |
|-----------|----------------|----------------|-------|
| **LLP** | Slab rate | 12.5 % with indexation | Pass-through to partners |
| **Trust** | 30 % flat | 12.5 % post-indexation | Can elect for AIF-like pass-through |
| **Listed REIT Fractionals** | 15 % | 10 % beyond ₹1.25 L | Rental yield taxed at slab |

**Pro-tip**: Club family HUF or parents as partners to **optimise tax slabs**.

---

## 8. Case Study: 32-Year-Old Building a ₹2-Crore Second Home

| Step | Details |
|------|---------|
| **Goal** | Down-payment of ₹2 Cr in 8 years |
| **SIF Allocation** | ₹30 lakh today in Green Infra Yield Trust |
| **Projected Value** | ₹60 lakh @ 12 % IRR (4 % yield + 8 % cap gain) |
| **Exit Strategy** | Exit Year-7 to lock gains; balance via equity SIPs |

---

## 9. How Mozno Advisory Curates SIFs

### 9.1 Screening Funnel
1. **Theme Viability** – TAM ≥ ₹10,000 Cr, policy tailwinds  
2. **Manager Track** – 5-year IRR > 15 %, downside < 10 %  
3. **Governance** – Independent trustee, quarterly audit  
4. **Liquidity** – At least one secondary exit window per year  
5. **Fee Fairness** – Hurdle ≥ 8 %, no catch-up clauses

### 9.2 Ongoing Monitoring
- **Monthly flash report** (occupancy, cash-flow)  
- **Quarterly NAV + valuation memo**  
- **Annual on-site audit** by Big-4 CA firm  
- **Investor call** every half-year

---

## 10. Building a SIF-Lite Portfolio

| Sleeve | Allocation | Vehicle |
|--------|------------|---------|
| **Core** | 60 % | Nifty 500 ETF |
| **Satellite-SIF** | 25 % | Pre-IPO Tech Pool |
| **Satellite-SIF** | 10 % | Fractional CRE |
| **Liquidity Buffer** | 5 % | Liquid Fund |

**Review**: Rebalance annually; reduce SIF to 15 % once goal is 3 years away.

---

## 11. Due-Diligence Checklist Before You Commit

- [ ] **Private Placement Memorandum** read end-to-end  
- [ ] **Key-man insurance** in place  
- [ ] **Exit gate mechanics** documented  
- [ ] **Audited P&L & balance sheet** last 3 years  
- [ ] **Side-pocket policy** for stressed assets  
- [ ] **Dispute resolution** – arbitration seat (Mumbai/Delhi)

---

## 12. Common Myths Busted

| Myth | Reality |
|------|---------|
| “SIFs are only for ₹1 Cr+” | **Minimum ₹10 lakh tickets** now common via pooling. |
| “Unregulated wild-west” | **Voluntary AIF-like governance** adopted by top managers. |
| “Can’t exit before 5 yrs” | **Annual windows + secondary desks** emerging. |

---

## 13. Fees & Transparency Snapshot

| Item | Mozno | Industry Avg |
|------|-------|--------------|
| **Access Fee** | ₹0 | 0.5–1 % |
| **Ongoing Advisory** | 0.25 % p.a. | 0.5 % p.a. |
| **Performance Review** | Quarterly | Annual |
| **Exit Advisory** | Free | 1 % |

---

## 14. Final Word

Specified Investment Funds are **the bridge between vanilla mutual funds and exclusive AIFs**, giving 22-45-year-old Indians **scalpel-like precision** to harvest **non-linear returns** without locking up crores for decades. Done right—with stringent due diligence, prudent sizing, and periodic rebalancing—SIFs can **turbo-charge goal achievement** while remaining within a well-structured risk framework.

---

## 15. Ready to Explore?

🔗 [**Book Your 30-Minute SIF Discovery Call**](https://mozno.com)

*Mozno Advisory acts as a distributor/arranger and does not guarantee returns. Investments carry market, liquidity, and regulatory risks. Please read all offering documents carefully.*
`;

/* ------------------------------------------------------------------ */
/*  Page component                                                      */
/* ------------------------------------------------------------------ */
export default function SIFPage() {
return (
    <>
      <Head>
        <title>Specified Investment Funds – Mozno</title>
        <meta
          name="description"
          content="Complete guide for 22-45-year-old Indians to build wealth via mutual funds."
        />
      </Head>

      <main>
        <article className="blog-page">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: (props) => <h1 className="blog-page__heading blog-page__heading--h1" {...props} />,
              h2: (props) => <h2 className="blog-page__heading blog-page__heading--h2" {...props} />,
              h3: (props) => <h3 className="blog-page__heading blog-page__heading--h3" {...props} />,
              p: (props) => <p className="blog-page__paragraph" {...props} />,
              blockquote: (props) => <blockquote className="blog-page__blockquote" {...props} />,
              ul: (props) => <ul className="blog-page__list" {...props} />,
              ol: (props) => <ol className="blog-page__list" {...props} />,
              li: (props) => <li className="blog-page__list-item" {...props} />,
              table: (props) => <table className="blog-page__table" {...props} />,
              th: (props) => <th className="blog-page__th" {...props} />,
              td: (props) => <td className="blog-page__td" {...props} />,
              a: (props) => <a className="blog-page__link" {...props} />,
              strong: (props) => <strong className="blog-page__strong" {...props} />,
              code: (props) => <code className="blog-page__code" {...props} />,
              hr: (props) => <hr className="blog-page__hr" {...props} />,
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      </main>
    </>
  );
}