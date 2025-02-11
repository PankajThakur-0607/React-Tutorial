import { useState } from "react";

import "./App.css";
import Card from "./Components/Card";
import BgButton from "./Components/BgButton";
import PassWordGenerate from "./Components/PassWordGenerate";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrency";

function App() {
  // let arr = [1, 2, 3];
  // let userName = "Pankaj Thakur";

  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmt] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  // console.log(currencyInfo);

  const options = Object.keys(currencyInfo);
  // console.log(options);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmt(amount);
  };
  const convert = () => {
    setConvertedAmt(() => amount * currencyInfo[to]);
  };

  return (
    //   // <div className="bg-gray-700">
    //   //   <h1 className="bg-amber-400">Pankaj Thakur</h1>
    //   //   <h2>Counter Value : {count} </h2>
    //   //   <button className="text-white cursor-pointer border-2 m-2 p-2 rounded-lg" onClick={addValue}>
    //   //     increase Value {count}{" "}
    //   //   </button>
    //   //   <br />
    //   //   <button className="text-white cursor-pointer border-2 m-2 p-2 rounded-lg" onClick={decreaseValue}>
    //   //     decrease Value {count}{" "}
    //   //   </button>

    //   //   <footer>Count is {count} </footer>
    //   // </div>
    //   // <h1></h1>
    //   <>
    //     {/*
    //        Project 1
    //     <h1 className="text-2xl font-medium ">
    //       Props and Tailwind Configuration{" "}
    //     </h1>
    //     */}

    //     {/* <Card myArr={arr} heading={userName} />
    //     <BgButton /> */}

    //     {/* Project 3 */}
    //     {/* <PassWordGenerate/> */}

    //   </>
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1736329279938-372e9e471795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(Number(amount))}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5  hover:bg-violet-800 transition ease-in-out cursor-pointer active:bg-pink-600"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                // onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={options}
                selectCurrency={to}
                // onAmountChange={(amount) => setAmount(Number(amount))}
                amountDisable
                currencyDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-violet-800 transition ease-in-out cursor-pointer active:bg-pink-600"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
