import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Circle, Clock, Wallet, AlertTriangle, TrendingUp, FileText, ArrowLeft, PenLine } from "lucide-react";
import type { CountryData, CountryCode } from "../data/countries";
import { COUNTRIES } from "../data/countries";
import BaraBhai from "./BaraBhai";

interface DashboardProps {
  selectedCountry: CountryData;
  onSelectCountry: (c: CountryData) => void;
  onOpenSop: () => void;
  completedDocs: Set<string>;
  onToggleDoc: (id: string) => void;
  onBack: () => void;
}

export default function Dashboard({
  selectedCountry,
  onSelectCountry,
  onOpenSop,
  completedDocs,
  onToggleDoc,
  onBack,
}: DashboardProps) {
  const [tab, setTab] = useState<"checklist" | "budget" | "timeline" | "mistakes">("checklist");

  const progress = Math.round((selectedCountry.docs.filter((d) => completedDocs.has(d.id)).length / selectedCountry.docs.length) * 100);

  return (
    <div className="dashboard">
      {/* Top bar */}
      <header className="dash-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} /> Home
        </button>
        <div className="logo small">
          <span className="logo-mark">VB</span>
          <span className="logo-text">VisaBuddy</span>
        </div>
        <div className="dash-header-spacer" />
      </header>

      {/* Country selector */}
      <div className="country-selector">
        <h2>Select your destination</h2>
        <p className="selector-hint">The entire app logic changes per country. Try switching to see it adapt.</p>
        <div className="country-cards">
          {COUNTRIES.map((c) => (
            <motion.button
              key={c.code}
              className={`country-card ${selectedCountry.code === c.code ? "active" : ""}`}
              onClick={() => onSelectCountry(c)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={selectedCountry.code === c.code ? { borderColor: c.accent } : undefined}
            >
              <span className="flag">{c.flag}</span>
              <span className="name">{c.name}</span>
              <span className="ratio">{c.visaRatio}% visa approval</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Selected country hero */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCountry.code}
          className="country-hero"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="country-hero-left">
            <span className="big-flag">{selectedCountry.flag}</span>
            <div>
              <h1>{selectedCountry.name}</h1>
              <p>{selectedCountry.tagline}</p>
            </div>
          </div>
          <div className="country-hero-right">
            <div className="visa-ratio">
              <TrendingUp size={18} />
              <div>
                <strong>{selectedCountry.visaRatio}%</strong>
                <small>visa approval</small>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress */}
      <div className="progress-block">
        <div className="progress-top">
          <strong>Your mission progress</strong>
          <span className="progress-num">{progress}%</span>
        </div>
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <p className="progress-sub">
          {progress === 100 ? "MashaAllah bhai, fully ready! Bara Bhai proud hai." : `${selectedCountry.docs.length - completedDocs.size} of ${selectedCountry.docs.length} tasks remaining`}
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <TabBtn active={tab === "checklist"} onClick={() => setTab("checklist")} icon={<FileText size={16} />} label="Checklist" />
        <TabBtn active={tab === "budget"} onClick={() => setTab("budget")} icon={<Wallet size={16} />} label="Budget" />
        <TabBtn active={tab === "timeline"} onClick={() => setTab("timeline")} icon={<Clock size={16} />} label="Timeline" />
        <TabBtn active={tab === "mistakes"} onClick={() => setTab("mistakes")} icon={<AlertTriangle size={16} />} label="Mistakes" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab + selectedCountry.code}
          className="tab-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {tab === "checklist" && (
            <ChecklistTab country={selectedCountry} completedDocs={completedDocs} onToggleDoc={onToggleDoc} onOpenSop={onOpenSop} />
          )}
          {tab === "budget" && <BudgetTab country={selectedCountry} />}
          {tab === "timeline" && <TimelineTab country={selectedCountry} />}
          {tab === "mistakes" && <MistakesTab country={selectedCountry} />}
        </motion.div>
      </AnimatePresence>

      <BaraBhai country={selectedCountry} />
    </div>
  );
}

function TabBtn({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button className={`tab-btn ${active ? "active" : ""}`} onClick={onClick}>
      {icon} {label}
    </button>
  );
}

function ChecklistTab({
  country,
  completedDocs,
  onToggleDoc,
  onOpenSop,
}: {
  country: CountryData;
  completedDocs: Set<string>;
  onToggleDoc: (id: string) => void;
  onOpenSop: () => void;
}) {
  return (
    <div className="checklist">
      {country.docs.map((doc, i) => {
        const done = completedDocs.has(doc.id);
        const isSop = doc.id.endsWith("-sop");
        return (
          <motion.div
            key={doc.id}
            className={`doc-card ${done ? "done" : ""}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <button className="doc-check" onClick={() => !isSop && onToggleDoc(doc.id)} disabled={isSop}>
              {done ? <CheckCircle2 size={24} /> : <Circle size={24} />}
            </button>
            <div className="doc-body">
              <div className="doc-title-row">
                <h4>{doc.title}</h4>
                {doc.critical && <span className="critical-tag">Critical</span>}
              </div>
              <p className="doc-detail">{doc.detail}</p>
              <div className="doc-meta">
                <span><Clock size={13} /> ~{doc.estDays} days</span>
                <span><Wallet size={13} /> {doc.costCurrency}{doc.cost.toLocaleString()}</span>
              </div>
            </div>
            {isSop && (
              <button className="doc-action" onClick={onOpenSop}>
                <PenLine size={16} /> Open SOP Studio
              </button>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

function BudgetTab({ country }: { country: CountryData }) {
  return (
    <div className="budget-tab">
      <div className="budget-hero">
        <span className="budget-currency">{country.budget.currency}</span>
        <span className="budget-amount">{country.budget.amount.toLocaleString()}</span>
        <span className="budget-label">{country.budget.label}</span>
      </div>
      <div className="budget-breakdown">
        <h4>Breakdown</h4>
        {country.budget.breakdown.map((b) => (
          <div key={b.label} className="budget-row">
            <span>{b.label}</span>
            <strong>{country.budget.currency}{b.amount.toLocaleString()}</strong>
          </div>
        ))}
      </div>
      <div className="budget-note">
        <Wallet size={16} />
        <p>Real numbers, not agent-inflated figures. Budget varies by city — always confirm with your chosen university.</p>
      </div>
    </div>
  );
}

function TimelineTab({ country }: { country: CountryData }) {
  const total = country.timeline.reduce((a, t) => a + t.weeks, 0);
  return (
    <div className="timeline-tab">
      <div className="timeline-total">
        <Clock size={18} />
        <span>Total estimated time: <strong>{total} weeks</strong></span>
      </div>
      <div className="timeline-track">
        {country.timeline.map((phase, i) => {
          const pct = (phase.weeks / total) * 100;
          return (
            <motion.div
              key={phase.phase}
              className="timeline-phase"
              initial={{ opacity: 0, scaleY: 0.6 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: i * 0.1 }}
              style={{ flexGrow: pct }}
            >
              <div className="phase-bar" />
              <div className="phase-label">
                <strong>{phase.phase}</strong>
                <span>{phase.weeks} weeks</span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <p className="timeline-tip">Start 2 months before your earliest deadline. Bara Bhai tip: "Early start = zero panic."</p>
    </div>
  );
}

function MistakesTab({ country }: { country: CountryData }) {
  return (
    <div className="mistakes-tab">
      <div className="mistakes-banner">
        <AlertTriangle size={20} />
        <p>These are the exact mistakes that get Pakistani students rejected. Read all of them.</p>
      </div>
      {country.commonMistakes.map((m, i) => (
        <motion.div
          key={i}
          className="mistake-card"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
        >
          <span className="mistake-num">{i + 1}</span>
          <p>{m}</p>
        </motion.div>
      ))}
    </div>
  );
}
