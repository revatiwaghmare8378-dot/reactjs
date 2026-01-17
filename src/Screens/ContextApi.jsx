import { useState } from "react";
import College from "../ContextApi/College";
import { SubjectContext } from "../ContextApi/ContextData";

export default function ContextApi(params) {
  const [subject, setSubject] = useState("");
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      <h1>Context API</h1>
      <SubjectContext.Provider value={subject}>
        <select
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          style={{ color: "black" }}
        >
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="Geography">Geography</option>
        </select>
        <button onClick={() => setSubject("")}>Clear Subject</button>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}
