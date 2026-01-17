import { useRef } from "react";

function UseRefHook() {
  // 1️⃣ Create references
  const inputRef = useRef(null);
  const h1Ref = useRef(null);

  // 2️⃣ Manipulate input element
  const inputHandler = () => {
    // console.log("inputRef", inputRef);
    inputRef.current.focus(); // focuses on input
    inputRef.current.style.color = "red"; // change text color
    inputRef.current.placeholder = "Enter Password"; // update placeholder
    inputRef.current.value = "123"; // set value
  };

  // 3️⃣ Toggle input visibility
  const toggleHandler = () => {
    if (inputRef.current.style.display !== "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };

  // 4️⃣ Change h1 element style
  const h1RefHandler = () => {
    h1Ref.current.style.color = "green";
    h1Ref.current.style.fontSize = "30px";
    h1Ref.current.style.transition = "0.5s ease"; // smooth transition
  };

  return (
    <div>
      <h1>useRef Hook</h1>

      {/* 5️⃣ Toggle button for input */}
      <button onClick={toggleHandler}>Toggle</button>

      {/* 6️⃣ Input element with ref */}
      <input ref={inputRef} type="text" placeholder="Enter user name" />

      {/* 7️⃣ Button to manipulate input */}
      <button onClick={inputHandler}>Focus on Input Field</button>

      {/* 8️⃣ H1 element with ref */}
      <h1 ref={h1Ref}>Hello h1 Ref</h1>

      {/* 9️⃣ Button to manipulate h1 */}
      <button onClick={h1RefHandler}>Change H1 Style</button>
    </div>
  );
}

export default UseRefHook;
