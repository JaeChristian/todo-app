import { useEffect, useState } from "react";
import requestHeaders from "../utils/requestHeaders";

function useAutoSave(data, currentTaskId, delay = 500) {
  const api = requestHeaders(`tasks/${currentTaskId}`);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (currentTaskId) {
      const timeoutId = setTimeout(() => {
        api
          .put("/", data)
          .then((res) => {
            console.log(res.data, "saved");
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {});
      }, delay);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [data, delay, currentTaskId, api]);
}
export default useAutoSave;
