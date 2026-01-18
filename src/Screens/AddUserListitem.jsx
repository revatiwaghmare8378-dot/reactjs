// import { useState } from "react";

// export default function AddUserListitem() {
//   const [userName, setUserName] = useState("");
//   const [userAge, setUserAge] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleAddUser = async () => {
//     if (!userName || !userAge || !userEmail) {
//       alert("Please fill all fields");
//       return;
//     }

//     // 1. Get all users
//     const getRes = await fetch("http://localhost:3000/users");
//     const users = await getRes.json();

//     // 2. Find max id
//     const maxId = users.reduce(
//       (max, user) => Math.max(max, Number(user.id)),
//       0
//     );

//     const newId = maxId + 1;

//     // 3. Create new user with id
//     const newUser = {
//       id: newId,
//       firstName: userName,
//       age: userAge,
//       email: userEmail,
//     };

//     try {
//       setLoading(true);

//       const response = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add user");
//       }

//       alert("User added successfully ✅");

//       setUserName("");
//       setUserAge("");
//       setUserEmail("");
//     } catch (error) {
//       console.error(error);
//       alert("Error while adding user ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         // minHeight: "80vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "350px",
//           background: "#020617",
//           padding: "25px",
//           borderRadius: "12px",
//           boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
//         }}
//       >
//         <h1
//           style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}
//         >
//           Add New User
//         </h1>

//         <input
//           type="text"
//           placeholder="Name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           style={inputStyle}
//         />

//         <input
//           type="number"
//           placeholder="Age"
//           value={userAge}
//           onChange={(e) => setUserAge(e.target.value)}
//           style={inputStyle}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={userEmail}
//           onChange={(e) => setUserEmail(e.target.value)}
//           style={inputStyle}
//         />

//         <button onClick={handleAddUser} style={buttonStyle}>
//           {loading ? "Adding..." : "Add User"}
//         </button>
//       </div>
//     </div>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   marginBottom: "12px",
//   borderRadius: "6px",
//   border: "1px solid #334155",
//   outline: "none",
//   color: "#fff",
//   background: "#020617",
// };

// const buttonStyle = {
//   width: "100%",
//   padding: "10px",
//   background: "#4d89e9",
//   color: "#fff",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer",
//   fontSize: "16px",
//   fontWeight: "bold",
// };

import { useState } from "react";

export default function AddUserListitem() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({}); // store validation errors

  const validate = () => {
    const errs = {};

    // ✅ Name: only letters and spaces, 2-30 chars
    if (!userName.trim()) errs.userName = "Name is required";
    else if (!/^[a-zA-Z ]{2,30}$/.test(userName))
      errs.userName = "Name must be 2-30 letters";

    // ✅ Age: only digits, 1-3 chars
    if (!userAge.trim()) errs.userAge = "Age is required";
    else if (!/^[1-9][0-9]{0,2}$/.test(userAge))
      errs.userAge = "Age must be a positive number";

    // ✅ Email: simple regex
    if (!userEmail.trim()) errs.userEmail = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail))
      errs.userEmail = "Invalid email format";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleAddUser = async () => {
    if (!validate()) return; // stop if validation fails

    try {
      setLoading(true);

      const newUser = {
        firstName: userName,
        age: userAge,
        email: userEmail,
      };

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) throw new Error("Failed to add user");

      alert("User added successfully ✅");
      setUserName("");
      setUserAge("");
      setUserEmail("");
      setErrors({});
    } catch (error) {
      console.error(error);
      alert("Error while adding user ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "#020617",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}
        >
          Add New User
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{
            ...inputStyle,
            borderColor: errors.userName ? "#ef4444" : "#334155",
          }}
        />
        {errors.userName && <span style={errorStyle}>{errors.userName}</span>}

        <input
          type="number"
          placeholder="Age"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
          style={{
            ...inputStyle,
            borderColor: errors.userAge ? "#ef4444" : "#334155",
          }}
        />
        {errors.userAge && <span style={errorStyle}>{errors.userAge}</span>}

        <input
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          style={{
            ...inputStyle,
            borderColor: errors.userEmail ? "#ef4444" : "#334155",
          }}
        />
        {errors.userEmail && <span style={errorStyle}>{errors.userEmail}</span>}

        <button onClick={handleAddUser} style={buttonStyle}>
          {loading ? "Adding..." : "Add User"}
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "5px",
  borderRadius: "6px",
  border: "1px solid #334155",
  outline: "none",
  color: "#fff",
  background: "#020617",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#4d89e9",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  marginTop: "10px",
};

const errorStyle = {
  color: "#ef4444",
  fontSize: "12px",
  marginBottom: "8px",
  display: "block",
};
