import { CardProps } from "@/widgets/JSONServer/types";

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const REDACTION_TODO_SUCCESS = "REDACTION_TODO_SUCCESS";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";

const API_URL = "api/todos";

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, error });
    }
  };
};

export const addTodo = (todo: CardProps) => {
  return async (dispatch) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "applicationa/json" },
      body: JSON.stringify(todo),
    });
    const data = await res.json();
    dispatch({ type: ADD_TODO_SUCCESS, payload: data });
  };
};

export const redactionTodo = ({ id, title }: CardProps) => {
  return async (dispatch) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        completed: false,
      }),
    });
    const data = await res.json();
    dispatch({ type: REDACTION_TODO_SUCCESS, payload: data });
  };
};

export const deleteTodo = (id: string) => {
  return async (dispatch) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
  };
};
