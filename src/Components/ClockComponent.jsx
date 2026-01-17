import { useEffect, useState } from "react";

const ClockComponent = ({ color }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "25vh",
        background: "linear-gradient(135deg, #1e1e2f, #232946)",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: { color },
          background: "#111827",
          padding: "20px 50px",
          borderRadius: "12px",
          boxShadow: `
    0 0 20px ${color}99, 
    0 0 40px ${color}66, 
    inset 0 0 10px ${color}55
  `,
          textShadow: `
    0 0 10px ${color}, 
    0 0 20px ${color}
  `,
          letterSpacing: "3px",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {time}
      </div>
    </div>
  );
};
export default ClockComponent;
