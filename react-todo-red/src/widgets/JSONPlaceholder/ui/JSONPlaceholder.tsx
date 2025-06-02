import { useFetchPosts } from "../model";
import styles from "../style/JSONPlaceholder.module.scss";

export const JSONPlaceholder = () => {
    const { load, error, data } = useFetchPosts();
    return (
        <div className={styles.JSONPlaceholder}>
            <h1 className={styles["list-todos-title"]}>
                <span>JSON</span>Placeholder - realization
            </h1>
            {load ? (
                "...load"
            ) : (
                <ul className={styles["list-todos"]}>
                    {data.map((todos) => (
                        <li
                            key={todos.id}
                            className={styles["list-todos__item"]}
                        >
                            {todos.title}
                        </li>
                    ))}
                </ul>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};
