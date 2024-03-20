import { useEffect, useState } from "react";

function useFetch(url) {
  const [Data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    try {
      const response = fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  }, []);

  return { Data, Error };
}