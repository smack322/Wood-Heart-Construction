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

export default function UnderConstruction() {
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

        <div style={{ marginBottom: "1.75rem", display: "inline-block" }}>
          <GearSVG />
        </div>

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