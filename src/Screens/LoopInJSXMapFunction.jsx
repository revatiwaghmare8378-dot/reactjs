import { useState } from "react";
import "../Styles/TableStyles.css"; // Import CSS

function LIJSXMapFunction() {
  const [userData] = useState([
    { name: "Peter", age: "31", email: "peter@gmail.com", id: 1 },
    { name: "Anil", age: "20", email: "anil@gmail.com", id: 2 },
    { name: "Sunil", age: "22", email: "sunil@gmail.com", id: 3 },
    { name: "Ravi", age: "23", email: "ravi@gmail.com", id: 4 },
  ]);

  return (
    <div className="container">
      {/* Reuse Component in loop */}
      <h1>Loop in JSX with Map Function</h1>

      {/* Dynamic Table */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Dummy Data</h1>

      {/* Static Table */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>20</td>
            <td>anil@gmail.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sunil</td>
            <td>22</td>
            <td>sunil@gmail.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ravi</td>
            <td>23</td>
            <td>ravi@gmail.com</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Peter</td>
            <td>31</td>
            <td>Peter@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LIJSXMapFunction;

// import { useState } from "react";

// function LIJSXMapFunction(params) {
//   const [userData, setUserData] = useState([
//     { name: "Peter", age: 31, email: "Peter@gmail,com", id: 1 },
//     { name: "Anil", age: 20, email: "anil@gmail,com", id: 2 },
//     { name: "Sunil", age: 22, email: "sunil@gmail,com", id: 3 },
//     { name: "Ravi", age: 23, email: "Ravi@gmail,com", id: 4 },
//   ]);
//   return (
//     <div>
//       <h1>Loop in JSX with Map Function</h1>
//       <table>
//         <thead>
//           <tr>
//             <td>Id</td>
//             <td>Name</td>
//             <td>Age</td>
//             <td>Email</td>
//           </tr>
//         </thead>
//         <tbody>
//           {userData.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//               <td>{item.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h1>Dummy Data</h1>
//       <table border={1}>
//         <thead>
//           <tr>
//             <td>Id</td>
//             <td>Name</td>
//             <td>Age</td>
//             <td>Email</td>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Anil</td>
//             <td>20</td>
//             <td>anil@gmail.com</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>Anil</td>
//             <td>20</td>
//             <td>anil@gmail.com</td>
//           </tr>{" "}
//           <tr>
//             <td>1</td>
//             <td>Anil</td>
//             <td>20</td>
//             <td>anil@gmail.com</td>
//           </tr>{" "}
//           <tr>
//             <td>1</td>
//             <td>Anil</td>
//             <td>20</td>
//             <td>anil@gmail.com</td>
//           </tr>{" "}
//           <tr>
//             <td>1</td>
//             <td>Anil</td>
//             <td>20</td>
//             <td>anil@gmail.com</td>
//           </tr>{" "}
//           <tr>
//             <td>1</td>
//             <td>Anil</td>
//             <td>20</td>
//             <td>anil@gmail.com</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default LIJSXMapFunction;
