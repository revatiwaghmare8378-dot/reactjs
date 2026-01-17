import { useActionState } from "react";

function UseActionStateHook() {
  const handleSubmit = async (prevData, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (name && password) {
      return { message: "✅ Login Successful!", name, password };
    } else {
      return { message: "❌ Invalid Credentials", name, password };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, {
    message: "",
    name: "",
    password: "",
  });

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>useActionState Hook in React JS</h1>
      <form action={action}>
        <input
          type="text"
          defaultValue={data?.name}
          placeholder="Enter name"
          name="name"
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <br />
        <input
          type="password"
          defaultValue={data?.password}
          placeholder="Enter password"
          name="password"
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <br />
        <button
          type="submit"
          disabled={pending}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: pending ? "#ccc" : "#007bff",
            color: "white",
            cursor: pending ? "not-allowed" : "pointer",
          }}
        >
          {pending ? "Submitting..." : "Submit Data"}
        </button>
      </form>

      <h6
        style={{
          marginTop: "20px",
          color: data.message.includes("Invalid") ? "red" : "green",
        }}
      >
        {data.message}
      </h6>
      {data.name && (
        <p>
          <strong>Name:</strong> {data.name}
          <br />
          <strong>Password:</strong> {data.password}
        </p>
      )}
    </div>
  );
}

export default UseActionStateHook;
