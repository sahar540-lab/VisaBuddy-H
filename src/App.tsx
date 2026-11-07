import { usePersistentSet } from "./lib/usePersistentSet";
import { useState } from "react";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import SopStudio from "./components/SopStudio";
import { COUNTRIES, type CountryData } from "./data/countries";

type View = "landing" | "dashboard" | "sop";

export default function App() {
  const [view, setView] = useState<View>("landing");
  const [country, setCountry] = useState<CountryData>(COUNTRIES[0]);
  const [completedDocs, setCompletedDocs] = usePersistentSet("visabuddy-completed-docs");
  const [sopCompletedFor, setSopCompletedFor] = usePersistentSet("visabuddy-sop-completed");
  const toggleDoc = (id: string) => {
    setCompletedDocs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const completeSop = (docId: string) => {
    setSopCompletedFor((prev) => new Set(prev).add(docId));
    setCompletedDocs((prev) => new Set(prev).add(docId));
  };

  if (view === "landing") {
    return <Landing onStart={() => setView("dashboard")} />;
  }

  if (view === "sop") {
    return (
      <SopStudio
        country={country}
        onBack={() => setView("dashboard")}
        onComplete={completeSop}
      />
    );
  }

  return (
    <Dashboard
      selectedCountry={country}
      onSelectCountry={setCountry}
      onOpenSop={() => setView("sop")}
      completedDocs={completedDocs}
      onToggleDoc={toggleDoc}
      onBack={() => setView("landing")}
    />
  );
}
