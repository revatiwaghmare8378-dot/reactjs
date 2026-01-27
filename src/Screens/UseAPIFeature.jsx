import { Suspense, use } from "react";

export default function UseAPIFeature(params) {
  const fetchData = async () =>
    fetch("https://dummyjson.com/user").then((res) => res.json());

  console.log("fetchData", fetchData());

  const userResource = fetchData();

  return (
    <div>
      <h1>Use API Feature in React Js 19</h1>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Users data={userResource} />
      </Suspense>
    </div>
  );
}

const Users = ({ data }) => {
  console.log("data", data);
  const userData = use(data);
  console.log("userData", userData.users);
  return (
    <div>
      <h2>Users Data</h2>

      {userData?.users?.map((users) => (
        <div key={users.id}>
          <h6>
            Name: {users.firstName} {users.lastName}
          </h6>
        </div>
      ))}
    </div>
  );
};
