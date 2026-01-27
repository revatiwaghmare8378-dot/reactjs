import { useEffect, useState } from "react";

export default function APIMethods(params) {
  const [usersData, setUsersData] = useState([]); // ✅ Correctly initialized as array
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://dummyjson.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setUsersData(data.users || []); // ✅ Safe access
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }

  return (
    <div
      style={{
        padding: "20px",
        color: "#fff",
        backgroundColor: "#1e293b",
        minHeight: "100vh",
      }}
    >
      <h1>API Methods in JavaScript</h1>
      <p>
        API Methods allow interaction with web services. Common methods include
        GET, POST, PUT, and DELETE.
      </p>

      {/* <button
        onClick={fetchData}
        style={{
          backgroundColor: "#2563eb",
          border: "none",
          padding: "10px 15px",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Fetch Users (GET)
      </button> */}

      {/* Error message */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Data list */}
      <ul>
        {Array.isArray(usersData) &&
          usersData.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} — {user.email}
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
}
