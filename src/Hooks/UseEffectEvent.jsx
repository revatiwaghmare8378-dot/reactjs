import { useEffect, useEffectEvent, useState } from "react";

export default function UseEffectEvent() {
  const [count, setCount] = useState(0);
  const countControl = useEffectEvent(() => {
    setCount((prevCount) => prevCount + 1);
  });
  useEffect(() => {
    const interval = setInterval(() => {
      countControl();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>UseEffectEvent Hook in React 19.2</h1>
      <h2>{count}</h2>
    </div>
  );
}
