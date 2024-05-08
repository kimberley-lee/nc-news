import { useEffect, useState } from "react";
import { patchData } from "../components/api";

export const useMakeRequests = ({ article_id, body }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setErrorMessage(null);
    patchData(article_id, body)
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message);
      });
    return () => controller.abort;
  }, [path, body]);

  return { data, isLoading, errorMessage };
};
