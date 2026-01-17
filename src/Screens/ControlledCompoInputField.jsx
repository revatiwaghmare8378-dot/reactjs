import { useState } from "react";

function ControlledCompoInputField(params) {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      {/* <h1>Get Input Field Value</h1>
      <input
        type="text"
        placeholder="Enter User Name"
        onChange={(event) => setValue(event.target.value)}
        value={value} // CLEAR INPUTFIELD VALUE
      />
      <h1>{value}</h1>
      <button onClick={() => setValue("")}>Clear</button> */}

      <h1>CONTROLLED COMPONENTS</h1>
      <form action="" method="get">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <br />
        <br />
        <button>Submit</button>
        <button
          onClick={() => {
            setName("");
            setPassword("");
            setEmail("");
          }}
        >
          Clear
        </button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>
    </div>
  );
}
export default ControlledCompoInputField;
