import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { getDatabase, ref, update } from 'firebase/database';
import { CardProps } from '@/widgets/JSONServer/types';

export const useFirebasePutTodos = (
    setData: Dispatch<SetStateAction<CardProps[]>>
) => {
    const [valueRed, setValue] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);

    const db = getDatabase();

    const handleChangeRed = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValue(target.value);
    };

    const handleRedaction = (id: string | null) => {
        setEditingId(id);
    };

    const handleUpdateChange = async (id: string) => {
        await update(ref(db, `todos/${id}`), {
            title: valueRed || 'empty',
            completed: false
        });

        setData((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, title: valueRed || 'empty' } : todo
            )
        );
        setEditingId(null);
    };

    return {
        valueRed,
        editingId,
        handleChangeRed,
        handleRedaction,
        handleUpdateChange,
    };
};
