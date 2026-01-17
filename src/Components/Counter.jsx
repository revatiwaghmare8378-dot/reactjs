import { useEffect } from "react";

const Counter = ({ count, data }) => {
  const handleCounter = () => {
    // console.log("handleCounter call only");
  };

  const handleData = () => {
    // console.log("handleData call only");
  };

  useEffect(() => {
    // console.log("handleCounter");
    handleCounter();
  }, [count]);

  useEffect(() => {
    // console.log("handleData");
    handleData();
  }, [data]);

  useEffect(() => {
    return () => {
      // console.log("Counter unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <h1>Data Value: {data}</h1>
    </div>
  );
};
export default Counter;
