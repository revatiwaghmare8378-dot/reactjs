import { use, useId } from "react";

function UseIdHook(params) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        color: "#333",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#007bff" }}>
        useId Hook in React JS
      </h1>
      <UserForm />
      <hr style={{ margin: "40px 0" }} />
      <UserForm />
      {/* <UserForm />
      <hr style={{ margin: "40px 0" }} />
      <UserForm /> */}
    </div>
  );
}

function UserForm(params) {
  /**
   * Each time a component calls useId(),
   * React generates a unique and stable ID prefix for that instance.
   * It ensures no two components have the same ID (useful for accessibility).
   */
  const idPrefix = useId(); // Unique prefix for all fields

  // Multiple independent IDs for each field (useId called separately)
  const name = useId();
  const password = useId();
  const city = useId();
  const country = useId();
  const terms = useId();
  return (
    <div>
      <h1>1️⃣ Using a Single Prefix useId for All Fields</h1>
      {/*
        In this approach:
        - We use one useId() call (`idPrefix`) to create a shared prefix.
        - Then we append field names to make unique IDs like "r1-name", "r1-password", etc.
        - This makes the code cleaner if many inputs share a similar pattern.
      */}
      <form>
        <label htmlFor={idPrefix + "name"}>
          Enter User Name: {idPrefix + "name"}
        </label>
        <input id={idPrefix + "name"} type="text" placeholder="enter name" />
        <br />
        <br />

        <label htmlFor={idPrefix + "password"}>
          Enter Password: {idPrefix + "password"}
        </label>
        <input
          id={idPrefix + "password"}
          type="password"
          placeholder="enter password"
        />
        <br />
        <br />

        <label htmlFor={idPrefix + "city"}>
          Enter City: {idPrefix + "city"}
        </label>
        <input id={idPrefix + "city"} type="text" placeholder="enter city" />
        <br />
        <br />

        <label htmlFor={idPrefix + "country"}>
          Enter Country: {idPrefix + "country"}
        </label>
        <input
          id={idPrefix + "country"}
          type="text"
          placeholder="enter country"
        />
        <br />
        <br />

        <input type="checkbox" id={idPrefix + "terms"} />
        <label htmlFor={idPrefix + "terms"}>
          Accept Terms and Conditions: {idPrefix + "terms"}
        </label>
      </form>

      <hr />

      <h1>2️⃣ Using Multiple useId() Calls (One per Input)</h1>
      {/*
        In this approach:
        - Each field gets its own unique ID from a separate useId() call.
        - You have full control and flexibility, but it can be verbose.
        - Useful when fields are not related or when you need individual control.
      */}
      <form>
        <label htmlFor={name}>Enter User Name: {name}</label>
        <input id={name} type="text" placeholder="enter name" />
        <br />
        <br />

        <label htmlFor={password}>Enter Password: {password}</label>
        <input id={password} type="password" placeholder="enter password" />
        <br />
        <br />

        <label htmlFor={city}>Enter City: {city}</label>
        <input id={city} type="text" placeholder="enter city" />
        <br />
        <br />

        <label htmlFor={country}>Enter Country: {country}</label>
        <input id={country} type="text" placeholder="enter country" />
        <br />
        <br />

        <input type="checkbox" id={terms} />
        <label htmlFor={terms}>Accept Terms and Conditions: {terms}</label>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default UseIdHook;
