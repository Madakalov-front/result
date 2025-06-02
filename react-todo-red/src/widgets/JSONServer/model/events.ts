import { Dispatch, SetStateAction } from "react";
import { CardProps } from "../types";

export const handleGetTodos = (
    data: CardProps[],
    setData: Dispatch<SetStateAction<CardProps[]>>
) => {
    setData(data);
};

export const handlePostTodos = (
    data: CardProps,
    setData: Dispatch<SetStateAction<CardProps[]>>
) => {
    setData((prev) => [...prev, data]);
};

export const handlePutTodos = (
    data: CardProps,
    setData: Dispatch<SetStateAction<CardProps[]>>
) => {
    setData(
        (prev) =>
            (prev = prev.map((todo) =>
                todo.id === data.id ? { ...todo, title: data.title } : todo
            ))
    );
};

export const handleDeleteTodos = (
    data: CardProps,
    setData: Dispatch<SetStateAction<CardProps[]>>
) => {
    setData((prev) => (prev = prev.filter((todo) => todo.id !== data.id)));
};
