import { useEffect, useState } from 'react';
import { CardProps } from '@/widgets/JSONServer/types';
import { database } from '../model/firebase';
import { onValue, ref } from '@firebase/database';

export const useFirebaseGetTodos = () => {
    const [data, setData] = useState<CardProps[]>([]);
    const [load, setLoad] = useState<boolean>(true);
    const [err, setErr] = useState<string>('');

    useEffect(() => {
        const db = database;
        const todosRef = ref(db, 'todos');

        const unsubscribe = onValue(todosRef, (snapshot) => {
            const todosObj = snapshot.val();
            if (todosObj) {
                const todosList: CardProps[] = Object.values(todosObj);
                setData(todosList);
            } else {
                setData([]);
            }
            setLoad(false);
        }, (error) => {
            setErr(error.message);
            setLoad(false);
        });

        return () => unsubscribe(); // отписка
    }, []);

    return { data, load, err };
};
