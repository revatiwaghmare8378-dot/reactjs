import { useState } from "react";
import "../Styles/App.css";
import Profile, { Login, userKey } from "../Components/UserComponents";
import User from "../Components/User";
import Header from "../Components/Header";
// DEFAULT IMPORTES does not use curly bracess. eg. Profile
// NAMED IMPORTES use curly braceess to import components. eg. {Login}
// MULTIPLE IMPORTES from one file.

function Fruit() {
  return <h1>Apple</h1>;
}

// ************************DECLARE FUNCTION***********************************
// Function has no any javascript or jsx. it means it can not use any UI. it's only perform operations.
function sum() {
  return 10 + 10;
}

// ************************DECLARE COMPONENT***********************************
// Components has included javascript or jsx. it means it can use UI or CSS.
function Colors() {
  return <h1>Black</h1>;
}

// IMPORTING AND EXPORTING COMPONENTS
function ImportExportComponents(params) {
  return (
    <div>
      <h1>IMPORTING AND EXPORTING COMPONENTS</h1>
      <Login />
      <Profile />
      <h1>{userKey}</h1>
    </div>
  );
}

// ***********************JSX with curly Braces******************

function App(params) {
  const [counter, setCounter] = useState(0);
  const name = "Revati";
  const userObj = {
    name: "Revati",
    email: "abc@gmail.com",
    age: "30",
  };
  const userArray = ["sam", "peter", "john"];
  function Fruit(params) {
    return "Apple";
  }

  function sum(a, b) {
    return a + b;
  }

  function Operation(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else {
      return a * b;
    }
  }
  return (
    <div>
      <h1>Hello React 19</h1>
      <h1>Counter Value : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase Count</button>
      <User />
      {/* ************************CREATE COMPONENTS************************** */}
      <h1>Hello React</h1>
      {/* Import Components using file  */}
      <Header />
      {/* Import Components within function or file */}
      <Fruit />
      <Colors />
      <h1>Sum of numbers = {sum()}</h1>
      <ImportExportComponents />
      {/* ******************JSX with curly Braces****************** */}
      <h1>JSX with curly Braces</h1>
      <h1>{name ? name : "User undefined"}</h1> {/* turnary operations */}
      <h1>{Fruit()}</h1>
      <h1>{sum(10, 20)}</h1>
      <h1>{Operation(10, 20, "+")}</h1>
      <h1>{userObj.email}</h1>
      <input type="text" value={name} />
      <h1>{userArray[0]}</h1>
      <input type="text" value={name} />
      <br />
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPqFo1Uqo8BBougNr1zC5FuYbvdOLomfXYFJI-0HU9SeUZfkddWg-ouO4u2GbJcoCJRF7FDIw"
        alt="Image not found"
      />
    </div>
  );
}

export default App;
