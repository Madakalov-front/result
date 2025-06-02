import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CardProps } from "../../types";

export const useFetchPutTodos = (
    setData: Dispatch<SetStateAction<CardProps[]>>
) => {
    const [valueRed, setValue] = useState<string>("");
    const [editingId, setEditingId] = useState<string | null>(null);

    const handleChangeRed = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValue(target.value);
    };
    
    const handleRedaction = (id: string | null ) => {
        setEditingId(id)
    };

    const fetchPut = async (id: string) => {
        fetch(`api/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({                
                title: valueRed,
                completed: false,
              })
        })
    }

    const handleUpdateChange = (id: string) => {
        fetchPut(id)
        setEditingId(null)
        setData(
            (prev) =>
                (prev = prev.map((todo) =>
                    todo.id === id ? { ...todo, title: valueRed || 'empty' } : todo
                ))
        );
    }

    return {
        valueRed,
        editingId,
        handleChangeRed,
        handleRedaction,
        handleUpdateChange
    };
};
