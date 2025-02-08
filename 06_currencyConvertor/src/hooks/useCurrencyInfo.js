import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        let res = await response.json();
        setData(res[currency]); // Updates state correctly
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchData();
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
