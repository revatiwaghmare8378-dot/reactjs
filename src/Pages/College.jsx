import { Routes, Route, Link, NavLink, Outlet } from "react-router";
import Faculty from "./Faculty";
import Students from "./Student";

export default function College() {
  return (
    <div>
      <h1>College</h1>
      <h6>
        <Link to="/">Go Back to Home</Link>
      </h6>
      {/* 🔹 Version 1: Using <Routes> inside the College component.Navigation links for internal pages */}
      {/* <nav>
        // Absolute paths (starting with /) are used here for NavLink components.
        // This means these links will go directly to /college/student and /college/faculty 
        <NavLink to="/college/student">Students</NavLink> |{" "}
        <NavLink to="/college/faculty">Faculty</NavLink>
      </nav>
        // 🔹 Internal routing inside the College component
      <Routes>
        // These define the nested routes that exist under /college
        // For example: /college/student → renders <Students />
        <Route path="student" element={<Students />} />
        <Route path="faculty" element={<Faculty />} />
      </Routes> */}
      {/* 🔹 Version 2: Using <Outlet /> Navigation links for sub-routes */}
      {/* Notice here we use relative paths (no / at start) */}
      {/* <NavLink to="student">Students</NavLink> */}
      <NavLink to="">Students</NavLink> {/* This is default route */}|{" "}
      <NavLink to="faculty">Faculty</NavLink>
      {/* 🔹 Outlet is a placeholder */}
      {/* React Router replaces <Outlet /> with the matching nested route component */}
      <Outlet />
    </div>
  );
}
