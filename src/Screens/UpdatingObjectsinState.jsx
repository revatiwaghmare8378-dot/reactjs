import { useState } from "react";

function UpdatingObjectsinState(params) {
  const [data, setData] = useState({
    name: "Revati",
    age: 22,
    address: { city: "Pune", country: "India" },
  });
  const handleName = (value) => {
    // console.log("value", value);
    setData({ ...data, name: value }); // Spread operator to copy existing properties
  };
  const handleAge = (value) => {
    setData({ ...data, age: Number(value) });
  };
  const handleCity = (value) => {
    setData({
      ...data,
      address: { ...data.address, city: value },
    });
  };
  const handleCountry = (value) => {
    setData({
      ...data,
      address: { ...data.address, country: value },
    });
  };
  return (
    <div>
      <h1>Updating Objects in State</h1>
      <input
        type="text"
        placeholder="Update Name"
        onChange={(event) => handleName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Update Age"
        onChange={(event) => handleAge(event.target.value)}
      />
      <input
        type="text"
        placeholder="Update City"
        onChange={(event) => handleCity(event.target.value)}
      />
      <input
        type="text"
        placeholder="Update Country"
        onChange={(event) => handleCountry(event.target.value)}
      />
      <h2>Name: {data.name}</h2>
      <h2>Age: {data.age}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </div>
  );
}
export default UpdatingObjectsinState;
