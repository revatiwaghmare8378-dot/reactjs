import { useFormStatus } from "react-dom";

function UseFormStatusHook(params) {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    // console.log("handleSubmit");
  };

  function SubmitButton() {
    const { pending } = useFormStatus(); // ✅ Hook to get form status

    return (
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    );
  }

  return (
    <div>
      <h1>useFormStatus Hook in React JS 19</h1>
      <form action={handleSubmit}>
        <input type="text" placeholder="Enter User Name" />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <br />
        {/* ✅ The button must be inside the form but in a child component */}
        <SubmitButton />
      </form>
    </div>
  );
}
export default UseFormStatusHook;
