import { useEffect, useState } from "react";

export const useExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData("Це приклад хука");
  }, []);

  return data;
};
