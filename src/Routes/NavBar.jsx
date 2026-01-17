import { Link, Navigate, Route, Routes } from "react-router";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Home from "../Pages/Home";
import "../Styles/NavBar.css";
import PageNotFound404 from "../Pages/PageNotFound404";

export default function NavBar() {
  return (
    <>
      <h1>NavBar</h1>

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
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        {/* 404 or Redirect Handling
          Option 1: Show a custom 404 page

           <Route path="/*" element={<PageNotFound404 />} /> */}

        {/* Option 2: Redirect unknown routes to login */}
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}
