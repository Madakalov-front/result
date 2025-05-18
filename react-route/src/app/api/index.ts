import axios from "axios";

const BASE_URL = "/api";

const getTodos = async () =>
    axios
        .get(`${BASE_URL}/todos`)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Ошибка при получении данных:", error);
        });

const addTodo = (TodoProps: { title: string; completed: false }) =>
    axios.post(`${BASE_URL}/todos`, TodoProps);

const deleteTodo = (id: string) => axios.delete(`${BASE_URL}/todos/${id}`);

const toggleTodo = (id: string, completed: boolean) =>
    axios.patch(`${BASE_URL}/todos/${id}`, { completed: completed });

const getTodoById = async (id: string | number) =>
    axios
        .get(`${BASE_URL}/todos/${id}`)
        .then((res) => res.data)
        .catch((err) => {
            console.error("Ошибка при получении задачи:", err);
        });

export { toggleTodo, getTodos, addTodo, deleteTodo, getTodoById };
