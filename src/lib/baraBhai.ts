import type { CountryCode, CountryData } from "../data/countries";

interface Knowledge {
  keywords: string[];
  reply: (c: CountryData) => string;
}

const COUNTRY_KNOWLEDGE: Record<CountryCode, Knowledge[]> = {
  uk: [
    {
      keywords: ["bank", "statement", "28", "din", "days"],
      reply: () =>
        "Dekh bhai, tension nahi leni. UK me bank statement 28 din ka hona lazmi hai — 27 din ka hua to seedha reject. Paise 28 consecutive days account me rehne chahiye, aur 28th din ke baad 31 din ke andar apply karna. Yeh rule embassy kabhi bend nahi karti.",
    },
    {
      keywords: ["ielts", "english", "band"],
      reply: () =>
        "IELTS 6.0 overall chahiye, koi band 5.5 se niche nahi hona chahiye. Acha uni maang raha hai 6.5, to phir target 6.5 rakh. Ek baar try kar le, nahi hua to dobara — koi sharam nahi bhai, sab pehli baar me clear nahi karte.",
    },
    {
      keywords: ["cas", "letter", "university"],
      reply: () =>
        "CAS (Confirmation of Acceptance for Studies) uni tab deta hai jab tu deposit submit kar de. Bina CAS ke visa apply nahi hota. Course name, start date, aur fee sab CAS pe likha hota — 3 baar check kar le uspe.",
    },
    {
      keywords: ["ihs", "health", "medical"],
      reply: () =>
        "IHS fee £776 per year hai — yeh UK ka national health service hai. Online pay karna hai visa apply karne se pehle. TB test alag hai, IHS alag. Dono karna padega bhai.",
    },
    {
      keywords: ["tb", "test", "certificate"],
      reply: () =>
        "TB test Islamabad, Lahore ya Karachi ke approved clinic se karna hai — yeh list UK gov ki site pe hai. Certificate 6 months valid hota hai. Cost ~PKR 6,500. Koi random clinic nahi, approved wala hi chahiye.",
    },
  ],
  germany: [
    {
      keywords: ["block", "account", "blocked", "11", "fintiba", "expatrio"],
      reply: () =>
        "Bhai block account ka scene simple hai — €11,208 lock karne padenge ek saal ke liye. Fintiba ya Expatrio sab se easy hai, online open hota hai 2 hafte me. Germany pohnch ke yeh paise monthly release hote hain ~€934/month. Yeh tera living proof hai visa ke liye.",
    },
    {
      keywords: ["aps", "certificate", "degree"],
      reply: () =>
        "APS certificate Pakistani degree ko verify karta hai — bina iske Germany visa nahi milega. 6 hafte lagta hai, to pehle apply kar. Islamabad me APS office hai. Documents attest karwane padenge. Yeh sab se important step hai bhai, skip mat karna.",
    },
    {
      keywords: ["tuition", "fee", "free", "public"],
      reply: () =>
        "Dil khush kar de bhai — Germany ke public universities me tuition fee ZERO hai. Sirf semester contribution ~€300 semester fee hoti hai. Yeh waja hai ke German students sab se zyada yahan aate hain. Blocked account hi tera asal cost hai.",
    },
    {
      keywords: ["tb", "test", "medical"],
      reply: () =>
        "Germany ke liye TB test ki zarurat nahi bhai. Yeh paise mat udao. TB test UK ka rule hai, Germany ka nahi. Confuse mat ho.",
    },
    {
      keywords: ["insurance", "health", "tk", "aok"],
      reply: () =>
        "Germany me public health insurance mandatory hai enrollment se pehle — TK ya AOK sab se common, ~€120/month. Private insurance students ke liye mushkil hoti hai, public hi rakh. Yeh tera residence permit ke liye bhi chahiye.",
    },
  ],
  australia: [
    {
      keywords: ["gte", "gs", "genuine", "temporary", "return"],
      reply: () =>
        "Bhai GTE (Genuine Temporary Entrant) sab se sensitive cheez hai. Yahan 99% log fail hote hain kyunki likhte hain 'I want to settle in Australia' — bhai yeh likhega to seedha reject. Likhna ke 'I will return to Pakistan to work in [field] because [specific reason]'. Strong return intent dikhana, family, job prospects, sab.",
    },
    {
      keywords: ["coe", "enrolment", "offer"],
      reply: () =>
        "CoE (Confirmation of Enrolment) uni tab deta hai jab tuition deposit pay ho jaye. Offer letter alag hai, CoE alag. Bina CoE ke visa apply nahi hota. Deposit ka receipt bhi rakh le.",
    },
    {
      keywords: ["work", "hours", "job", "part"],
      reply: () =>
        "Australia me student visa pe 48 hours/fortnight kaam kar sakte hain — yeh 24 hours/week hota hai basically. Minimum wage A$23+ hai, to part time se living kaafi cover ho jati hai. Par pehle 6 mahine focus study pe rakh bhai.",
    },
    {
      keywords: ["funds", "financial", "money", "bank"],
      reply: () =>
        "Financial capacity proof chahiye — A$29,710 living + tuition + travel. Bank statement 3 months ka, ya education loan bhi accept hota hai. Sponsor agar hai to uski income proof + affidavit. Genuine funds dikhana, fake se pakra jaye to 3 saal ban.",
    },
    {
      keywords: ["oshc", "health", "insurance", "bupa"],
      reply: () =>
        "OSHC (Overseas Student Health Cover) mandatory hai — Bupa ya Medibank se le, ~A$600/year. Visa apply karne se pehle activate hona chahiye. Yeh cover karta hai doctor visits, hospital, emergency. Mental health bhi cover hota hai bhai.",
    },
  ],
  turkey: [
    {
      keywords: ["photo", "biometric", "size", "picture"],
      reply: () =>
        "Bhai yeh sab se common mistake hai — Turkey ke liye photo 5x6cm chahiye, normal passport size nahi. 6 photos chahiye white background ke. Studio ko bolo 'Turkey visa format' wo samajh jayenge. PKR 500 me ho jayega.",
    },
    {
      keywords: ["yos", "exam", "university", "apply"],
      reply: () =>
        "Public universities ke liye YÖS exam hota hai (Foreign Student Exam). Private uni me direct admission mil jata hai. YÖS me IQ + math hota hai, English/Turkish. Deadline March-April hoti hai, to January se prepare karna shuru kar.",
    },
    {
      keywords: ["residence", "permit", "ikamet", "stay"],
      reply: () =>
        "Turkey pohnchne ke baad 1 month ke andar residence permit (İkamet) apply karna lazmi hai. Nahi to fine + future visa problems. Göç İdaresi me jaana padta hai. Student residence permit 1 ya 2 saal ka milta hai.",
    },
    {
      keywords: ["funds", "bank", "money", "statement"],
      reply: () =>
        "Turkey ke liye bank statement 3 months ka chahiye ~$6,000 balance ke sath. Blocked account ki zarurat nahi (Germany jaisa). Sponsor ka account bhi chal jata hai affidavit ke sath. Genuine funds rakhna bhai.",
    },
    {
      keywords: ["language", "turkish", "english", "course"],
      reply: () =>
        "English-taught programs limited hain Turkey me — majority Turkish me hain. Agar Turkish program hai to 1 saal language prep (TÖMER) karna padega. English program chahiye to pehle search kar, options kam hain par hain.",
    },
  ],
  italy: [
    {
      keywords: ["dov", "declaration", "value", "embassy", "degree"],
      reply: () =>
        "Bhai DOV (Declaration of Value) sab se lamba step hai — 6 hafte se zyada bhi lag sakta hai. Italian embassy Islamabad teri Pakistani degree ko verify kar ke DOV issue karta hai. Pre-enrollment ke turant baad apply kar, warna deadline miss ho jayegi. Documents attestation bhi sath me karwa le.",
    },
    {
      keywords: ["scholarship", "dsu", "regional", "income"],
      reply: () =>
        "DSU regional scholarship golden opportunity hai bhai — income-based, south Italy me max coverage. Tuition + hostel + stipend mil jata hai. ISEE certificate chahiye (family income proof). Apply karne ka deadline May-June, university site se. North (Milan) me competition zyada, south (Naples, Bari) me aasani se milta.",
    },
    {
      keywords: ["pre", "enroll", "universitaly", "platform"],
      reply: () =>
        "Pre-enrollment Universitaly platform pe hoti hai — 1 university + 1 program choose karna padta hai. April-May me khulta hai. Yeh step mandatory hai, uske baad hi embassy me appointment milti hai. Early apply kar, slots limited hote hain.",
    },
    {
      keywords: ["funds", "bank", "money", "financial"],
      reply: () =>
        "Financial guarantee ~€5,000 chahiye visa ke liye. Bank statement ya sponsor ka account, dono chal jate hain. Italy me living south me sasta hai (€500-600/month), north me mehnga (€800+). Budget banate waqt city consider kar bhai.",
    },
    {
      keywords: ["language", "italian", "english", "course"],
      reply: () =>
        "English-taught master's Italy me kaafi hain, bachelor kam. Italian language nahi aati to English program hi choose kar. Par daily life ke liye basic Italian seekh le — locals English bohot kam bolte hain, specially south me.",
    },
  ],
};

const GENERIC_FALLBACKS: string[] = [
  "Bhai sawaal thoda clear kar — kis baare me pucch raha hai? Docs, budget, timeline, ya visa process? Main tera selected country ke checklist se guide karunga.",
  "Samajh nahi aaya bhai. Bata kya mushkil hai — bank statement, SOP, ya koi aur document? Main specific advice dunga teray country ke liye.",
  "Thoda aur detail de bhai. Yeh app tera OS hai — har country ka apna rule hai. Bata tera target country kya hai aur kya confuse hai.",
];

const GREETINGS: string[] = [
  "Salam bhai! Main Bara Bhai hoon. Germany me padha hoon, ab tujhe guide karunga. Sawaal puch — koi tension nahi.",
  "Aoa bhai! VisaBuddy pe khush aamdeed. Main yahan hoon tera sath. Country select kar aur puch jo bhi confuse hai.",
  "Yo bhai! Ready hai journey ke liye? Main Bara Bhai — tera elder brother abroad. Koi bhi sawaal, seedha puch.",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function baraBhaiGreeting(): string {
  return pickRandom(GREETINGS);
}

export function baraBhaiReply(userText: string, country: CountryData): string {
  const text = userText.toLowerCase();
  const knowledge = COUNTRY_KNOWLEDGE[country.code] || [];

  let best: Knowledge | null = null;
  let bestScore = 0;

  for (const k of knowledge) {
    const score = k.keywords.reduce((acc, kw) => (text.includes(kw) ? acc + 1 : acc), 0);
    if (score > bestScore) {
      bestScore = score;
      best = k;
    }
  }

  if (best && bestScore > 0) {
    return best.reply(country);
  }

  // Detect country-agnostic questions
  if (text.includes("sop") || text.includes("statement of purpose") || text.includes("motivation")) {
    return `Bhai SOP ka scene clear kar — agent ka template mat use karna, 70% rejections isi waja se hote hain. ${country.name} ke liye SOP Studio me ja, 5 personal sawaalon ke jawab de, AI tera 100% unique story-based SOP banayega. Tera 'Since my childhood' wala opening nahi hoga — tera apna story hoga.`;
  }
  if (text.includes("budget") || text.includes("cost") || text.includes("kitna") || text.includes("paise")) {
    return `${country.name} ka total budget ${country.budget.currency}${country.budget.amount.toLocaleString()} hai. Breakdown dekh le dashboard pe. Yeh asli number hai, agent wala inflated nahi.`;
  }
  if (text.includes("mistake") || text.includes("galti") || text.includes("reject")) {
    return `Bhai ${country.name} me common mistakes: ${country.commonMistakes[0]} Aur 2 aur hain dashboard pe "Common Mistakes" section me — sab parh le, yeh wahi hain jis pe log gir jate hain.`;
  }
  if (text.includes("visa") && (text.includes("ratio") || text.includes("chance") || text.includes("success"))) {
    return `${country.name} ka visa approval ratio ${country.visaRatio}% hai — yeh asli stat hai. Agar tera checklist 100% complete + SOP unique ho, to tera chance bohot strong hai bhai. Tension nahi.`;
  }
  if (text.includes("time") || text.includes("long") || text.includes("kitna time") || text.includes("timeline")) {
    const total = country.timeline.reduce((a, t) => a + t.weeks, 0);
    return `${country.name} ka total process ~${total} hafte lagta hai. Dashboard pe timeline dekh — har phase ka time likha hai. Early start kar, deadline se 2 mahine pehle ready ho.`;
  }

  return pickRandom(GENERIC_FALLBACKS);
}
