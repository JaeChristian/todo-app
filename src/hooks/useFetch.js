import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/URLhandler";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // console.log(url);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${url}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
