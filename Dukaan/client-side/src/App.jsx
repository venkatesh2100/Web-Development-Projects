import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="bg-red-500">Hello</div>
        <div className="bg-red-500">Hello</div>
        <div className="bg-red-500">Hello</div>
        <div className="bg-red-500">Hello</div>
        <div className="bg-red-500">Hello</div>
      </div>
    </>
  );
}

export default App;
