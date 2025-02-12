import React, { useEffect, useState } from "react";
import { data , useLoaderData } from "react-router";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/PankajThakur-0607")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
    <div className="p-4 text-3xl text-orange-500 bg-gray-700">
      Github : {data.name}
      <img
        src={data.avatar_url}
        alt="Pankaj Thakur"
        className="w-[300px] h-[300px]"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/PankajThakur-0607");
  return response.json();
};
