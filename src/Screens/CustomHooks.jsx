import useToggle from "../CustomHooks/useToggle";

export default function CustomHooks(params) {
  const [value, toggleValue] = useToggle(true);

  return (
    <div>
      <h1>Custom Hooks</h1>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={() => toggleValue(false)}>Hide Heading</button>
      <button onClick={() => toggleValue(true)}>Show Heading</button>
      {value ? <h2>This is a Custom Hooks toggled heading</h2> : null}
    </div>
  );
}
