// import { useEffect, useState } from "react";

// export default function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:3000/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data.reverse());
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ textAlign: "center" }}>User List</h2>

//       {/* Header */}
//       <ul
//         style={{
//           listStyle: "none",
//           display: "grid",
//           gridTemplateColumns: "2fr 1fr 3fr",
//           background: "#0f172a",
//           color: "#fff",
//           padding: "12px",
//           fontWeight: "bold",
//           borderRadius: "8px",
//           maxWidth: "600px",
//           margin: "20px auto 10px",
//         }}
//       >
//         <li>Name</li>
//         <li>Age</li>
//         <li>Email</li>
//         <li>Edit</li>
//         <li>Action</li>
//       </ul>

//       {/* Data container */}
//       <ul style={{ maxWidth: "600px", margin: "auto", padding: 0 }}>
//         {loading && (
//           <li style={{ textAlign: "center", listStyle: "none" }}>
//             Loading users...
//           </li>
//         )}

//         {!loading && users.length === 0 && (
//           <li style={{ textAlign: "center", listStyle: "none" }}>
//             No users found
//           </li>
//         )}

//         {users.map((user) => (
//           <li
//             key={user.id}
//             style={{
//               listStyle: "none",
//               display: "grid",
//               gridTemplateColumns: "2fr 1fr 3fr",
//               background: "#4d89e9",
//               color: "#fff",
//               padding: "10px",
//               marginBottom: "8px",
//               borderRadius: "6px",
//               alignItems: "center",
//             }}
//           >
//             <span>{user.firstName}</span>
//             <span>{user.age}</span>
//             <span style={{ color: "#020617" }}>{user.email}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    id: null,
    firstName: "",
    age: "",
    email: "",
  });

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data.reverse());
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ❌ DELETE USER
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      fetchUsers();
    } catch (err) {
      console.error("DELETE ERROR:", err);
      alert("Delete failed ❌ (check json-server)");
    }
  };

  // ✏ START EDIT
  const handleEdit = (user) => {
    setEditId(user.id);
    setEditForm({
      id: user.id,
      firstName: user.firstName,
      age: user.age,
      email: user.email,
    });
  };

  // 💾 SAVE EDIT
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editForm.id,
          firstName: editForm.firstName,
          age: editForm.age,
          email: editForm.email,
        }),
      });

      if (!res.ok) {
        throw new Error("Update failed");
      }

      setEditId(null);
      fetchUsers();
    } catch (err) {
      console.error("PATCH ERROR:", err);
      alert("Update failed ❌ (check json-server)");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>User List</h2>

      {/* HEADER */}
      <ul style={headerStyle}>
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        {/* <li style={{ textAlign: "center" }}>Edit</li> */}
        {/* <li style={{ textAlign: "center" }}>Delete</li> */}
        <li style={{ textAlign: "right" }}>Action</li>
      </ul>

      {/* DATA */}
      <ul style={{ maxWidth: "900px", margin: "auto", padding: 0 }}>
        {loading && <li style={msgStyle}>Loading users...</li>}

        {!loading && users.length === 0 && (
          <li style={msgStyle}>No users found</li>
        )}

        {users.map((user) => (
          <li key={user.id} style={rowStyle}>
            {editId === user.id ? (
              <>
                <input
                  value={editForm.firstName}
                  onChange={(e) =>
                    setEditForm({ ...editForm, firstName: e.target.value })
                  }
                  style={inputStyle}
                />

                <input
                  value={editForm.age}
                  onChange={(e) =>
                    setEditForm({ ...editForm, age: e.target.value })
                  }
                  style={inputStyle}
                />

                <input
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm({ ...editForm, email: e.target.value })
                  }
                  style={inputStyle}
                />

                <button onClick={() => handleUpdate(user.id)} style={saveBtn}>
                  Save
                </button>

                <button onClick={() => setEditId(null)} style={cancelBtn}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{user.firstName}</span>
                <span>{user.age}</span>
                <span style={{ color: "#020617" }}>{user.email}</span>

                <button onClick={() => handleEdit(user)} style={editBtn}>
                  Edit
                </button>

                <button onClick={() => handleDelete(user.id)} style={deleteBtn}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- STYLES ---------- */

const headerStyle = {
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "2fr 1fr 3fr 1fr 1fr",
  background: "#0f172a",
  color: "#fff",
  padding: "12px",
  fontWeight: "bold",
  borderRadius: "8px",
  maxWidth: "900px",
  margin: "20px auto 10px",
};

const rowStyle = {
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "2fr 1fr 3fr 1fr 1fr",
  background: "#4d89e9",
  color: "#fff",
  padding: "10px",
  marginBottom: "8px",
  borderRadius: "6px",
  alignItems: "center",
  gap: "8px",
};

const inputStyle = {
  padding: "6px",
  borderRadius: "4px",
  border: "1px solid #334155",
  outline: "none",
};

const editBtn = {
  background: "#facc15",
  border: "none",
  padding: "6px",
  borderRadius: "4px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#ef4444",
  border: "none",
  padding: "6px",
  borderRadius: "4px",
  color: "#fff",
  cursor: "pointer",
};

const saveBtn = {
  background: "#22c55e",
  border: "none",
  padding: "6px",
  borderRadius: "4px",
  color: "#fff",
  cursor: "pointer",
};

const cancelBtn = {
  background: "#64748b",
  border: "none",
  padding: "6px",
  borderRadius: "4px",
  color: "#fff",
  cursor: "pointer",
};

const msgStyle = {
  textAlign: "center",
  listStyle: "none",
  marginTop: "20px",
};
