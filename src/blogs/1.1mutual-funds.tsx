import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

/* ------------------------------------------------------------------ */
/*  Content – taken verbatim from 1.1mutual-funds.md                  */
/* ------------------------------------------------------------------ */
const markdown = `
# Mutual Funds Advisory: The Smart Way for 22-45-Year-Old Indians to Build Wealth

> “The earlier you start, the more time your money has to grow.”
> — Every seasoned investor ever, and the data backs it up.

Mutual Funds are no longer the exotic investment product your parents debated at the dinner table. In 2025, they are the **default wealth-building engine for young and mid-career Indians** who want inflation-beating returns without becoming full-time stock-market analysts. Whether you are 22 and just landed your first salary or 45 and juggling home-loan EMIs with kids’ school fees, a well-designed mutual-fund portfolio can put every rupee to work—**systematically, transparently, and cost-effectively**.

At **Mozno Advisory**, we help Indians aged 22-45 cut through jargon, avoid costly mistakes, and invest in the **right mix of mutual funds** across equity, debt, and hybrid categories. As an AMFI-registered distributor, our research-driven, compliance-first approach ensures that every recommendation aligns with your **goals, risk profile, and timelines**.

Below is a 360-degree guide that distills everything you need to know—**from “What is a mutual fund?” to “How do I build a ₹5-crore retirement corpus by 50?”** Read it end-to-end, bookmark it, and share it with that friend who still thinks mutual funds are “riskier than crypto.”

---

## 1. Why Mutual Funds Matter in 2025

### 1.1 Macro Tailwinds for Indian Investors
- **GDP growth >6 %** for the next decade = corporate earnings tailwind.
- **Financialisation of savings**—household allocation to equities and MFs has doubled in five years.
- **TINA factor** (There Is No Alternative) with **FD rates <7 % post-tax** and **real-estate yields at record lows**.

### 1.2 Demographic Edge
If you are between 22 and 45 today, you have **20–35 years of earning and investing runway**. A monthly SIP of just ₹10,000 in a Nifty 500 index fund at a **12 % CAGR** can grow to:

| Years Invested | Corpus | Total Investment |
|----------------|--------|------------------|
| 20             | ₹94 L  | ₹24 L            |
| 25             | ₹1.69 Cr | ₹30 L          |
| 30             | ₹3.04 Cr | ₹36 L          |

---

## 2. Mutual Fund Basics: A 90-Second Refresher

| Term           | Plain-English Explanation |
|----------------|---------------------------|
| AMC            | The company that runs the fund (e.g., HDFC, ICICI, DSP). |
| NAV            | Per-unit price; changes daily based on underlying asset values. |
| Expense Ratio  | Annual fee you pay the AMC (0.10 % for index funds; up to 1.5 % for active funds). |
| **SIP**        | Systematic Investment Plan—invest a fixed sum monthly. |
| **STP**        | Systematic Transfer Plan—shift money from debt to equity gradually. |
| **SWP**        | Systematic Withdrawal Plan—create monthly “pay-cheques” post-retirement. |

---

## 3. Equity Funds: Your Engine of Growth

### 3.1 Large-Cap Funds
- **Basket**: Top 100 stocks by market cap (Reliance, TCS, Infosys).
- **Risk**: Moderate.
- **Ideal for**: Core portfolio; first-time equity investors.

### 3.2 Mid-Cap & Small-Cap Funds
- **Return potential**: 2–3 % extra CAGR over large-caps **over 10+ years**.
- **Volatility**: 20–30 % drawdowns are normal every few years.
- **Rule of thumb**: Limit to **20–30 %** of total equity exposure.

### 3.3 Flexi-Cap & Multi-Cap Funds
- Freedom to shift market-cap buckets based on valuations.
- One-stop solution for investors who don’t want to juggle multiple funds.

### 3.4 Index Funds & ETFs
- **Lowest fees** (expense ratio 0.05–0.20 %).
- **Consistent** with Nifty 50/Sensex; no fund-manager risk.
- **Best for**: Tax-loss harvesting, core satellite strategy.

### 3.5 Sectoral & Thematic Funds
- **Example**: IT, Pharma, Consumption, ESG, Manufacturing.
- **Use case**: Tactical 5-10 % satellite allocation when valuations are cheap.
- **Caveat**: Rotate out when themes peak (look at price-to-earnings vs. 10-year median).

---

## 4. Debt Funds: The Stability Layer

### 4.1 Liquid & Overnight Funds
- **Parking ground**: Emergency fund (3-6 months expenses).
- **Returns**: 6.5–7 %; redemption in T+1 day.

### 4.2 Ultra-Short & Low-Duration Funds
- **Horizon**: 3–12 months.
- **Better than FDs**: Indexation benefit after 3 years.

### 4.3 Corporate Bond & Banking PSU Funds
- **Credit quality**: Predominantly AAA/A1+.
- **Yield pick-up**: 0.5–1 % over gilt funds with marginally higher risk.

### 4.4 Gilt Funds
- **Portfolio**: Only government securities.
- **Interest-rate play**: Do well when RBI cuts rates; volatile in rising-rate cycles.

### 4.5 Target-Maturity Funds
- **New kid on the block**: Passively hold GOI/SDL bonds maturing on a single date.
- **Predictable returns** if held to maturity; **no reinvestment risk**.

---

## 5. Hybrid Funds: One-Stop Asset Allocation

| Category            | Equity % | Debt % | Ideal For |
|---------------------|----------|--------|-----------|
| Aggressive Hybrid    | 65–80 %  | 20–35 % | Moderate risk-takers |
| Balanced Advantage   | 30–80 % dynamic | — | Want equity exposure with lower volatility |
| Conservative Hybrid  | 10–25 %  | 75–90 % | First-time debt investors seeking kicker returns |

---

## 6. How to Match Funds to Your Goals

| Goal              | Time Horizon | Risk Bucket | Suggested Categories |
|-------------------|--------------|-------------|----------------------|
| Emergency Fund    | < 1 yr       | Ultra-Low   | Liquid/Overnight |
| Europe Trip       | 2 yrs        | Low         | Ultra-Short Duration |
| House Down-Payment| 5 yrs        | Moderate    | Balanced Advantage + Short-Duration Debt |
| Child’s Education | 15 yrs       | High        | Flexi-Cap + Mid-Cap + Small-Cap |
| Retirement        | 25–35 yrs    | High        | Index (Nifty 500) + ESG/International Fund |

---

## 7. The Power of SIP + Step-Up + Top-Up

- **Base SIP**: ₹15,000/month at 12 % → ₹1.12 Cr in 20 years.
- **Step-up SIP**: Increase by 10 % every year → ₹1.96 Cr.
- **Annual Bonus Top-up**: ₹1 L bonus invested every March → ₹2.34 Cr.

Small tweaks compound into **multi-crore differences**.

---

## 8. Taxation Cheat-Sheet FY 2025-26

| Fund Type | Short-Term (< 3 yrs) | Long-Term (≥ 3 yrs) | Grandfathering |
|-----------|----------------------|---------------------|----------------|
| **Equity** | 20 % on gains | 12.5 % above ₹1.25 L | Yes (pre-31-Jan-18 NAV) |
| **Debt**   | Slab rate | 12.5 % with indexation | N/A |
| **Hybrid (Aggressive)** | Treated as equity | Same as equity | Same as equity |

**ELSS funds** (3-yr lock-in) still qualify for **₹1.5 L deduction under 80C**.

---

## 9. Common Mistakes 22-45-Year-Olds Make

1. **Chasing last year’s star performer** → leads to buying high, selling low.
2. **Stopping SIPs during market falls** → ruins rupee-cost averaging.
3. **Ignoring debt funds** → keeps emergency money in savings account earning 3 %.
4. **Over-diversifying** → owning 15+ funds with overlapping portfolios.
5. **Not increasing SIPs with salary hikes** → fails to beat inflation.

---

## 10. Building Your ₹5-Crore Retirement Corpus (Case Study)

**Profile**: 28-year-old software engineer, current salary ₹1.2 L/month, grows at 8 % p.a.

| Step | Action |
|------|--------|
|1. Target corpus (age 60) | ₹5 Cr in today’s value → ₹15 Cr inflated @6 % p.a. |
|2. Required SIP | ₹33,000/month in 80 % equity / 20 % debt, 12 % blended return |
|3. Step-up SIP | Increase 10 % yearly → need only ₹21,000 starting SIP |
|4. Rebalance | Shift 5 % from equity to debt every year after age 45 |

Mozno Advisory runs this projection in our proprietary **Retirement Readiness Calculator**—book a free session to get yours.

---

## 11. How Mozno Advisory Adds Alpha Beyond Fund Selection

| Service Layer | DIY | With Mozno |
|---------------|-----|------------|
| **Risk Profiling** | Online quiz | 45-min behavioural interview + psychometrics |
| **Fund Shortlist** | 250+ schemes | Curated 15-scheme universe post-quant & qual filters |
| **Portfolio Construction** | Equal-weight | Core-satellite with glide-path modelling |
| **Review Cadence** | Random | Semi-annual rebalancing + macro alerts |
| **Exit Triggers** | Gut feel | Rule-based (fund-manager exit, style-drift, valuation bands) |

---

## 12. Frequently Asked Questions

**Q1. Can I lose all my money in mutual funds?**
A1. Diversified equity funds hold 50–100 stocks; the probability of a 100 % loss is near zero. A disciplined, long-term approach historically recovers from temporary falls.

**Q2. Should I choose dividend or growth option?**
A2. Growth option compounds returns; dividend option is tax-inefficient post-2020. Unless you need periodic cash-flow, **always pick growth**.

**Q3. How many funds should I own?**
A3. **5–7 funds** are enough for most investors.

**Q4. Is now a good time to enter?**
A4. **Time in the market beats timing the market.** Start an SIP today; volatility is averaged out.

---

## 13. Key Takeaways

- Mutual funds are **not an asset class**—they are a **wrapper** for equity, debt, gold, or a mix.
- The **22-45 age cohort** has the **biggest compounding advantage**—use it.
- A **goal-based, risk-aligned, tax-efficient strategy** beats chasing star ratings every time.
- **Professional guidance** pays for itself by avoiding behavioural mistakes and tax leaks.

---

## 14. Ready to Start?

🔗 [**Book Your Free Mutual Fund Strategy Call**](https://mozno.com)

*Mozno Advisory is an AMFI-registered mutual fund distributor (ARN-XXXXXX). All investments are subject to market risks. Please read all scheme-related documents carefully.*

`;

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */
export default function MutualFundsPage() {
  return (
    <>
      <Head>
        <title>Mutual Funds Advisory – Mozno Advisory</title>
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