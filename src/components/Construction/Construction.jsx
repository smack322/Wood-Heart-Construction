import { useState, useEffect, useRef } from "react";

const GearSVG = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes spin-rev { to { transform: rotate(-360deg); } }
      .gear-outer { transform-origin: 60px 60px; animation: spin 12s linear infinite; }
      .gear-inner { transform-origin: 60px 60px; animation: spin-rev 8s linear infinite; }
    `}</style>
    <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="1" />
    <g className="gear-outer">
      <polygon
        points="60,6 65,20 74,12 75,27 86,22 83,37 96,36 88,49 100,52 89,61 100,70 88,71 96,84 83,83 86,98 75,93 74,108 65,100 60,114 55,100 46,108 45,93 34,98 37,83 24,84 32,71 20,70 31,61 20,52 32,49 24,36 37,37 34,22 45,27 46,12 55,20"
        fill="#f9fafb"
        stroke="#d1d5db"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </g>
    <circle cx="60" cy="60" r="22" fill="white" stroke="#e5e7eb" strokeWidth="1" />
    <g className="gear-inner">
      <polygon
        points="60,38 63,44 69,41 69,47 75,47 72,53 78,56 73,60 78,64 72,67 75,73 69,73 69,79 63,76 60,82 57,76 51,79 51,73 45,73 48,67 42,64 47,60 42,56 48,53 45,47 51,47 51,41 57,44"
        fill="#f9fafb"
        stroke="#d1d5db"
        strokeWidth="1"
      />
    </g>
    <circle cx="60" cy="60" r="8" fill="white" stroke="#d1d5db" strokeWidth="1" />
  </svg>
);

const LAUNCH_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = target - Date.now();
      if (diff <= 0) return setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);
  return timeLeft;
}

function CountdownUnit({ value, label }) {
  return (
    <div style={{ textAlign: "center", minWidth: 56 }}>
      <div
        style={{
          fontSize: "1.75rem",
          fontWeight: 300,
          letterSpacing: "-0.03em",
          color: "#111827",
          fontFamily: "Georgia, serif",
          lineHeight: 1,
          marginBottom: 4,
        }}
      >
        {String(value ?? 0).padStart(2, "0")}
      </div>
      <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9ca3af" }}>
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return <div style={{ width: 1, height: 36, background: "#e5e7eb", alignSelf: "center" }} />;
}

export default function UnderConstruction() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | invalid | submitted
  const [progressWidth, setProgressWidth] = useState(0);
  const progress = 68;
  const countdown = useCountdown(LAUNCH_DATE);
  const inputRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setProgressWidth(progress), 400);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = () => {
    if (!email.trim() || !email.includes("@")) {
      setStatus("invalid");
      inputRef.current?.focus();
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }
    setStatus("submitted");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#fafaf9",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>

        {/* Gear */}
        <div style={{ marginBottom: "1.75rem", display: "inline-block" }}>
          <GearSVG />
        </div>

        {/* Eyebrow */}
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#9ca3af",
            marginBottom: "0.6rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Website Under Construction
        </p>

        {/* Headline */}
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "#111827",
            margin: "0 0 1rem",
          }}
        >
          Something great<br />is on its way.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "#6b7280",
            marginBottom: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Check back soon.

        </p>


      </div>
    </div>

  );
}