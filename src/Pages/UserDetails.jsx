import { Link, useParams } from "react-router-dom";

export default function UserDetails() {
  const paramsData = useParams();
  console.log("User ID from URL:", paramsData);
  return (
    <div>
      <h1>User Details</h1>
      <h2>User ID: {paramsData.id}</h2>
      <h3>
        <Link to="/user">Back</Link>
      </h3>
    </div>
  );
}
