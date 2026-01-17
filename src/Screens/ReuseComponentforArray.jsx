import { useState } from "react";
import UserInfo from "../Components/UserInfo";

function ReuseComponentforArray(params) {
  const [userData] = useState([
    { name: "Peter", age: 31, email: "peter@gmail.com", id: 1 },
    { name: "Anil", age: 20, email: "anil@gmail.com", id: 2 },
    { name: "Sunil", age: 22, email: "sunil@gmail.com", id: 3 },
    { name: "Ravi", age: 23, email: "ravi@gmail.com", id: 4 },
  ]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <h1>Reuse Component in loop</h1>
      {userData.map((item) => (
        <div key={item.id}>
          <UserInfo data={item} />
        </div>
      ))}
    </div>
  );
}
export default ReuseComponentforArray;
