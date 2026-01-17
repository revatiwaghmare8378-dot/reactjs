import { useState } from "react";

function CheckBoxes(params) {
  const [skills, setSkills] = useState([]);
  // console.log("skills", skills);

  const handleSkils = (event) => {
    // console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== event.target.value));
    }
  };
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ color: "#fffbfbff", marginBottom: "10px" }}>
        Handle Checkbox in React JS
      </h1>
      <h3 style={{ color: "#ffffffff" }}>Select Your Skills</h3>
      <div style={{ marginBottom: "15px" }}>
        <input type="checkbox" id="php" value="php" onChange={handleSkils} />
        <label htmlFor="php" style={{ marginLeft: "8px" }}>
          PHP
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="checkbox"
          id="react"
          value="react"
          onChange={handleSkils}
        />
        <label htmlFor="react" style={{ marginLeft: "8px" }}>
          REACT
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="checkbox"
          id="python"
          value="python"
          onChange={handleSkils}
        />
        <label htmlFor="python" style={{ marginLeft: "8px" }}>
          PYTHON
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <input type="checkbox" id="node" value="node" onChange={handleSkils} />
        <label htmlFor="node" style={{ marginLeft: "8px" }}>
          NODE
        </label>
      </div>
      <h2 style={{ color: "green" }}>
        Selected Skills: {skills.length > 0 ? skills.join(", ") : "None"}
      </h2>
    </div>
  );
}
export default CheckBoxes;
