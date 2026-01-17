// import { Link, Route, Routes } from "react-router-dom";

// import Login from "../Pages/Login";
// import About from "../Pages/About";
// import Home from "../Pages/Home";
// import "../Styles/NavBar.css";

// export default function RoutePrefix() {
//   return (
//     <>
//       <h1>Route Prefixes</h1>
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <Link to="/" className="logo">
//             App<span>Logo</span>
//           </Link>
//         </div>

//         <input type="checkbox" id="menu-toggle" className="menu-toggle" />
//         <label htmlFor="menu-toggle" className="hamburger">
//           <span></span>
//           <span></span>
//           <span></span>
//         </label>

//         <ul className="navbar-links">
//           <li>
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/user/login" className="nav-link">
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="nav-link">
//               About
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         {/* Option 1: direct prefix route */}
//         <Route path="/user/login" element={<Login />} />

//         {/* OR Option 2: nested prefix routes (if you have multiple user pages) */}
//         {/*
//         <Route path="/user">
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//         </Route>
//         */}
//       </Routes>
//     </>
//   );
// }

import { Link, Route, Routes } from "react-router-dom"; // ✅ use react-router-dom (not react-router)
import Login from "../Pages/Login";
import About from "../Pages/About";
import Home from "../Pages/Home";
import "../Styles/NavBar.css";
import Departments from "../Pages/Departments";

export default function RoutePrefix() {
  return (
    <>
      <h1>Route Prefixes</h1>

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
            {/* ✅ This path should match the route below */}
            <Link to="/user/department" className="nav-link">
              Department
            </Link>
          </li>
        </ul>
      </nav>

      {/* ✅ Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Option 1: Direct route with prefix */}
        <Route path="/user/department" element={<Departments />} />
        {/* ✅ Option 2: Nested routes for more user pages (optional) */}
        {/* 
        <Route path="/user">
          <Route path="department" element={<Departments />} />
          <Route path="details" element={<Details />} />
        </Route>
        */}
      </Routes>
    </>
  );
}
