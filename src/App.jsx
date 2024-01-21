import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%^&*()_-+={[}]|:;<,>.?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, symbolAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  const passwordRef = useRef();

  return (
    <div className="w-full max-w-md mx-auto shadow-sm rounded-lg px-4 py-3 my-8 bg-purple-500 text-white">
      <h1 className=" text-center text-4xl font-bold mb-4">
        Password Generator
      </h1>
      <div className="flex shadow-lg rounded-lg overflow-hidden">
        <input
          type="text"
          value={password}
          className=" outline-none w-full py-1 px-3 text-black font-semibold"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className=" outline-none bg-blue-900 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex mt-4 items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={25}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex mt-4 items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="Number">Numbers</label>
        </div>
        <div className="flex mt-4 items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={symbolAllowed}
            onChange={(e) => {
              setSymbolAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="symbolInput">Symbol</label>
        </div>
      </div>
    </div>
  );
}

export default App;
