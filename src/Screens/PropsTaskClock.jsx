import { useState } from "react";
import ClockComponent from "../Components/ClockComponent";

function PropsTaskClock(params) {
  const [color, setColor] = useState("#3399ff");
  return (
    <div>
      <h1
        style={{
          color: "#fff",
          fontSize: "2rem",
          marginBottom: "20px",
          textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
        }}
      >
        🕒 Digital Clock
      </h1>
      <select
        defaultValue={color}
        onChange={(event) => setColor(event.target.value)}
        style={{ color: "black" }}
      >
        <option value="#3399ff">Sky Blue / Light Blue</option>
        <option value="#00ffcc">Aqua / Cyan</option>
        <option value="#ff0077">Hot Pink / Rose</option>
        <option value="#00ff00">Lime / Green</option>
        <option value="#ffcc00">Amber / Yellow</option>
      </select>
      <ClockComponent color={color} />
    </div>
  );
}
export default PropsTaskClock;
