import { useEffect, useState } from "react";
import type { TodoProps } from "../types";
import styles from "../style/todo.module.css";
import { toggleTodo } from "@app/api";
import { Link } from "react-router";

export const Todo = ({ title, completed, id }: TodoProps) => {
    const [statusCompleted, setStatusCompleted] = useState<boolean>(completed);

    const handleStatus = () => {
        setStatusCompleted((prev) => (prev = !prev));
    };
    
    useEffect(() => {
        toggleTodo(id, statusCompleted);
    }, [statusCompleted, id]);

    return (
        <div className={styles.todo}>
            <label>
                <input
                    type="checkbox"
                    checked={statusCompleted}
                    onChange={handleStatus}
                />
            </label>
            <Link to={`/task/${id}`}>{title}</Link>
        </div>
    );
};
