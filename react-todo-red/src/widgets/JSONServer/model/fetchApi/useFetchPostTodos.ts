import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CardProps } from "../../types";
import { v4 as uuidv4 } from 'uuid';

export const useFetchPostTodos = (
    setData: Dispatch<SetStateAction<CardProps[]>>
) => {
    const [value, setValue] = useState<string>('');
    
    const fetchPost = async (data: CardProps) => {
        const response = await fetch("api/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data }),
        });
        if (!response.ok) return;
        
        const dataTodo = await response.json();

        setData((prev) => [...prev, dataTodo]);
        return dataTodo;
    }

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setValue(target.value)
    }

    const handleAddTodos = async () => {
        if (value.trim() === '') return;
        const newTodo:CardProps = {
            id: uuidv4(),
            title: value || 'empty',
            completed: false,
        }
        setValue('')
        fetchPost(newTodo)
    }    
   
    return {
        value,
        handleChange,
        handleAddTodos
    }
};
