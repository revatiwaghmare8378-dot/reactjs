import { useState } from "react";

function UpdatingArrayinState() {
  const [data, setData] = useState(["Alice", "Bob", "Charlie"]);
  const [newUser, setNewUser] = useState("");

  const handleUser = (value) => {
    setNewUser(value);
  };

  const addUser = () => {
    if (newUser.trim() !== "") {
      setData([...data, newUser]);
      setNewUser("");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333" }}>Updating Array in State</h1>

      <input
        type="text"
        value={newUser}
        onChange={(event) => handleUser(event.target.value)}
        placeholder="Add New User"
        style={{
          padding: "10px",
          marginRight: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={addUser}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add User
      </button>

      <div style={{ marginTop: "20px" }}>
        {data.map((item, index) => (
          <p key={index} style={{ fontSize: "18px", color: "#555" }}>
            {item}
          </p>
        ))}
      </div>

      <button
        onClick={() => setData([...data, "David"])}
        style={{
          padding: "10px 20px",
          margin: "10px",
          borderRadius: "8px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        ➕ Add "David"
      </button>

      <button
        onClick={() => setData(data.slice(0, -1))}
        style={{
          padding: "10px 20px",
          margin: "10px",
          borderRadius: "8px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        🗑️ Remove Last User
      </button>

      <button
        onClick={() => {
          const newData = data.map((item, index) =>
            index === 1 ? "Bobby" : item
          );
          setData(newData);
        }}
        style={{
          padding: "10px 20px",
          margin: "10px",
          borderRadius: "8px",
          backgroundColor: "#ffc107",
          color: "black",
          border: "none",
          cursor: "pointer",
        }}
      >
        ✏️ Update Second to "Bobby"
      </button>
    </div>
  );
}

export default UpdatingArrayinState;
