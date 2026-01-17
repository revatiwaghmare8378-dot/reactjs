import React from "react";
import "../Styles/ExcerciseStyleCss.css"; // 3. External CSS
import styles from "../Styles/ExcerciseButton.module.css"; // 4. CSS Module
import styled from "styled-components"; // 5. CSS-in-JS (Styled Components)

// 5. CSS-in-JS styled component
const StyledButton = styled.button`
  background: linear-gradient(135deg, #7f00ff, #e100ff);
  color: white;
  padding: 12px 20px;
  border: none;
  margin: 8px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 6px 15px rgba(127, 0, 255, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #9d50bb, #6e48aa);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(127, 0, 255, 0.6);
  }
`;

// 1. Inline style object
const inlineStyle = {
  background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
  color: "white",
  padding: "12px 20px",
  margin: "8px",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
  boxShadow: "0 6px 15px rgba(255, 65, 108, 0.4)",
  transition: "all 0.3s ease",
};

function ExcerciseStyleCss() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#36d1dc" }}>
        🎨 Styling in React - All 6 Types
      </h2>

      {/* 1. Inline CSS */}
      <button style={inlineStyle}>Inline CSS</button>

      {/* 2. Internal CSS (inside <style> tag in JSX) */}
      <style>{`
        .internal-btn {
          background: linear-gradient(135deg, #36d1dc, #5b86e5);
          color: white;
          padding: 12px 20px;
          border: none;
          margin: 8px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          box-shadow: 0 6px 15px rgba(91, 134, 229, 0.4);
          transition: all 0.3s ease;
        }
        .internal-btn:hover {
          background: linear-gradient(135deg, #5b86e5, #36d1dc);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 20px rgba(91, 134, 229, 0.6);
        }
      `}</style>
      <button className="internal-btn">Internal CSS</button>

      {/* 3. External CSS (Style.css) */}
      <button className="external-btn">External CSS</button>

      {/* 4. CSS Module (scoped to file only) */}
      <button className={styles.moduleBtn}>CSS Module</button>

      {/* 5. CSS-in-JS (styled-components) */}
      <StyledButton>Styled Components</StyledButton>

      {/* 6. Utility-first (TailwindCSS) */}
      <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-5 py-3 m-2 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
        TailwindCSS
      </button>
    </div>
  );
}

export default ExcerciseStyleCss;
