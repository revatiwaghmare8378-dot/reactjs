import { useState } from "react";
import LiftingUpAddUser from "../Components/LiftingUpAddUser";
import LiftingUpDisplayUser from "../Components/LiftingUpDisplayUser";

function LiftingStateUp(params) {
  const [user, setUser] = useState("");
  return (
    <div>
      <h1>Lifting State Up in React JS</h1>
      <LiftingUpAddUser addUser={setUser} />
      <LiftingUpDisplayUser displayUser={user} />
    </div>
  );
}
export default LiftingStateUp;
