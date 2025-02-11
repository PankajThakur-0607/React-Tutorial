import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        let allData = await response.json();
        setData(allData[currency]);
      } catch (error) {
        console.log({ Message: error.Message, name: error.name });
      }
    };
    fetchData();
  }, [currency]);

  // console.log(data);

  return data;
}

export default useCurrencyInfo;
