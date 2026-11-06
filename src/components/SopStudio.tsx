import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Sparkles, FileText, ShieldCheck, AlertTriangle, Check } from "lucide-react";
import type { CountryData } from "../data/countries";
import { generateSop, calculateUniqueness, TEMPLATE_SOP, type SopAnswers } from "../lib/sopGenerator";

interface SopStudioProps {
  country: CountryData;
  onBack: () => void;
  onComplete: (sopDocId: string) => void;
}

const QUESTIONS: { key: keyof SopAnswers; label: string; placeholder: string; hint: string }[] = [
  {
    key: "city",
    label: "Your city or village name",
    placeholder: "e.g. Sialkot, Khairpur, Mardan...",
    hint: "Be specific. 'Lahore' is fine, but 'Mohanpura, Rawalpindi' is better. Specificity defeats plagiarism.",
  },
  {
    key: "incident",
    label: "One childhood incident that made you love this field",
    placeholder: "e.g. When I was 10, my uncle's shop burned down because of faulty wiring. That night I decided to study electrical engineering...",
    hint: "Tell a real story, not a 'passion' statement. Stories are unique. 'I am passionate about...' is not.",
  },
  {
    key: "field",
    label: "Your exact field of study",
    placeholder: "e.g. Mechanical Engineering, Data Science, Public Health...",
    hint: "Name the program precisely as it appears on the university website.",
  },
  {
    key: "whyCountry",
    label: "Why THIS country and not the USA?",
    placeholder: `e.g. I chose ${"Germany"} because public universities charge no tuition, and I cannot ask my father to take a loan for a US degree that costs $50,000...`,
    hint: "Every reviewer asks this. Your answer must be financial, academic, and personal — never generic.",
  },
  {
    key: "returnPlan",
    label: "What exactly will you do after returning to Pakistan?",
    placeholder: "e.g. I will join NUST's energy research lab as a research associate, and start a solar microgrid pilot in my village...",
    hint: "Be specific about the employer, sector, or project. 'I will contribute to my country's development' = instant rejection.",
  },
];

export default function SopStudio({ country, onBack, onComplete }: SopStudioProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [answers, setAnswers] = useState<SopAnswers>({ city: "", incident: "", field: "", whyCountry: "", returnPlan: "" });
  const [generated, setGenerated] = useState("");
  const [uniqueness, setUniqueness] = useState(0);

  const allFilled = Object.values(answers).every((v) => v.trim().length >= 5);

  const handleGenerate = () => {
    const sop = generateSop(answers, country.code, country.name);
    setGenerated(sop);
    setUniqueness(calculateUniqueness(answers));
    setStep(3);
  };

  return (
    <div className="sop-studio">
      <header className="sop-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} /> Back to dashboard
        </button>
        <div className="sop-title-block">
          <Sparkles size={20} />
          <h2>Anti-Template SOP Studio</h2>
        </div>
      </header>

      <div className="sop-stepper">
        <StepDot n={1} label="Discovery" active={step === 1} done={step > 1} />
        <StepLine done={step > 1} />
        <StepDot n={2} label="Generate" active={step === 2} done={step > 2} />
        <StepLine done={step > 2} />
        <StepDot n={3} label="Plagiarism Proof" active={step === 3} done={false} />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            className="sop-step"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="sop-intro">
              <h3>Step 1 — Deep Personal Discovery</h3>
              <p>Answer 5 questions. No templates, no "passion since childhood" nonsense. Your real story becomes your SOP.</p>
            </div>
            <div className="sop-form">
              {QUESTIONS.map((q) => (
                <div key={q.key} className="form-field">
                  <label>{q.label}</label>
                  <textarea
                    value={answers[q.key]}
                    onChange={(e) => setAnswers({ ...answers, [q.key]: e.target.value })}
                    placeholder={q.placeholder}
                    rows={q.key === "incident" || q.key === "whyCountry" || q.key === "returnPlan" ? 4 : 2}
                  />
                  <span className="field-hint">{q.hint}</span>
                </div>
              ))}
            </div>
            <div className="sop-actions">
              <button className="btn-primary" disabled={!allFilled} onClick={() => setStep(2)}>
                {allFilled ? "Continue to generation" : "Answer all 5 questions to continue"}
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            className="sop-step"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="sop-intro">
              <h3>Step 2 — Generate your story-based SOP</h3>
              <p>Bara Bhai's engine reads your answers and writes a 100% unique, story-driven letter for {country.name}. No templates involved.</p>
            </div>
            <div className="gen-preview">
              <div className="gen-answers">
                <h4>Your inputs</h4>
                {QUESTIONS.map((q) => (
                  <div key={q.key} className="gen-answer-row">
                    <span className="gen-q">{q.label}</span>
                    <span className="gen-a">{answers[q.key]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sop-actions">
              <button className="btn-ghost" onClick={() => setStep(1)}>Edit answers</button>
              <button className="btn-primary" onClick={handleGenerate}>
                <Sparkles size={16} /> Generate my SOP
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            className="sop-step"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="sop-intro">
              <h3>Step 3 — Plagiarism Proof</h3>
              <p>The winning moment. Compare an agent's copy-paste template against your VisaBuddy SOP.</p>
            </div>

            <div className="plagiarism-compare">
              <div className="plag-card bad">
                <div className="plag-head">
                  <FileText size={18} />
                  <span>Agent Template SOP</span>
                </div>
                <div className="plag-meter">
                  <div className="meter-label">
                    <span>Uniqueness</span>
                    <strong className="danger">23%</strong>
                  </div>
                  <div className="meter-bar">
                    <motion.div className="meter-fill danger" initial={{ width: 0 }} animate={{ width: "23%" }} transition={{ duration: 0.8 }} />
                  </div>
                  <span className="meter-verdict danger">HIGH RISK OF REJECTION</span>
                </div>
                <div className="plag-text">
                  <p className="plag-snippet">{TEMPLATE_SOP.slice(0, 280)}...</p>
                </div>
              </div>

              <div className="plag-card good">
                <div className="plag-head">
                  <ShieldCheck size={18} />
                  <span>Your VisaBuddy SOP</span>
                </div>
                <div className="plag-meter">
                  <div className="meter-label">
                    <span>Uniqueness</span>
                    <motion.strong
                      className="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {uniqueness}%
                    </motion.strong>
                  </div>
                  <div className="meter-bar">
                    <motion.div
                      className="meter-fill success"
                      initial={{ width: 0 }}
                      animate={{ width: `${uniqueness}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                  <span className="meter-verdict success">EMBASSY SAFE</span>
                </div>
                <div className="plag-text">
                  <p className="plag-snippet">{generated.slice(0, 280)}...</p>
                </div>
              </div>
            </div>

            <div className="sop-full">
              <h4>Full SOP — {country.name}</h4>
              <div className="sop-full-text">
                {generated.split("\n\n").map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <div className="sop-actions">
              <button className="btn-ghost" onClick={() => setStep(1)}>Start over</button>
              <button
                className="btn-primary"
                onClick={() => {
                  onComplete(`${country.code}-sop`);
                  onBack();
                }}
              >
                <Check size={16} /> Mark SOP complete
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StepDot({ n, label, active, done }: { n: number; label: string; active: boolean; done: boolean }) {
  return (
    <div className={`step-dot ${active ? "active" : ""} ${done ? "done" : ""}`}>
      <span className="dot-num">{done ? <Check size={14} /> : n}</span>
      <span className="dot-label">{label}</span>
    </div>
  );
}

function StepLine({ done }: { done: boolean }) {
  return <div className={`step-line ${done ? "done" : ""}`} />;
}
