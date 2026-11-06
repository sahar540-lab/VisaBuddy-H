export type CountryCode = "uk" | "germany" | "australia" | "turkey" | "italy";

export interface ChecklistDoc {
  id: string;
  title: string;
  detail: string;
  estDays: number;
  cost: number;
  costCurrency: string;
  critical?: boolean;
}

export interface CountryData {
  code: CountryCode;
  name: string;
  flag: string;
  tagline: string;
  budget: { amount: number; currency: string; label: string; breakdown: { label: string; amount: number }[] };
  timeline: { phase: string; weeks: number }[];
  docs: ChecklistDoc[];
  commonMistakes: string[];
  visaRatio: number;
  accent: string;
}

export const COUNTRIES: CountryData[] = [
  {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "Master's in 1 year. Global degree, fast track.",
    accent: "#c8102e",
    budget: {
      amount: 15000,
      currency: "£",
      label: "Total annual budget",
      breakdown: [
        { label: "Tuition (avg)", amount: 14000 },
        { label: "IHS Fee", amount: 776 },
        { label: "Visa + TB test", amount: 490 },
      ],
    },
    timeline: [
      { phase: "Shortlist + Apply", weeks: 4 },
      { phase: "Receive CAS", weeks: 3 },
      { phase: "Bank statement (28 days)", weeks: 4 },
      { phase: "Visa decision", weeks: 3 },
    ],
    docs: [
      { id: "uk-ielts", title: "IELTS 6.0+ (or accepted equiv.)", detail: "Overall 6.0, no band below 5.5. Some unis ask 6.5.", estDays: 30, cost: 52000, costCurrency: "PKR", critical: true },
      { id: "uk-cas", title: "CAS Letter from university", detail: "Confirmation of Acceptance for Studies. Issued after deposit.", estDays: 21, cost: 0, costCurrency: "£", critical: true },
      { id: "uk-tb", title: "TB Test Certificate", detail: "From an approved clinic in Islamabad/Lahore/Karachi. Valid 6 months.", estDays: 3, cost: 6500, costCurrency: "PKR", critical: true },
      { id: "uk-bank", title: "28-Day Bank Statement", detail: "Funds must be held for 28 consecutive days. Day 28 must be within 31 days of application.", estDays: 28, cost: 0, costCurrency: "£", critical: true },
      { id: "uk-ihs", title: "IHS Health Surcharge", detail: "£776/year paid online before visa appointment.", estDays: 1, cost: 776, costCurrency: "£" },
      { id: "uk-sop", title: "Statement of Purpose", detail: "Personal, story-based, anti-template. Built in SOP Studio.", estDays: 7, cost: 0, costCurrency: "£" },
    ],
    commonMistakes: [
      "Bank statement not held for full 28 days — 27 days = automatic refusal.",
      "Using an agent's copy-paste SOP — flagged as plagiarism.",
      "CAS letter shows wrong course start date.",
    ],
    visaRatio: 96,
  },
  {
    code: "germany",
    name: "Germany",
    flag: "🇩🇪",
    tagline: "Public universities = zero tuition. Blocked account is the only real cost.",
    accent: "#1a1a1a",
    budget: {
      amount: 11208,
      currency: "€",
      label: "Blocked account (living proof)",
      breakdown: [
        { label: "Blocked account (1 year)", amount: 11208 },
        { label: "APS certificate", amount: 18000 },
        { label: "Visa fee", amount: 75 },
      ],
    },
    timeline: [
      { phase: "APS certification", weeks: 6 },
      { phase: "University applications", weeks: 8 },
      { phase: "Open blocked account", weeks: 2 },
      { phase: "Visa appointment + decision", weeks: 6 },
    ],
    docs: [
      { id: "de-aps", title: "APS Certificate", detail: "Verifies your Pakistani degree. Mandatory. Takes ~6 weeks.", estDays: 42, cost: 18000, costCurrency: "PKR", critical: true },
      { id: "de-blocked", title: "Blocked Account (€11,208)", detail: "Fintiba / Expatrio / Deutsche Bank. Funds locked for 1 year, released monthly in Germany.", estDays: 14, cost: 11208, costCurrency: "€", critical: true },
      { id: "de-admission", title: "University Admission Letter", detail: "Public uni = no tuition. Letter confirms enrollment.", estDays: 0, cost: 0, costCurrency: "€", critical: true },
      { id: "de-insurance", title: "Health Insurance (public)", detail: "TK / AOK ~€120/month. Required before enrollment.", estDays: 5, cost: 120, costCurrency: "€" },
      { id: "de-sop", title: "Motivation Letter", detail: "Story-based, country-specific. Built in SOP Studio.", estDays: 7, cost: 0, costCurrency: "€" },
    ],
    commonMistakes: [
      "No TB test required for Germany — don't waste money on one.",
      "Forgetting APS — without it, application is auto-rejected.",
      "Blocked account opened too late, missing visa slot.",
    ],
    visaRatio: 92,
  },
  {
    code: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tagline: "Work 48 hours/fortnight while studying. PR pathway after graduation.",
    accent: "#00843d",
    budget: {
      amount: 35000,
      currency: "A$",
      label: "Total annual budget",
      breakdown: [
        { label: "Tuition (avg)", amount: 30000 },
        { label: "OSHC health cover", amount: 600 },
        { label: "Visa fee", amount: 1600 },
      ],
    },
    timeline: [
      { phase: "Get CoE from uni", weeks: 4 },
      { phase: "GTE statement + finances", weeks: 3 },
      { phase: "Lodge visa (online)", weeks: 2 },
      { phase: "Decision + biometrics", weeks: 4 },
    ],
    docs: [
      { id: "au-ielts", title: "IELTS 6.5+ overall", detail: "No band below 6.0. Nursing/IT may ask 7.0.", estDays: 30, cost: 52000, costCurrency: "PKR", critical: true },
      { id: "au-coe", title: "Confirmation of Enrolment (CoE)", detail: "Issued by university after tuition deposit.", estDays: 21, cost: 0, costCurrency: "A$", critical: true },
      { id: "au-gte", title: "GTE / GS Statement", detail: "Genuine Temporary Entrant — proves you'll return. Built in SOP Studio.", estDays: 7, cost: 0, costCurrency: "A$", critical: true },
      { id: "au-oshc", title: "OSHC Health Insurance", detail: "Overseas Student Health Cover. Bupa/Medibank. ~A$600/yr.", estDays: 2, cost: 600, costCurrency: "A$" },
      { id: "au-funds", title: "Financial Capacity Proof", detail: "A$29,710 living + tuition + travel. Bank statement or loan.", estDays: 10, cost: 0, costCurrency: "A$", critical: true },
    ],
    commonMistakes: [
      "Weak GTE — saying 'I want to settle in Australia' = instant refusal.",
      "Not showing genuine return-to-Pakistan intent.",
      "Underestimating living costs in Sydney/Melbourne.",
    ],
    visaRatio: 89,
  },
  {
    code: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    tagline: "Affordable, Muslim-friendly, close to home. No blocked account.",
    accent: "#e30a17",
    budget: {
      amount: 6000,
      currency: "USD",
      label: "Total annual budget",
      breakdown: [
        { label: "Tuition (public)", amount: 300 },
        { label: "Living (istanbul)", amount: 4000 },
        { label: "Visa + insurance", amount: 200 },
      ],
    },
    timeline: [
      { phase: "Apply via YÖS / direct", weeks: 4 },
      { phase: "Acceptance letter", weeks: 3 },
      { phase: "Student visa appointment", weeks: 3 },
      { phase: "Residence permit (in Turkey)", weeks: 4 },
    ],
    docs: [
      { id: "tr-letter", title: "Acceptance Letter", detail: "From Turkish university. Tuition deposit may be required.", estDays: 21, cost: 100, costCurrency: "USD", critical: true },
      { id: "tr-passport", title: "Valid Passport (6+ months)", detail: "Must be valid beyond your intended stay.", estDays: 15, cost: 3000, costCurrency: "PKR", critical: true },
      { id: "tr-funds", title: "Bank Statement (last 3 months)", detail: "Show ~$6,000 in account. No blocked account needed.", estDays: 5, cost: 0, costCurrency: "USD" },
      { id: "tr-photos", title: "Biometric Photos (6)", detail: "White background, 5x6cm Turkey format.", estDays: 1, cost: 500, costCurrency: "PKR" },
      { id: "tr-sop", title: "Letter of Intent", detail: "Short personal letter. Built in SOP Studio.", estDays: 4, cost: 0, costCurrency: "USD" },
    ],
    commonMistakes: [
      "Photos in wrong size — Turkey needs 5x6cm, not passport size.",
      "Forgetting residence permit after arrival — fines apply.",
      "Public uni YÖS exam missed — apply before deadline.",
    ],
    visaRatio: 85,
  },
  {
    code: "italy",
    name: "Italy",
    flag: "🇮🇹",
    tagline: "Scholarships for Pakistani students. Dolce Vita on a budget.",
    accent: "#0066cc",
    budget: {
      amount: 8000,
      currency: "€",
      label: "Total annual budget",
      breakdown: [
        { label: "Tuition (regional tax)", amount: 1000 },
        { label: "Living (south Italy)", amount: 6000 },
        { label: "Visa + DOV", amount: 200 },
      ],
    },
    timeline: [
      { phase: "Pre-enroll at embassy", weeks: 4 },
      { phase: "Universitaly platform", weeks: 3 },
      { phase: "DOV + funds proof", weeks: 3 },
      { phase: "Visa appointment", weeks: 4 },
    ],
    docs: [
      { id: "it-preenroll", title: "Pre-Enrollment (Universitaly)", detail: "Online platform. Choose 1 university + 1 program.", estDays: 14, cost: 0, costCurrency: "€", critical: true },
      { id: "it-dov", title: "DOV — Declaration of Value", detail: "Verifies your Pakistani degree via Italian embassy in Islamabad.", estDays: 45, cost: 100, costCurrency: "€", critical: true },
      { id: "it-funds", title: "Financial Guarantee (~€5,000)", detail: "Bank statement or sponsor. Required for visa.", estDays: 10, cost: 0, costCurrency: "€", critical: true },
      { id: "it-english", title: "English Proof (IELTS/TOEFL)", detail: "Most English-taught programs need IELTS 6.0+.", estDays: 30, cost: 52000, costCurrency: "PKR" },
      { id: "it-sop", title: "Motivation Letter", detail: "Italian universities love personal stories. Built in SOP Studio.", estDays: 7, cost: 0, costCurrency: "€" },
    ],
    commonMistakes: [
      "DOV takes 6+ weeks — start early or miss the deadline.",
      "Choosing only northern cities (expensive) — south is cheaper.",
      "Not applying for DSU regional scholarship (income-based).",
    ],
    visaRatio: 88,
  },
];
