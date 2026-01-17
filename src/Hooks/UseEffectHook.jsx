import { useEffect, useState } from "react";
import Counter from "../Components/Counter";

function UseEffectHook(params) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  //   ******************************* HANDLE DEPENDENCY ****************************************

  // **************************** 1 Run on every render **************************************
  // useEffect(() => {
  //   console.log("This runs on every render");
  //   This code will run on EVERY LIFE CYCLE EVENT
  // });
  // No dependency array → runs after every render (state change, prop change, or re-render).

  // ************************** 2 Run only once (on mount) ***********************************
  // useEffect(() => {
  //   console.log("This runs only once, like componentDidMount");
  //   This code will run on MOUNT
  // }, []);
  // Empty dependency array [] → runs once after the first render.

  // *************************** 3 Run when a single state changes **************************
  // const [state1, setState1] = useState(0);

  // useEffect(() => {
  //   console.log("state1 changed:", state1);
  //   This code will run on UPDATE
  // }, [state1]);
  // Dependency array [state1] → runs only when state1 changes.

  // **************************** 4 Run when multiple states change **************************
  // const [state1, setState1] = useState(0);
  // const [state2, setState2] = useState(0);

  // useEffect(() => {
  //   console.log("state1 or state2 changed:", state1, state2);
  // }, [state1, state2]);
  // Dependency array [state1, state2] → runs when either state1 or state2 changes.

  // ********************************* 5 Run when props change *******************************
  // useEffect(() => {
  //   console.log("prop1 or prop2 changed:", prop1, prop2);
  // }, [prop1, prop2]);
  // Works the same way as state dependencies. Runs whenever any prop in the array changes.

  useEffect(() => {
    callOnce();
  }, [count]);

  function callOnce() {
    // console.log("Function called");
  }

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter: {count}
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Data: {data}
      </button>

      {/* Handle Props Side Effect with useEffect in component */}
      <Counter count={count} data={data} />
    </div>
  );
}
export default UseEffectHook;
