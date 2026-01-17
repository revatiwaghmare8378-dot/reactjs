import { useState } from "react";

function DerivedState() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleAddUsers = () => {
    if (user.trim() !== "") {
      // setUsers((prev) => [...prev, user.trim()]);
      setUsers([...users, user.trim()]);
      setUser("");
    }
  };

  // Derived values (computed from users)
  const totalUsers = users.length;
  const lastUser = users[users.length - 1] || "No users yet";
  const uniqueUsers = [...new Set(users)].length; //Array.from(new Set(users)).length;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Derived State in React</h1>

      <div style={styles.statsBox}>
        <div style={styles.statItem}>
          Total Users: <span style={styles.statValue}>{totalUsers}</span>
        </div>
        <div style={styles.statItem}>
          Last User: <span style={styles.statValue}>{lastUser}</span>
        </div>
        <div style={styles.statItem}>
          Unique Users: <span style={styles.statValue}>{uniqueUsers}</span>
        </div>
      </div>

      <div style={styles.inputArea}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter user name"
          style={styles.input}
        />
        <button
          onMouseEnter={(e) => (e.target.style.background = "#2563eb")}
          onMouseLeave={(e) => (e.target.style.background = "#3b82f6")}
          onClick={handleAddUsers}
          style={styles.button}
        >
          Add User
        </button>
      </div>

      <div style={styles.userList}>
        {users.length > 0 ? (
          users.map((item, index) => (
            <p key={index} style={styles.userItem}>
              {index + 1}. {item}
            </p>
          ))
        ) : (
          <p style={styles.empty}>No users added yet.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    background: "#f9fafc",
    padding: "25px 30px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Poppins, sans-serif",
    color: "#333",
  },
  heading: {
    textAlign: "center",
    color: "#3b82f6",
    marginBottom: "20px",
  },
  statsBox: {
    background: "#eef2ff",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "20px",
  },
  statItem: {
    margin: "6px 0",
    fontWeight: "500",
  },
  statValue: {
    color: "#2563eb",
    fontWeight: "bold",
  },
  inputArea: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    outline: "none",
  },
  button: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.2s",
  },
  userList: {
    borderTop: "1px solid #e5e7eb",
    paddingTop: "10px",
  },
  userItem: {
    background: "#fff",
    margin: "5px 0",
    padding: "8px 12px",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  empty: {
    color: "#999",
    textAlign: "center",
    marginTop: "10px",
  },
};

export default DerivedState;
