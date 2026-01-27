import { useActionState } from "react";

export default function ValidationUseActionState() {
  const formAction = (prevState, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    let errors = {};

    // ✅ Name validation (only letters, 2–20 chars)
    if (!name || !/^[A-Za-z ]{2,20}$/.test(name)) {
      errors.name = "Name must be 2-20 letters only";
    }

    // ✅ Password validation
    // Minimum 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    if (
      !password ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password,
      )
    ) {
      errors.password =
        "Password must be 8+ chars, include uppercase, lowercase, number & special char";
    }

    // ❌ If validation failed
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
      };
    }

    // ✅ If validation success
    return {
      success: true,
      errors: {},
      message: "Form submitted successfully ✅",
      name,
      password,
    };
  };
  const [state, formActionFn] = useActionState(formAction, {
    success: false,
    errors: {},
    message: "",
  });
  // console.log("STATE", state);

  return (
    <div>
      <h1>Validation with useActionState</h1>
      <div style={{ maxWidth: "400px", margin: "40px auto" }}>
        <form action={formActionFn}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            style={inputStyle}
          />
          {state.errors?.name && <p style={errorStyle}>{state.errors.name}</p>}

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            style={inputStyle}
          />
          {state.errors?.password && (
            <p style={errorStyle}>{state.errors.password}</p>
          )}

          <button type="submit" style={btnStyle}>
            Submit
          </button>

          {state.success && (
            <p style={{ color: "green", marginTop: "10px" }}>{state.message}</p>
          )}
        </form>
        {state.name && (
          <p>
            <strong>Name:</strong> {state?.name}
            <br />
            <strong>Password:</strong> {state?.password}
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------- styles ---------- */

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "6px",
  borderRadius: "6px",
  border: "1px solid #334155",
  outline: "none",
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  background: "#4d89e9",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

const errorStyle = {
  color: "red",
  fontSize: "13px",
  marginBottom: "8px",
};
