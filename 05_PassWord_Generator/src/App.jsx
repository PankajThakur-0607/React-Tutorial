import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_+={}[]~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log(char);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setCharAllowed]);

  // generatePassword() // too many limits and react only gives limitied
  useEffect(() => {
    generatePassword();
  }, [numberAllowed, length, charAllowed, generatePassword]);

  // useEffect(() => {
  //   const generatePassword = () => {
  //     let pass = "";
  //     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //     if (numberAllowed) str += "0123456789";
  //     if (charAllowed) str += "!@#$%^&*()-_+={}[]~`";
  //     for (let i = 0; i < length; i++) {
  //       // Math.random() returns a number between 0 and 1, so multiplying by the string's length
  //       // and taking the floor gives a valid index between 0 and str.length - 1.
  //       const charIndex = Math.floor(Math.random() * str.length);
  //       pass += str.charAt(charIndex);
  //     }
  //     setPassword(pass);
  //   };

  //   generatePassword();
  // }, [length, numberAllowed, charAllowed]); // re-run whenever these values change

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg text-orange-400 bg-gray-800 px-4 py-4 my-8">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow-rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none bg-white w-full py-1 px-3 rounded-l-xl"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="px-3 py-1 bg-blue-700 text-white rounded-r-xl shrink-0  hover:bg-blue-400 cursor-pointer hover:transition-all hover:transform-view"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
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

export default App;
