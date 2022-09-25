import { useEffect } from "react";
import requestHeaders from "../utils/requestHeaders";

function useAutoSave(data, currentTaskId, delay = 500) {
  const api = requestHeaders(`tasks/${currentTaskId}`);
  useEffect(() => {
    if (currentTaskId) {
      const timeoutId = setTimeout(() => {
        console.log(data, "saving");
        api
          .put("/", data)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, delay);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [data, delay, currentTaskId, api]);
}
export default useAutoSave;
