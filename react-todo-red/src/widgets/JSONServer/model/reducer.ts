import {
  ADD_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  REDACTION_TODO_SUCCESS,
} from "@/widgets/JSONServer/model/actions";
import { v4 as uuidv4 } from "uuid";

export interface JSONState {
  items: [
    {
      id: string;
      completed: boolean;
      title: string;
    }
  ];
  loading: boolean;
  error: null;
}

const initailState: JSONState = {
  items: [
    {
      id: uuidv4(),
      completed: false,
      title: "test title",
    },
  ],
};

export const todoReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case FETCH_TODOS_SUCCESS: {
      return { ...state, loading: false, items: action.payload };
    }
    case FETCH_TODOS_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }
    case ADD_TODO_SUCCESS: {
      return { ...state, items: [...state.items, action.payload] };
    }
    case REDACTION_TODO_SUCCESS: {
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id == action.payload.id) {
              return {
                ...item,
                title: action.payload.title,
              };
            } else {
              return item;
            }
          }),
        ],
      };
    }
    case DELETE_TODO_SUCCESS: {
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
