import { useState } from "react";
import "./App.css";
import PluginComponent from "./PluginComponent";

function App() {
  const [name, setName] = useState("hello");

  const opts = [
    { value: "hello", label: "Hello" },
    { value: "world", label: "World" },
  ];
  return (
    <>
      <PluginComponent pluginName={name} />
      <select value={name} onChange={(e) => setName(e.target.value)}>
        {opts.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default App;
