import CollageInfo from "../Components/CollageInfo";

function NestedLoop(params) {
  const collageData = [
    {
      name: "NIT",
      city: "Nashik",
      website: "www.nit.com",
      students: [
        { name: "Peter", age: "31", email: "peter@gmail.com" },
        { name: "Anil", age: "20", email: "anil@gmail.com" },
        { name: "Sunil", age: "22", email: "sunil@gmail.com" },
        { name: "Ravi", age: "23", email: "ravi@gmail.com" },
        { name: "Peter", age: "31", email: "peter@gmail.com" },
        { name: "Anil", age: "20", email: "anil@gmail.com" },
        { name: "Sunil", age: "22", email: "sunil@gmail.com" },
        { name: "Ravi", age: "23", email: "ravi@gmail.com" },
      ],
    },
    {
      name: "IET",
      city: "Surat",
      website: "www.iet.com",
      students: [
        { name: "Peter", age: "31", email: "peter@gmail.com" },
        { name: "Anil", age: "20", email: "anil@gmail.com" },
        { name: "Sunil", age: "22", email: "sunil@gmail.com" },
        { name: "Ravi", age: "23", email: "ravi@gmail.com" },
      ],
    },
    {
      name: "IIT",
      city: "Hydrabad",
      website: "www.iit.com",
      students: [
        { name: "Peter", age: "31", email: "peter@gmail.com" },
        { name: "Anil", age: "20", email: "anil@gmail.com" },
        { name: "Sunil", age: "22", email: "sunil@gmail.com" },
        { name: "Ravi", age: "23", email: "ravi@gmail.com" },
        { name: "Peter", age: "31", email: "peter@gmail.com" },
        { name: "Anil", age: "20", email: "anil@gmail.com" },
        { name: "Sunil", age: "22", email: "sunil@gmail.com" },
        { name: "Ravi", age: "23", email: "ravi@gmail.com" },
      ],
    },
    {
      name: "MIT",
      city: "Pune",
      website: "www.mit.com",
      students: [
        { name: "Peter", age: "31", email: "peter@gmail.com" },
        { name: "Anil", age: "20", email: "anil@gmail.com" },
        { name: "Sunil", age: "22", email: "sunil@gmail.com" },
        { name: "Ravi", age: "23", email: "ravi@gmail.com" },
      ],
    },
  ];
  return (
    <div>
      <h1>Nested Loop with Component</h1>
      {collageData.map((item, index) => (
        <div key={index}>
          <CollageInfo data={item} />
        </div>
      ))}
    </div>
  );
}
export default NestedLoop;
