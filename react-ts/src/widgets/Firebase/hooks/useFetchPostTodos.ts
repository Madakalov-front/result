import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { getDatabase, push, ref, set } from 'firebase/database';
import { CardProps } from '@/widgets/JSONServer/types';

export const useFirebasePostTodos = (
    setData: Dispatch<SetStateAction<CardProps[]>>
) => {
    const [value, setValue] = useState('');

    const db = getDatabase();

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValue(target.value);
    };

    const handleAddTodos = async () => {
        if (value.trim() === '') return;

        const newTodoRef = push(ref(db, 'todos')); // создаёт уникальный ID
        const newTodo: CardProps = {
            id: newTodoRef.key || '', // генерируется Firebase
            title: value,
            completed: false,
        };

        await set(newTodoRef, newTodo); // сохраняем
        setData((prev) => [...prev, newTodo]);
        setValue('');
    };

    return { value, handleChange, handleAddTodos };
};
