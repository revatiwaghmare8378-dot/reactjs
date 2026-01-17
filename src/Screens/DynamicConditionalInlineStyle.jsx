import { useState } from "react";

function DynamicConditionalInlineStyle(params) {
  const [textStyle, setTextStyle] = useState("black");
  const [grid, setGrid] = useState(true);

  const [cardStyle, setCardStyle] = useState({
    width: "200px",
    border: "1px solid #f0e8e8ff",
    boxShadow: "1px 2px 3px 0px #767171ff",
    margin: "10px",
  });

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor });
    setTextStyle(textColor);
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        display: "flex", // Flexbox layout
        justifyContent: "center", // Horizontally center
        alignItems: "center", // Vertically center
        height: "auto", // Full viewport height
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "Green" }}>
        Dynamic Conditional Inline Style in React JS
      </h1>
      <button onClick={() => updateTheme("gray", "white")}>Gray Theme</button>
      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>

      <div
        style={{
          display: grid ? "flex" : "block", // Flexbox layout
          flexWrap: "wrap", // Allows items to move to the next line, creating a multi-line layout
        }}
      >
        <div
          style={{
            display: "flex", // Flexbox layout
            flexWrap: "wrap", // Allows items to move to the next line, creating a multi-line layout
          }}
        >
          <div style={cardStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
              alt="Image not Found"
              style={{ width: "200px" }}
            />
            <div style={{ padding: "5px", color: textStyle }}>
              <h4>Jack Sparrow</h4>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex", // Flexbox layout
            flexWrap: "wrap", // Allows items to move to the next line, creating a multi-line layout
          }}
        >
          <div style={cardStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
              alt="Image not Found"
              style={{ width: "200px" }}
            />
            <div style={{ padding: "5px", color: textStyle }}>
              <h4>Jack Sparrow</h4>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex", // Flexbox layout
            flexWrap: "wrap", // Allows items to move to the next line, creating a multi-line layout
          }}
        >
          <div style={cardStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
              alt="Image not Found"
              style={{ width: "200px" }}
            />
            <div style={{ padding: "5px", color: textStyle }}>
              <h4>Jack Sparrow</h4>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DynamicConditionalInlineStyle;
