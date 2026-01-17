import { Link } from "react-router-dom";

export default function UserList() {
  const userData = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  return (
    <div>
      <h1>User List</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <h4>
            <Link to={`/user/${user.id}`}>
              {user.id}: {user.name}
            </Link>
          </h4>
        </div>
      ))}
    </div>
  );
}
