import Student from "./Student";

export default function ClassComponent(params) {
  return (
    <div style={{ backgroundColor: "skyblue", padding: "10px" }}>
      <h1>ClassComponent Component</h1>
      <Student />
    </div>
  );
}
