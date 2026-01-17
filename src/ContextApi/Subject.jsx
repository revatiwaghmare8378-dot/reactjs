import { useContext } from "react";
import { SubjectContext } from "./ContextData";

export default function Subject(params) {
  const subject = useContext(SubjectContext);

  return (
    <div style={{ backgroundColor: "red", padding: "10px" }}>
      <h1>Subject Component</h1>
      <h1>Subject is: {subject}</h1>
    </div>
  );
}
