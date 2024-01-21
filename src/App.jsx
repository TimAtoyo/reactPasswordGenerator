import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto shadow-sm rounded-lg px-4 py-3 my-8 bg-purple-500 text-white">
      <h1 className=" text-center text-4xl font-bold mb-4">Password Generator</h1>
      <div className="flex shadow-lg rounded-lg overflow-hidden">
    <input 
    type="text"
    value={password}
    className=" outline-none w-full py-1 px-3"
    placeholder="Password"
    readOnly
    
    />
    <button 
    className=" outline-none bg-blue-900 text-white px-3 py-0.5 shrink-0"
    >Copy</button>
      </div>
    </div>
  );
}

export default App;
