import React, { useEffect } from "react";
import { useState, useCallback, useRef } from "react";
function PassWordGenerate() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    console.log(passwordRef.current);
    passwordRef.current?.setSelectionRange(0 , 5);
    window.navigator.clipboard.writeText(password);
  };
  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_+={}[]~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  useEffect(() => {
    passwordGenerate();
  }, [length, passwordGenerate, numberAllowed, charAllowed]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg text-orange-400 bg-gray-700 px-4 py-4 my-8">
        <h1 className="text-center text-white text-2xl my-3">
          PassWord Generator
        </h1>

        <div className="w-full flex my-2">
          <input
            className="rounded-l-2xl border-amber-50 border-2  px-3 py-1  w-full outline-none"
            type="text"
            name=""
            id=""
            ref={passwordRef}
            placeholder="password"
            value={password}
            readOnly
          />
          <button
            className="rounded-r-2xl border-2  px-3 py-1 text-white hover:bg-blue-800 cursor-pointer  border-amber-100 bg-blue-600 "
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassWordGenerate;
