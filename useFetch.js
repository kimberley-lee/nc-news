import axios from "axios";
import { useEffect, useState } from "react";

const clientRequest = axios.create({
  baseURL: "https://nc-news-backend-yyld.onrender.com/api",
});

export const useFetch = ({ path }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage(null);
    clientRequest({ method: "GET", url: path })
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message);
      });
  }, [path]);

  return { data, isLoading, errorMessage };
};
