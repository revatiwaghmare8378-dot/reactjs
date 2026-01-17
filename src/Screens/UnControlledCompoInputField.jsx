import { useRef } from "react";

function UnControlledCompoInputField(params) {
  const userRef = useRef();
  const passwordRef = useRef();

  // Way 1: Using document.querySelector (not recommended in React, but works)
  const onSubmitForm = (event) => {
    // console.log(event, "event");
    event.preventDefault(); // stop page reloading/refresh
    // console.log("Form submitted");
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    // console.log("user", user, password);
  };

  // Way 2: Using useRef (recommended in React)
  const onSubmitFormRef = (event) => {
    event.preventDefault(); // stop page reloading/refresh
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    // console.log("onSubmitFormRef", user, password);
  };
  return (
    <div>
      <h1>UnControlled Components</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text" id="user" placeholder="Enter Name" />
        <br />
        <br />
        <input type="password" id="password" placeholder="Enter Password" />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />

      <h1>UnControlled Components with useRef</h1>
      <form onSubmit={onSubmitFormRef}>
        <input type="text" ref={userRef} placeholder="Enter Name" />
        <br />
        <br />
        <input type="password" ref={passwordRef} placeholder="Enter Password" />
        <br />
        <br />
        <button>Submit wirh Ref</button>
      </form>
    </div>
  );
}
export default UnControlledCompoInputField;
