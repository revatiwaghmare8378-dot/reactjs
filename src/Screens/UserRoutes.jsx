import { Routes, Route, NavLink } from "react-router-dom";
import UserList from "./UserList";
import AddUserListitem from "./AddUserListitem";

export default function UserRoutes() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Make Routes and Pages for Add User and User List UI</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: 20 }}>
        <NavLink to="/" style={{ marginRight: 15 }}>
          User List
        </NavLink>
        <NavLink to="/add-user">Add User</NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUserListitem />} />
      </Routes>
    </div>
  );
}
