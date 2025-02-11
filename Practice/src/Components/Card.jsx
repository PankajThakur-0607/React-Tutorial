import React, { useEffect, useState } from "react";
function Card({ myArr, heading = "Monika" }) {
  console.log(myArr);
  console.log(heading);

  const [data, setData] = useState(0);

  return (
    <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
      <div className=" bg-black sm:p-10 p-6 rounded-xl">
        <div className="">
          <h5 className="text-xl font-bold text-gray-200">
            Science of Chemistry
          </h5>

          <p className="mt-2 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            adipisci.
          </p>
        </div>
      </div>
      <p className="bg-blue-800 p-5 m-2 text-white text-2xl"> {heading} </p>
      <p className="p-5 m-2 text-white text-2xl">
        <button
          className="border-2 p-4 rounded-xl cursor-pointer hover:bg-blue-600 transition  ease-in-out duration-300 active:bg-red-400 "
          onClick={() => setData(data + 1)}
        >
          Click to Increase the count {data}
        </button>
      </p>
    </div>
  );
}

export default Card;
