import { useRef } from "react";
import ForwardRefComponent from "../Components/ForwardRefComponent";

function ForwardRef(params) {
  const inputRef = useRef(null);

  const updateInput = () => {
    inputRef.current.value = 100;
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };
  return (
    <div>
      <h1>Forward Ref</h1>
      <ForwardRefComponent ref={inputRef} />
      <button onClick={updateInput}>Update Input Feild</button>
    </div>
  );
}
export default ForwardRef;
