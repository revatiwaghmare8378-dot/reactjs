import { useState, useTransition } from "react";

function UseTransitionHook(params) {
  // 1️⃣ useTransition returns:
  // - pending → boolean (true while transition is running)
  // - startTransition → function to wrap your async/non-urgent work
  const [pending, startTransition] = useTransition();

  const handleButton = () => {
    // 2️⃣ Wrap slow work in startTransition
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };
  return (
    <div>
      <h1>useTransition Hook in React JS 19</h1>
      {/* 3️⃣ Show loader while pending is true */}
      {pending ? (
        <img
          src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
          alt="loading..."
          style={{ width: "100px", height: "100px" }}
        />
      ) : null}

      {/* 4️⃣ Disable the button while pending */}
      <button disabled={pending} onClick={handleButton}>
        Click
      </button>
    </div>
  );
}
export default UseTransitionHook;
