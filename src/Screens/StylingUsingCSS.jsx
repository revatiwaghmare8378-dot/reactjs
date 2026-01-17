import React from "react";
import "../Styles/Style.css"; // 3. External CSS
import styles from "../Styles/Button.module.css"; // 4. CSS Module
import styled from "styled-components"; // 5. CSS-in-JS (Styled Components)

// 5. CSS-in-JS styled component
const StyledButton = styled.button`
  background: purple;
  color: white;
  padding: 10px 15px;
  border: none;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: violet;
  }
`;

// 1. Inline style object
const inlineStyle = {
  background: "red",
  color: "white",
  padding: "10px 15px",
  margin: "5px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

function StylingUsingCSS() {
  return (
    <div>
      <h2>🎨 Styling in React - All 6 Types</h2>

      {/* 1. Inline CSS */}
      <button style={inlineStyle}>Inline CSS</button>

      {/* 2. Internal CSS (inside <style> tag in JSX) */}
      <style>{`
        .internal-btn {
          background: blue;
          color: white;
          padding: 10px 15px;
          border: none;
          margin: 5px;
          border-radius: 5px;
          cursor: pointer;
        }
        .internal-btn:hover {
          background: lightblue;
        }
      `}</style>
      <button className="internal-btn">Internal CSS</button>

      {/* 3. External CSS (App.css) */}
      <button className="external-btn">External CSS</button>

      {/* 4. CSS Module (scoped to file only) */}
      <button className={styles.moduleBtn}>CSS Module</button>

      {/* 5. CSS-in-JS (styled-components) */}
      <StyledButton>Styled Components</StyledButton>

      {/* 6. Utility-first (TailwindCSS) */}
      <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 m-2 rounded">
        TailwindCSS
      </button>
    </div>
  );
}

export default StylingUsingCSS;
