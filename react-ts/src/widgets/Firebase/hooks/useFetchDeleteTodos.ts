import { CardProps } from '@/widgets/JSONServer/types';
import { getDatabase, ref, remove } from 'firebase/database';
import { Dispatch, SetStateAction } from 'react';

export const useFirebaseDeleteTodos = (
    setData: Dispatch<SetStateAction<CardProps[]>>
) => {
    const db = getDatabase();

    const handleDeleteTodos = async (id: string) => {
        await remove(ref(db, `todos/${id}`));
        setData((prev) => prev.filter((todo) => todo.id !== id));
    };

    return { handleDeleteTodos };
};
