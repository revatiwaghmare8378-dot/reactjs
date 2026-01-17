import Wrapper from "./Wrapper";

// function User({ name = "Anil", age, email, user }) {
// name = "Anil"--->Default Props
function User({ name, age, email, user }) {
  return (
    // <div>
    //   <h1>User Component</h1>
    //   {/* <h1>Name: {name}</h1>
    //   <h1>Age: {age}</h1>
    //   <h1>Email: {email}</h1> */}

    //   {/* **********Passing Object************** */}
    //   <hr />
    //   {user && (
    //     <>
    //       <h1>Name: {user?.name}</h1>
    //       <hr />
    //       <h1>Age: {user?.age}</h1>
    //       <hr />
    //       <h1>Email: {user?.email}</h1>
    //     </>
    //   )}
    //   {name && <h1>Student Name: {name}</h1>}
    // </div>

    // **************WRAPPERRRRR****************
    <div>
      <Wrapper color="orange">
        <h1>Hello Wrapper</h1>
      </Wrapper>

      <Wrapper color="yellow">
        <h1>Hello Sam</h1>
        <h2 style={{ color: "red" }}>Please Login</h2>
      </Wrapper>

      <Wrapper>
        <h1>Hello Nick</h1>
        <h2 style={{ color: "red" }}>Please Login</h2>
      </Wrapper>
    </div>
  );
}
export default User;
