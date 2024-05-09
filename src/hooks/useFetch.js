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
    const controller = new AbortController();
    setIsLoading(true);
    setErrorMessage(null);
    clientRequest({ url: path, signal: controller.signal })
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message);
      });
    return () => controller.abort();
  }, [path]);

  return { data, isLoading, errorMessage, setData };
};
