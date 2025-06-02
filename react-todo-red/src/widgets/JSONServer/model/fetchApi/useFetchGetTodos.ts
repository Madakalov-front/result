import { useEffect, useState } from "react";
import { CardProps } from "../../types";

export const useFetchGetTodos = () => {
  const [data, setData] = useState<CardProps[]>([]);
  const [err, setErr] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoad(true);
        const response = await fetch("api/todos/");
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const dataTodos: CardProps[] = await response.json();
        console.log(dataTodos);
        setData(dataTodos);
      } catch (error) {
        if (error instanceof Error) {
          setErr(error.message);
        }
      } finally {
        setLoad(false);
      }
    };

    fetchTodos();
  }, []);

  return {
    data,
    err,
    load,
  };
};
