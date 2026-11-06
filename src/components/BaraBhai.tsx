import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { CountryData } from "../data/countries";
import { baraBhaiReply, baraBhaiGreeting } from "../lib/baraBhai";

interface Message {
  id: number;
  text: string;
  from: "user" | "bhai";
}

interface BaraBhaiProps {
  country: CountryData;
}

export default function BaraBhai({ country }: BaraBhaiProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [greetedFor, setGreetedFor] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  useEffect(() => {
    if (open && greetedFor !== country.code) {
      setGreetedFor(country.code);
      setMessages([{ id: idRef.current++, text: baraBhaiGreeting(), from: "bhai" }]);
    }
  }, [open, country.code, greetedFor]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: idRef.current++, text, from: "user" };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    const replyText = baraBhaiReply(text, country);
    const delay = Math.min(2200, 600 + replyText.length * 8);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { id: idRef.current++, text: replyText, from: "bhai" }]);
    }, delay);
  };

  const quickQuestions = [
    "Bhai block account ka kya scene hai?",
    "Bank statement kitne din ka chahiye?",
    "SOP kaise likhoon?",
    "Budget kitna lagega?",
  ];

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            className="bhai-fab"
            onClick={() => setOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={22} />
            <span className="bhai-fab-label">Bara Bhai</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="bhai-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className="bhai-header">
              <div className="bhai-avatar">
                <span>BB</span>
                <span className="bhai-status" />
              </div>
              <div className="bhai-header-info">
                <strong>Bara Bhai</strong>
                <small>Your elder brother abroad · {country.flag} {country.name}</small>
              </div>
              <button className="bhai-close" onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="bhai-messages" ref={scrollRef}>
              {messages.map((m) => (
                <div key={m.id} className={`bhai-msg ${m.from}`}>
                  {m.text}
                </div>
              ))}
              {typing && (
                <div className="bhai-msg bhai typing">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              )}
            </div>

            {messages.length <= 1 && !typing && (
              <div className="bhai-quick">
                {quickQuestions.map((q) => (
                  <button key={q} onClick={() => { setInput(q); setTimeout(send, 50); }}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="bhai-input">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Roman Urdu me puch bhai..."
              />
              <button onClick={send} disabled={!input.trim()}>
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
