function LiftingUpAddUser({ addUser }) {
  return (
    <div>
      <h1>Add User</h1>
      <input
        type="text"
        onChange={(event) => addUser(event.target.value)}
        placeholder="Enter User Name"
      />
    </div>
  );
}
export default LiftingUpAddUser;
