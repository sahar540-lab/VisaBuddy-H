export interface SopAnswers {
  city: string;
  incident: string;
  whyCountry: string;
  field: string;
  returnPlan: string;
}

const COUNTRY_CONTEXT: Record<string, { name: string; hook: string }> = {
  uk: { name: "the United Kingdom", hook: "a country whose one-year Master's structure lets me return to Pakistan faster with a globally respected degree" },
  germany: { name: "Germany", hook: "a country where public education is tuition-free and engineering is treated as a craft, not a commodity" },
  australia: { name: "Australia", hook: "a country whose 48-hour work-right lets me fund my living costs while studying at a Group of Eight institution" },
  turkey: { name: "Turkey", hook: "a country whose cultural proximity to Pakistan and affordable public universities let me study without burdening my family" },
  italy: { name: "Italy", hook: "a country whose DSU income-based scholarship makes a European degree financially realistic for a student from my background" },
};

export function generateSop(answers: SopAnswers, countryCode: string, countryName: string): string {
  const ctx = COUNTRY_CONTEXT[countryCode] || { name: countryName, hook: countryName };
  const a = answers;

  return `I am writing this from ${a.city}, a place most application reviewers will never have heard of, but one that has shaped every decision that led me to this letter.

When I was nine, a ${a.incident.toLowerCase().includes(".") ? a.incident.toLowerCase() : a.incident.toLowerCase() + "."} That moment did not create my interest in ${a.field} — it only made visible something that had already been growing. I did not discover my field through a brochure. I discovered it by paying attention to the problems my own community could not solve.

I am choosing ${ctx.name} over the United States deliberately. The reason is not convenience; it is fit. ${ctx.hook.charAt(0).toUpperCase() + ctx.hook.slice(1)}. I have researched the curriculum, the faculty working in ${a.field}, and the way the program connects theory to application. This is not a backup option. This is my first choice, made after comparing three countries on cost, curriculum, and post-study reality.

The plan after graduation is not abstract. I will return to Pakistan and ${a.returnPlan.toLowerCase().replace(/\.$/, "")}. The skills I gain are not valuable to me unless I bring them back to ${a.city} and to the sector that needs them here. Studying abroad, for me, is not a one-way ticket. It is a tool to close a specific gap I have watched exist since I was old enough to notice it.

I am not applying because an agent told me to. I am applying because I have read the requirements, understood the commitment, and decided that this path is the one that lets me do the work I already know I want to do.`;
}

const TEMPLATE_SOP = `Since my childhood, I was always passionate about pursuing higher education abroad. I have always been a hardworking and dedicated student with a keen interest in this field. I believe that studying in your esteemed university will provide me with the necessary knowledge and skills to achieve my career goals.

I come from a very supportive family that has always encouraged me to pursue my dreams. I have completed my previous education with good grades and I am confident that I will be able to excel in my studies at your institution. I am impressed by the reputation of your university and the quality of education it provides.

After completing my studies, I plan to return to my home country and contribute to its development. I believe that the knowledge and experience I will gain from studying at your university will help me achieve my career aspirations. I am confident that I will be a valuable addition to your student community.

I kindly request you to consider my application favorably. Thank you for your time and consideration.`;

export { TEMPLATE_SOP };

// Simulated uniqueness score — based on answer length & specificity
export function calculateUniqueness(answers: SopAnswers): number {
  const totalChars = Object.values(answers).reduce((sum, v) => sum + v.trim().length, 0);
  const hasCity = answers.city.trim().length > 2;
  const hasSpecific = answers.incident.trim().length > 30 && answers.whyCountry.trim().length > 30;
  const base = 78;
  const lengthBonus = Math.min(15, Math.floor(totalChars / 60));
  const specificityBonus = hasCity && hasSpecific ? 4 : 0;
  return Math.min(98, base + lengthBonus + specificityBonus);
}
