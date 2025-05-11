import { useEffect, useState } from "react";

type PostType = {
    userId: string;
    id: string;
    title: string;
    body: string;
};

export const useFetchPosts = () => {
    const [load, setLoad] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [data, setData] = useState<PostType[]>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoad(true);
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos"
                );
                if (!response.ok) {
                    throw new Error(`Ошибка запроса: ${response.status}`);
                }
                const dataTodos = await response.json();
                setData(dataTodos);
                return dataTodos;
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Unknown error");
                }
            } finally {
                setLoad(false);
            }
        };

        fetchPosts();
    }, []);

    return {
        load,
        error,
        data,
    };
};
