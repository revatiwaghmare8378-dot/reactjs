import { useState } from "react";

function Dropdown(params) {
  const [city, setCity] = useState("nashik");
  return (
    <div>
      <h1>Handle Dropdown</h1>
      <h4>Select City</h4>
      <select
        defaultValue="nashik"
        onChange={(event) => setCity(event.target.value)}
        style={{ color: "black" }}
      >
        <option value="nashik">Nashik</option>
        <option value="surat">Surat</option>
        <option value="hydrabad">Hydrabad</option>
        <option value="banglore">Banglore</option>
      </select>
      <h2>Selected City : {city}</h2>
    </div>
  );
}
export default Dropdown;
