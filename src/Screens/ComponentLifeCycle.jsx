import { useEffect, useState } from "react";
import Counter from "../Components/Counter";

function ComponentLifeCycle(params) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [visible, setVisible] = useState(true);
  //   **************************************** LIFE CYCLE IN REACT JS **********************************************

  // **************************** 1 This code will run on EVERY LIFE CYCLE EVENT ****************************
  // No dependency array → runs after every render (state change, prop change, or re-render).
  //   useEffect(() => {
  //     console.log("This code will run on EVERY LIFE CYCLE EVENT");
  //     // This code will run on EVERY LIFE CYCLE EVENT
  //   });

  // ************************** 2 This code will run on MOUNT *****************************************
  // Empty dependency array [] → runs once after the first render.
  useEffect(() => {
    // console.log("This code will run on MOUNT");
    // This code will run on MOUNT
  }, []);

  // *************************** 3 This code will run on UPDATE *********************************
  // Dependency array [state1] → runs only when state1 changes.
  useEffect(() => {
    // console.log("This code will run on UPDATE");
    // This code will run on UPDATE
  }, [count]);

  // *************************** 4 This code will run on UNMOUNT **************************
  useEffect(() => {
    return () => {
      // console.log("This code will run on UNMOUNT");
      // This code will run on UNMOUNT
    };
  }, []);

  return (
    <div>
      <h1>Component Life Cycle</h1>
      {visible ? <Counter count={count} data={data} /> : null}
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
      <button onClick={() => setVisible(!visible)}>Toggle</button>
    </div>
  );
}
export default ComponentLifeCycle;
