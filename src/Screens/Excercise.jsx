function Excercise(params) {
  function callFun() {
    alert("function called");
  }
  return (
    <>
      <div>
        <h1>Todos</h1>
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPqFo1Uqo8BBougNr1zC5FuYbvdOLomfXYFJI-0HU9SeUZfkddWg-ouO4u2GbJcoCJRF7FDIw"
          alt="Image"
          className="photo"
        />
        <ul>
          <li> Invent new traffic lights </li>
          <li> Rehearse a movie scene </li>
          <li>Improve the spectrum technology</li>
        </ul>

        <button onClick={() => callFun()}>Click Me</button>
      </div>
    </>
  );
}
export default Excercise;
