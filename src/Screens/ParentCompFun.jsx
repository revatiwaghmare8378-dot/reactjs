import ChildCompFun from "../Components/ChildCompFun";

function ParentCompFun(params) {
  const displayName = (name) => {
    alert(name);
  };
  return (
    <div>
      <h1>Call Parent Component Function from Child Component</h1>
      <ChildCompFun displayName={displayName} name="Revatee" />
      <br />
      <ChildCompFun displayName={displayName} name="Arpit" />
    </div>
  );
}
export default ParentCompFun;
