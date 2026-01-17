import { Link } from "react-router";

function PageNotFound404() {
  return (
    <div>
      <Link to="/">Go to Home Page</Link>
      <h1>404 Error Page Not Found</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQosBgB7-7hMLqhWIlTfRlRgbWYJlba_is9Q&s" />
    </div>
  );
}

export default PageNotFound404;
