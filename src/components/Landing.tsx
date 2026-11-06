import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Wallet, MessageCircle } from "lucide-react";

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="landing">
      {/* Nav */}
      <nav className="landing-nav">
        <div className="logo">
          <span className="logo-mark">VB</span>
          <span className="logo-text">VisaBuddy</span>
        </div>
        <button className="nav-cta" onClick={onStart}>
          Start Your Journey <ArrowRight size={16} />
        </button>
      </nav>

      {/* Hero */}
        <div className="hero">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} /> The Study Abroad Operating System
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Agents Charge
            <span className="strike">3 Lakhs?</span>
          </motion.h1>

          <motion.div
            className="hero-price"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="price-old">Rs. 300,000</span>
            <ArrowRight size={20} />
            <span className="price-new">Rs. 2,999</span>
            <span className="price-tag">one-time</span>
          </motion.div>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            One app. One checklist per country. No agents, no copy-paste SOPs, no contradictory YouTube confusion.
            Built for Pakistani students, by someone who actually went abroad.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button className="btn-primary btn-lg" onClick={onStart}>
              Start Your Journey <ArrowRight size={18} />
            </button>
            <span className="hero-trust">No login needed for this demo</span>
          </motion.div>
        </div>

      {/* Feature strip */}
      <div className="features-strip">
        <Feature
          icon={<MessageCircle size={22} />}
          title="Bara Bhai AI Copilot"
          text="Your Pakistani elder brother abroad. Answers in Roman Urdu, refers to your country's exact rules."
          delay={0}
        />
        <Feature
          icon={<ShieldCheck size={22} />}
          title="Anti-Template SOP"
          text="70% of rejections come from plagiarized agent SOPs. We generate 100% story-based, 97% unique letters."
          delay={0.1}
        />
        <Feature
          icon={<Wallet size={22} />}
          title="Country Logic Engine"
          text="UK needs a 28-day bank statement. Germany needs a blocked account. Turkey needs neither. The app knows."
          delay={0.2}
        />
      </div>

      {/* Comparison */}
      <div className="compare-section">
        <h2>Why students stop trusting agents</h2>
        <div className="compare-grid">
          <div className="compare-card bad">
            <h3>Local Agent</h3>
            <ul>
              <li><span className="x">✕</span> Rs. 300,000+ fee</li>
              <li><span className="x">✕</span> Same SOP template for 1,000 students</li>
              <li><span className="x">✕</span> Generic advice, not country-specific</li>
              <li><span className="x">✕</span> 200+ hours of YouTube confusion</li>
              <li><span className="x">✕</span> Outdated, copy-pasted information</li>
            </ul>
          </div>
          <div className="compare-card good">
            <h3>VisaBuddy</h3>
            <ul>
              <li><CheckCircle2 size={18} /> Rs. 2,999 one-time</li>
              <li><CheckCircle2 size={18} /> 100% unique story-based SOP</li>
              <li><CheckCircle2 size={18} /> Country-specific logic engine (5 countries)</li>
              <li><CheckCircle2 size={18} /> Bara Bhai in Roman Urdu, 24/7</li>
              <li><CheckCircle2 size={18} /> Always current, single source of truth</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="landing-footer">
        <p>VisaBuddy — Agent Se Azadi Package. Built for Pakistani students.</p>
      </footer>
    </div>
  );
}

function Feature({ icon, title, text, delay }: { icon: React.ReactNode; title: string; text: string; delay: number }) {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}
