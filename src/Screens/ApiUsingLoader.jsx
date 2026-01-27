import { useEffect, useState } from "react";

export default function ApiUsingLoader(params) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await fetch("http://localhost:3000/users");

    const data = await response.json();
    // console.log("Loader Data:", data);
    setUserData(data);
    setLoading(false);
  };
  return (
    <div
      style={{
        padding: "20px",
        color: "#fff",
        backgroundColor: "#1e293b",
        minHeight: "100vh",
      }}
    >
      <h1>API Using Loader in React Router</h1>
      <p>
        In React Router, loaders are functions that fetch data before a route is
        rendered. This ensures that the necessary data is available when the
        component mounts.
      </p>
      <p>
        Loaders can be defined in the route configuration and are executed
        automatically by React Router when navigating to that route.
      </p>
      <ul style={{ maxWidth: 600, margin: "auto", padding: 0 }}>
        {!loading ? (
          userData.map((item) => (
            <li
              key={item.id}
              style={{
                listStyle: "none",
                background: "#4d89e9ff",
                color: "#fff",
                padding: "12px",
                marginBottom: "8px",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <strong>
                {item.firstName} {item.lastName}
              </strong>
              <span style={{ color: "#2f3134ff" }}>{item.email}</span>
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  );
}
