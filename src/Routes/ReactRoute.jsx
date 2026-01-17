import { Link, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";

function ReactRoute() {
  return (
    <>
      <h1>React Route in React JS 18</h1>
      {/*
        🔗 <Link> Components:
        - Used to navigate between pages without reloading the browser.
        - `to` prop defines the target URL.
        - Unlike <a href="">, it doesn’t refresh the entire page.
      */}
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      {/*
        🛣️ <Routes> Component:
        - Acts as a container for all <Route> components.
        - Matches the current URL and renders the matching <Route>’s element.
      */}
      <Routes>
        {/*
          🚏 <Route> Component:
          - Defines a mapping between a URL path and a React component.
          - `path` prop = URL to match.
          - `element` prop = component to render.
        */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default ReactRoute;
