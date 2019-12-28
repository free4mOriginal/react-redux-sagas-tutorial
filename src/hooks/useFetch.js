import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [er, setEr] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json.slice(0, 10)))
      .catch(err => setEr(err));
  }, []);

  return { data, er };
}
