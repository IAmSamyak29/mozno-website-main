// components/6.1-EstatePlanning.tsx
import type { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './EstatePlanningPage.css';

const content = `
# 6.1 Estate Planning & Wealth Transfer  
> “We spend our lives creating wealth; an estate plan ensures it creates the life we want for the next generation.”

Estate planning is **not only for the ultra-rich**.  
If you are 22-45 and already own **ESOPs, mutual funds, a flat, or crypto**, you have an **estate** that needs a **plan**.  
This 2 000-word guide demystifies **how to transfer every rupee—smoothly, legally, and tax-efficiently**—so **your wishes outlive you** and **family harmony outlives disputes**.

---

## 1. Why Estate Planning Matters Now

| Stat | Reality Check |
|------|---------------|
| **70 % Indians** die intestate (no valid will) | Family feuds, frozen assets |
| **Average wealth** at 35: ₹1-5 Cr | ESOPs, MF, FDs, crypto |
| **Legal battles** | 10-15 yrs, ₹5-50 L cost |
| **Succession act** | 50 % to spouse + 50 % split among kids (if no will) |

---

## 2. The Estate Planning Pyramid
| Tier | Tool | Purpose |
|------|------|---------|
| **Tier 1** | Nomination + Beneficiary | Quick liquidity |
| **Tier 2** | Will | Legal distribution |
| **Tier 3** | Trusts | Control & tax efficiency |
| **Tier 4** | Family Constitution | Values & governance |

---

## 3. Mapping Your Estate (15-Minute Exercise)
| Asset | Value (₹) | Nominee? | Will? | Tax on Transfer |
|-------|-----------|----------|-------|-----------------|
| **Flat in Bengaluru** | 1.2 Cr | Yes | TBD | Stamp duty 5 % |
| **MF Portfolio** | 60 L | Yes | TBD | Nil (transmission) |
| **ESOPs** | 40 L | No | TBD | Capital gains |
| **US stocks** | 25 L | No | TBD | Estate tax (if US situs) |
| **Crypto** | 10 L | No | TBD | 30 % gains |

---

## 4. Wealth-Transfer Channels
| Channel | Speed | Cost | Control |
|---------|-------|------|---------|
| **Nomination** | T+1 | Nil | No control post-death |
| **Will** | 6-18 m | ₹5k-₹15k | Full control |
| **Living Trust** | Immediate | ₹25k-₹1 L | Granular control |
| **Gift Deed** | Immediate | Stamp duty | Irrevocable |

---

## 5. Tax Implications of Wealth Transfer
| Mode | Recipient | Tax |
|------|-----------|-----|
| **Inheritance via Will** | Any | **Nil** (after 2005 amendment) |
| **Gift to relative** | Spouse, kids, parents | **Nil** |
| **Gift to non-relative** | > ₹50k | Slab rate |
| **US stock inheritance** | US citizen | 40 % estate tax above $60k |

---

## 6. Digital Assets & Crypto Succession
| Challenge | Solution |
|-----------|----------|
| **Private keys lost** | Hardware wallet + seed phrase in bank locker |
| **Exchange death protocol** | Nominee form + legal heir certificate |
| **Regulatory clarity** | Treat as capital asset, disclose in ITR |

---

## 7. Case Study: 33-Year-Old Techie
| Asset | Plan | Tool |
|-------|------|------|
| **Flat** | Transfer to spouse via Will | Registered Will |
| **MF** | Equal to parents & spouse | Nomination + Will |
| **ESOPs** | Trust for kids’ education | Revocable living trust |
| **Crypto** | Seed phrase + hardware wallet | Safety deposit box |

---

## 8. Trust Structures Explained
| Type | Control | Tax | Use Case |
|------|---------|-----|----------|
| **Revocable Living** | High | Grantor taxed | Flexibility |
| **Irrevocable** | Low | Trust taxed | Asset protection |
| **Testamentary** | From death | Trust taxed | Minor kids |
| **Special Needs** | Trustee | Trust taxed | Disabled heirs |
| **Charitable** | Public | CSR & legacy |

---

## 9. Funding the Trust
| Asset | Mode | Note |
|-------|------|------|
| **Cash** | Cheque/RTGS | Immediate |
| **Shares** | Off-market transfer | Gift deed |
| **Property** | Gift deed + stamp duty | 2-7 % state-wise |
| **Crypto** | Seed phrase in trust deed | Emerging |

---

## 10. Digital Assets & Crypto Succession
| Challenge | Solution |
|-----------|----------|
| **Private keys lost** | Hardware wallet + seed phrase in bank locker |
| **Exchange death protocol** | Nominee form + legal heir certificate |
| **Regulatory clarity** | Treat as capital asset, disclose in ITR |

---

## 11. Annual Review Ritual
| Event | Action |
|-------|--------|
| **Birth of child** | Add nominee + update will |
| **Asset sale** | Remove from schedule |
| **New ESOP lot** | Update schedule |
| **Marriage** | Add spouse as contingent beneficiary |

---

## 12. Key Takeaways
- **Start with a simple will**; layer trusts as complexity grows.  
- **Trusts protect minors and cap taxes**.  
- **Update every 3-5 years or life event**.  
- **Store safely**—digital + physical copies.

---

## 13. Ready to Build Your Legacy Blueprint?
🔗 [**Book Estate Planning Consultation**](https://www.moznoadvisory.com/estate-call)  
📥 [**Download Estate-Asset Register**](https://www.moznoadvisory.com/estate-register)

*Mozno Advisory works with empanelled lawyers and chartered accountants. Legal advice may vary by jurisdiction.*
`;

const EstatePlanningPage: NextPage = () => (
  <article className="prose prose-sm sm:prose lg:prose-lg max-w-none p-6">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
  </article>
);

export default EstatePlanningPage;