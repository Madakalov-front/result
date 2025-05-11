import { Dispatch, SetStateAction } from "react";
import { CardProps } from "../../types";

export const useFetchDeleteTodos = (
    setData: Dispatch<SetStateAction<CardProps[]>>
) => {
    const fetchDelete = async (id: string) => {
        await fetch(`api/todos/${id}`, {
            method: "DELETE",
        });

        setData((prev) => [...prev.filter((todo) => todo.id !== id)]);
    };
    const handleDeleteTodos = async (id: string) => {
        fetchDelete(id);
    };

    return { handleDeleteTodos };
};
