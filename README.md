# Trade Connect Hub

# Project Context

I'm building **GLOBEX** — a unified digital trade platform for Smart India Hackathon 2025, 

connecting exporters with buyers/importers. The core idea: exporters list products 

(specs, quantity, quality, certifications, price), and buyers discover the best-matching 

exporters through AI-ranked semantic search — not just keyword search.

Beyond discovery, the platform tracks the full transaction lifecycle: escrow-backed 

payments, document verification, trust/risk scoring, dispute resolution (with a human 

arbitrator, not fully automated), and a blockchain-anchored audit trail for tamper-evident 

records. The core security principle: the blockchain stores evidence (verified facts only), 

while a separate AI layer interprets that evidence into an updatable trust score.

This prompt covers **Mechanism A: Listing Marketplace** only (not the fixed-price bidding 

mechanism, which is a separate module).

# Tech Stack

- Frontend: **React.js** (not Next.js — this is a logged-in, role-based dashboard app, 

  not a public SEO-facing site)

- Styling: Tailwind CSS

- State management: your choice (Context API or Zustand is fine for this scale)

- Backend (for reference, not building yet): FastAPI + PostgreSQL + pgvector

# Task

Scaffold a React project with the following component structure. Organize components 

into folders by domain (auth, listings, transactions, trust, disputes, regulatory, 

admin, shared/reusable). Use functional components with hooks. Each component should 

be a placeholder with props defined and basic JSX structure — I'll wire up the actual 

logic/API calls after scaffolding.

## 1. Auth & Onboarding

- **SignupForm** — email/phone + password or OTP-based registration

- **LoginForm** — standard login

- **RoleSelector** — choose "Exporter" or "Buyer/Importer"

- **KYCForm** — GST number, PAN, business address, document upload

- **VerificationStatusTracker** — shows "Under Review / Verified / Rejected"

## 2. Listing Marketplace (Discovery)

- **CreateListingForm** — exporter enters product specs, quantity, price, certifications, photo upload

- **ListingBrowsePage** — grid/list view of all listings for buyers to search

- **ListingFilterSidebar** — filters by category, price range, certification, location

- **ListingCard** — reusable card showing product thumbnail, price, exporter name, rating

- **ListingDetailPage** — full detail view of a single listing, link to exporter profile

- **ListingComparisonView** — side-by-side comparison of 2-3 selected listings

- **AIMatchResultsPanel** — shows AI-ranked top matches for a buyer's search query, with score breakdown

## 3. Transaction Layer

- **DocumentUploader** — upload invoice, packing list, inspection certificate

- **DocumentMismatchAlert** — warning banner if OCR detects inconsistency between documents

- **EscrowStatusTracker** — stepper/progress bar: Payment Held → Delivered → Released

- **ShipmentTracker** — timeline view of shipment route/status

- **PaymentMethodSelector** — choose Fiat (Razorpay) or Crypto (future phase)

## 4. Trust & Risk

- **ExporterPublicProfile** — verification badges, trade history stats, Trust Score

- **TrustScoreGauge** — visual ring/meter widget (0-100)

- **TradeRiskCompositeCard** — shows 4 sub-scores: Counterparty Trust, Transaction Risk, Regulatory Risk, Document Integrity

- **RiskWarningBanner** — red alert: "Transaction Risk High — Extra Verification Required"

- **PublicTradeLedgerTable** — list of past transactions with status (✓ Successful / ⚠ Disputed), blockchain-linked

## 5. Dispute Engine

- **FileDisputeForm** — buyer/exporter submits complaint + evidence

- **EvidenceUploader** — photos, documents, inspection reports

- **DisputeStatusTracker** — stepper: Filed → Under Inspection → AI Analysis → Arbitrator Review → Settled

- **ArbitratorDashboard** — human arbitrator view: evidence + AI recommendation + final decision input

## 6. Regulatory Intelligence

- **ComplianceChecklistWidget** — shows required documents/licenses for a product+route

- **RegulatoryRiskIndicator** — warning if country/product has restrictions

## 7. Notifications

- **NotificationDropdown** — alerts for matches, escrow updates, dispute changes

## 8. Admin Panel

- **UserVerificationQueue** — approve/reject KYC submissions

- **DisputeOversightDashboard** — monitor all active disputes

- **PlatformAnalyticsDashboard** — charts for transactions, GMV, active users

## 9. Reusable UI Components

- **Navbar** — role-based menu

- **Sidebar** — navigation

- **DataTable** — sortable/filterable, reused across listings/transactions

- **Modal** — confirmations, quick-view

- **Badge** — verification checkmarks, status labels

- **ScoreGaugeWidget** — reused for Trust Score / Risk Score

- **Stepper/Timeline** — reused for transaction flow, dispute flow

- **FileUploader** — reused for documents, certificates, images

- **SearchBarWithFilters**

- **ToastNotification**

# Instructions

1. Set up the folder structure under `src/components/` organized by the domains above

2. Set up `src/pages/` for the top-level routed pages (Login, Dashboard, ListingBrowse, etc.)

3. Add React Router for navigation between role-based dashboards (Exporter vs Buyer vs Admin)

4. Keep components presentational/placeholder for now — no backend yet keep it hardcoded

5. Use Tailwind for styling, keep it clean and minimal

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fb39a2c5-68aa-4e77-9d22-aa12f0f197db).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
