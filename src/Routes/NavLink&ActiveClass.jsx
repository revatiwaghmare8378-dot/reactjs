import { NavLink, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Home from "../Pages/Home";
import "../Styles/NavBar.css";
import Departments from "../Pages/Departments";
import UserList from "../Pages/UserList";
import UserDetails from "../Pages/UserDetails";

export default function NavLinkActiveClass() {
  return (
    <>
      <h1>NavLink and Active Class</h1>

      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" className="logo">
            App<span>Logo</span>
          </NavLink>
        </div>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className="nav-link"
              // className={({ isActive }) =>
              //     isActive ? "nav-link custom" : "nav-link"
              //   }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/department" className="nav-link">
              Department
            </NavLink>
          </li>
          <li>
            <NavLink to="/user" className="nav-link">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/101" className="nav-link">
              User 101
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* ✅ Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/user/department" element={<Departments />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />

        {/* ✅ Optional Segment: Matches both /user and /user/:id */}
        <Route path="/user/:id?" element={<UserDetails />} />
      </Routes>
    </>
  );
}
