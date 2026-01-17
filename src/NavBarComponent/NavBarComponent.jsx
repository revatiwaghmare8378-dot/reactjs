import { Link, Outlet } from "react-router";
import "../Styles/NavBar.css";

export default function NavBarComponent() {
  return (
    <div>
      <div className="navbar">
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
      </div>

      <Outlet />
    </div>
  );
}
