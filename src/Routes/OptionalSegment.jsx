import { Link, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Home from "../Pages/Home";
import "../Styles/NavBar.css";
import Departments from "../Pages/Departments";
import UserList from "../Pages/UserList";
import UserDetails from "../Pages/UserDetails";

export default function OptionalSegment() {
  return (
    <>
      <h1>Optional Segment</h1>

      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="logo">
            App<span>Logo</span>
          </Link>
        </div>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/user/department" className="nav-link">
              Department
            </Link>
          </li>
          <li>
            <Link to="/user" className="nav-link">
              Users
            </Link>
          </li>
          <li>
            <Link to="/user/101" className="nav-link">
              User 101
            </Link>
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

        {/* ✅ Optional Segment Route */}
        <Route path="/user/:id?" element={<UserDetails />} />
      </Routes>
    </>
  );
}
