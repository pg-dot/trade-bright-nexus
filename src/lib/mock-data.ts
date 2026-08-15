export interface Listing {
  id: string;
  title: string;
  category: string;
  hsCode: string;
  price: number;
  unit: string;
  moq: string;
  quantityAvailable: string;
  origin: string;
  exporter: string;
  rating: number;
  trustScore: number;
  certifications: string[];
  verified: boolean;
  thumbnail: string;
  specs: { label: string; value: string }[];
  description: string;
}

export const listings: Listing[] = [
  {
    id: "LST-1042",
    title: "Alleppey Green Cardamom — 8mm Bold",
    category: "Spices",
    hsCode: "0908.31",
    price: 21.4,
    unit: "kg",
    moq: "500 kg",
    quantityAvailable: "18 MT",
    origin: "Kerala, India",
    exporter: "Deccan Spice Exports",
    rating: 4.8,
    trustScore: 87,
    certifications: ["ISO 22000", "Organic (NPOP)", "Spices Board"],
    verified: true,
    thumbnail: "🌿",
    specs: [
      { label: "Moisture", value: "≤ 10%" },
      { label: "Colour", value: "Deep green" },
      { label: "Packing", value: "10 kg vacuum cartons" },
    ],
    description:
      "Hand-graded bold cardamom capsules, steam sterilised, suitable for EU retail packing.",
  },
  {
    id: "LST-1088",
    title: "Cotton Yarn 30s Combed Compact",
    category: "Textiles",
    hsCode: "5205.24",
    price: 3.15,
    unit: "kg",
    moq: "5 MT",
    quantityAvailable: "120 MT",
    origin: "Tamil Nadu, India",
    exporter: "Kaveri Mills Ltd",
    rating: 4.5,
    trustScore: 74,
    certifications: ["OEKO-TEX", "ISO 9001"],
    verified: true,
    thumbnail: "🧵",
    specs: [
      { label: "Count", value: "30s" },
      { label: "Uster", value: "Within 25%" },
      { label: "Packing", value: "Pallet, 1.85 kg cones" },
    ],
    description: "Compact combed yarn for knitting, consistent evenness across lots.",
  },
  {
    id: "LST-1155",
    title: "Basmati Rice 1121 Steam — Sella",
    category: "Agriculture",
    hsCode: "1006.30",
    price: 1.08,
    unit: "kg",
    moq: "25 MT",
    quantityAvailable: "600 MT",
    origin: "Haryana, India",
    exporter: "Indus Agro Trading",
    rating: 4.1,
    trustScore: 58,
    certifications: ["APEDA", "HACCP"],
    verified: false,
    thumbnail: "🌾",
    specs: [
      { label: "Avg grain", value: "8.35 mm" },
      { label: "Broken", value: "≤ 1%" },
      { label: "Packing", value: "25 kg PP bags" },
    ],
    description: "Aged 12 months, suitable for Gulf and EU markets, fumigation on request.",
  },
];

export interface TradeRecord {
  id: string;
  counterparty: string;
  product: string;
  value: string;
  date: string;
  status: "Successful" | "Disputed" | "In Escrow";
  txHash: string;
}

export const tradeLedger: TradeRecord[] = [
  {
    id: "TRD-9021",
    counterparty: "Nordic Foods AB",
    product: "Green Cardamom",
    value: "$42,800",
    date: "2026-05-12",
    status: "Successful",
    txHash: "0x8fa2…41c9",
  },
  {
    id: "TRD-9044",
    counterparty: "Levant Trading LLC",
    product: "Turmeric Fingers",
    value: "$18,200",
    date: "2026-06-02",
    status: "Disputed",
    txHash: "0x1bd7…90ae",
  },
  {
    id: "TRD-9077",
    counterparty: "Casa Verde SL",
    product: "Black Pepper TGSEB",
    value: "$61,500",
    date: "2026-07-19",
    status: "In Escrow",
    txHash: "0x77e0…2b13",
  },
];

export const aiMatches = [
  {
    listingId: "LST-1042",
    title: "Alleppey Green Cardamom — 8mm Bold",
    exporter: "Deccan Spice Exports",
    overall: 94,
    breakdown: [
      { label: "Spec similarity", value: 96 },
      { label: "Certification fit", value: 92 },
      { label: "Trust score", value: 87 },
      { label: "Route feasibility", value: 90 },
    ],
    rationale: "Matches 8mm bold grade and EU organic requirement; exporter ships to Rotterdam weekly.",
  },
  {
    listingId: "LST-1155",
    title: "Basmati Rice 1121 Steam — Sella",
    exporter: "Indus Agro Trading",
    overall: 71,
    breakdown: [
      { label: "Spec similarity", value: 82 },
      { label: "Certification fit", value: 65 },
      { label: "Trust score", value: 58 },
      { label: "Route feasibility", value: 78 },
    ],
    rationale: "Spec fit is good but KYC is pending and one dispute is open in the last 6 months.",
  },
];

export const disputes = [
  {
    id: "DSP-311",
    listing: "Turmeric Fingers 5% Curcumin",
    filedBy: "Levant Trading LLC",
    against: "Indus Agro Trading",
    reason: "Quality below contracted curcumin content",
    stage: 2,
    value: "$18,200",
    opened: "2026-06-09",
  },
  {
    id: "DSP-318",
    listing: "Cotton Yarn 30s",
    filedBy: "Aegean Knits",
    against: "Kaveri Mills Ltd",
    reason: "Short shipment — 1.2 MT missing",
    stage: 3,
    value: "$9,450",
    opened: "2026-07-01",
  },
];

export const kycQueue = [
  {
    id: "KYC-771",
    business: "Sahyadri Cashew Co.",
    gst: "27AABCS1429P1ZL",
    submitted: "2026-08-11",
    role: "Exporter",
    docs: 4,
  },
  {
    id: "KYC-772",
    business: "Baltic Import Group",
    gst: "—",
    submitted: "2026-08-12",
    role: "Buyer",
    docs: 3,
  },
];
