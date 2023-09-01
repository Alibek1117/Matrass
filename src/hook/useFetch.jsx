import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const res = await req.json();
        setData(res);
        setLoader(false);
      } catch (err) {
        setError(err.message);
        setLoader(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loader, error };
};

export { useFetch };
