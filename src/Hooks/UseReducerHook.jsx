import { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
  showPassword: false,
};

const reducer = (state, action) => {
  // console.log("Action", action);
  if (action.type === "TOGGLE_PASSWORD") {
    return { ...state, showPassword: !state.showPassword };
  }
  return { ...state, [action.type]: action.val };

  //   switch (action.type) {
  //     case "name":
  //       return { ...state, name: action.payload };
  //     case "password":
  //       return { ...state, password: action.payload };
  //     case "email":
  //       return { ...state, email: action.payload };
  //     case "city":
  //       return { ...state, city: action.payload };
  //     case "address":
  //       return { ...state, address: action.payload };
  //     default:
  //       return state;
  //   }
};

export default function UseReducerHook(params) {
  const [state, dispatch] = useReducer(reducer, emptyData);
  // console.log("State", state);

  return (
    <div>
      <h1>Use Reducer</h1>
      <div style={{ maxWidth: "400px", margin: "40px auto" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter Username"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "name" })
          }
          style={inputStyle}
        />

        <div style={{ position: "relative" }}>
          <input
            type={state.showPassword ? "text" : "password"} // 👈 core logic
            name="password"
            placeholder="Enter Password"
            onChange={(e) =>
              dispatch({ val: e.target.value, type: "password" })
            }
            style={{ ...inputStyle, paddingRight: "40px" }}
          />

          <span
            onClick={() => dispatch({ type: "TOGGLE_PASSWORD" })}
            style={eyeStyle}
            title={state.showPassword ? "Hide password" : "Show password"}
          >
            {state.showPassword ? "👁️" : "🙈"}{" "}
            {/* 👁️ open = show, 🙈 closed = hide */}
          </span>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "email" })
          }
          style={inputStyle}
        />

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "city" })
          }
          style={inputStyle}
        />

        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "address" })
          }
          style={inputStyle}
        />
        <ul>
          <li>name: {state.name}</li>
          <li>password: {state.password}</li>
          <li>email: {state.email}</li>
          <li>city: {state.city}</li>
          <li>address: {state.address}</li>
        </ul>

        <button type="submit" style={btnStyle}>
          Submit
        </button>
      </div>
    </div>
  );
}
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

const eyeStyle = {
  position: "absolute",
  right: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  fontSize: "18px",
  userSelect: "none",
};
