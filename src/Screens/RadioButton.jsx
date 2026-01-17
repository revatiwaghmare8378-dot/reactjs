import { useState } from "react";

function RadioButton(params) {
  const [gender, setGender] = useState("female");
  return (
    <div>
      <h1>Handle Radio Button</h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        name="gender"
        id="male"
        value={"male"}
        checked={gender == "male"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        id="female"
        value={"female"}
        checked={gender == "female"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender : {gender}</h2>
    </div>
  );
}
export default RadioButton;
