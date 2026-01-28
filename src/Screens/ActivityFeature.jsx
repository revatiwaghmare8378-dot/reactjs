import { Activity, useState } from "react";

export default function ActivityFeature() {
  const [showHome, setShowHome] = useState(true);
  return (
    <div>
      <h1>Activity Feature in React 19.2</h1>
      <button onClick={() => setShowHome(true)}>Home</button>
      <button onClick={() => setShowHome(false)}>User form</button>
      <Activity mode={showHome == true ? "visible" : "hidden"}>
        <Home />
      </Activity>
      <Activity mode={showHome == false ? "visible" : "hidden"}>
        <UserForm />
      </Activity>
    </div>
  );
}
function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function UserForm() {
  return (
    <form>
      <div>
        <h2>User Form</h2>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
