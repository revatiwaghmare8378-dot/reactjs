import { Route, Routes } from "react-router";

import Login from "../Pages/Login";
import About from "../Pages/About";
import Home from "../Pages/Home";
import College from "../Pages/College";
import Students from "../Pages/Student";
import Faculty from "../Pages/Faculty";
import NavBarComponent from "../NavBarComponent/NavBarComponent";

export default function LayoutIndexRoute() {
  return (
    <>
      <h1>Layout and Index Route</h1>

      {/* ✅ Wrap all routes with NavBarComponent layout */}
      <Routes>
        {/* 
          This defines NavBarComponent as a "layout route".
          It means NavBarComponent will always render,
          and its <Outlet /> will show the child routes below.
        */}
        <Route element={<NavBarComponent />}>
          {/* ✅ Child routes under the layout for show NavBar for Selected Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* ✅ Nested routes for College section and hide NavBar for College Details and data */}
        <Route path="/college" element={<College />}>
          {/* index route for default data show on screen of students */}
          <Route index element={<Students />} />{" "}
          <Route path="faculty" element={<Faculty />} />
        </Route>
      </Routes>
    </>
  );
}
