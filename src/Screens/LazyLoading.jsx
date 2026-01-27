import { lazy, Suspense, useState } from "react";
// import LazyLoadingComponent from "../Components/LazyLoadingComponent";
const User = lazy(() => import("../Components/LazyLoadingComponent.jsx"));

export default function LazyLoading(params) {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <h1>Lazy Loading</h1>
      {loading ? (
        <Suspense fallback={<h3>Loading...</h3>}>
          <User />
        </Suspense>
      ) : (
        "No Component Loaded Yet"
      )}
      <br />
      <button onClick={() => setLoading(true)}>Load User</button>
    </div>
  );
}
