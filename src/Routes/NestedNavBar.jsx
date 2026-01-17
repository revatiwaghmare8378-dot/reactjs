import { Link, Navigate, Route, Routes } from "react-router";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Home from "../Pages/Home";
import "../Styles/NavBar.css";
import PageNotFound404 from "../Pages/PageNotFound404";
import College from "../Pages/College";
import Students from "../Pages/Student";
import Faculty from "../Pages/Faculty";

export default function NestedNavBar() {
  return (
    <>
      <h1>Nested NavBar</h1>

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
            <Link to="/college" className="nav-link">
              College
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />\
        {/* 🔹 Version 1: Using <Routes> inside the College component.Navigation links for internal pages 
         <Route path="/college/*" element={<College />} /> */}
        {/*
          -----------------------------
          ✅ Version 2: Using <Outlet /> Navigation links for sub-routes
          -----------------------------
          - Here, 'College' acts as a parent route.
          - All its subroutes (student, faculty) are declared as child <Route> inside this block.
          - Inside the College component, <Outlet /> will render the nested route.
        */}
        <Route path="/college" element={<College />}>
          {/* These are child routes of /college */}
          <Route path="student" element={<Students />} />
          <Route path="faculty" element={<Faculty />} />
        </Route>
        {/* 404 or Redirect Handling
          Option 1: Show a custom 404 page

           <Route path="/*" element={<PageNotFound404 />} /> */}
        {/* Option 2: Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}
