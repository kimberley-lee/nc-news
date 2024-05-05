import axios from "axios";
import { useEffect, useState } from "react";

const clientRequest = axios.create({
  baseURL: "https://nc-news-backend-yyld.onrender.com/api",
});

export const useFetch = ({ path }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    clientRequest({ method: "GET", url: path }).then(({ data }) =>
      setData(data)
    );
  }, [path]);

  return { data };
};
