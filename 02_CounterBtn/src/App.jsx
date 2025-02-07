import { useState, useEffect } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  let addValue = () => {
    counter = counter + 1;

    // console.log("count clicked , ", counter);

    // setCounter(counter);  // it takes vlaues as batches when only taking single values in setCounter otherwise it takes single values
    setCounter((prevCounter) => {
      // if (prevCounter > 20) {
      //   prevCounter = 0;
      // }
      return prevCounter + 1;
    });
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  let decreaseValue = () => {
    counter = counter - 1;
    // console.log("count clicked , ", counter);

    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
  };

  return (
    <>
      <h1>Pankaj Thakur</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>increase Value {counter} </button>
      <br />
      <button onClick={decreaseValue}>decrease Value {counter} </button>

      <footer>Count is {counter} </footer>
    </>
  );
}

export default App;
