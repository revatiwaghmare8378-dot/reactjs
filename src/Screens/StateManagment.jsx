import { useState } from "react";
import User from "../Components/User";

useState;
function stateManagement(params) {
  const [fruit, setFruit] = useState("Apple");
  const [display, setDisplay] = useState(true);
  const [count, setCount] = useState(0);
  const [student, setStudent] = useState();

  const onHandleFruite = () => {
    setFruit("Banana");
    // console.log(fruit);
  };
  let Name = "Revati";
  let Age = "30";
  let Email = "abc@gmail.com";

  let userObj = {
    name: "Revati",
    age: "30",
    email: "abc@gmail.com",
  };

  return (
    //   *************************{/* State in React JS */}*******************
    // <div>
    //   <h1>State in React JS</h1>
    //   <h1>{fruit}</h1>
    //   <button onClick={() => onHandleFruite()}>Change Fruit Name</button>

    //   {/* Toggle in React JS */}
    //   <h1>Toggle in React JS</h1>
    //   <button onClick={() => setDisplay(!display)}>Toggle</button>
    //   {display ? <h1>Revati</h1> : null}

    //   {/* Multiple Conditions in React JS */}
    //   <h1>Multiple Conditions in React JS</h1>
    //   <h1>{count}</h1>
    //   <button onClick={() => setCount(count + 1)}>Counter</button>
    //   {count == 0 ? (
    //     <h1>Condition 0</h1>
    //   ) : count == 1 ? (
    //     <h1>Condition 1</h1>
    //   ) : count == 2 ? (
    //     <h1>Condition 2</h1>
    //   ) : count == 3 ? (
    //     <h1>Condition 3</h1>
    //   ) : count == 4 ? (
    //     <h1>Condition 4</h1>
    //   ) : count == 5 ? (
    //     <h1>Condition 5</h1>
    //   ) : (
    //     <h1>Other Condition</h1>
    //   )}
    // </div>

    // ************************Props in React JS**************************
    <div>
      <h1>Props in React JS</h1>
      {/* <User name={Name} age={Age} email={Email} /> */}

      {/* ********Passing Object******** 
       <User user={userObj} /> 
      <User name={student} />
      <button onClick={() => setStudent("Sam")}>Update Student Name</button> */}

      {/*   ************** WRAPPERRRR*********    */}
      <User />
    </div>
  );
}
export default stateManagement;
