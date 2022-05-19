import { createContext, ReactNode, useContext, useReducer } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  check: boolean;
};

type State = {
  tasks: Task[];
};

type Action = {
  type: toDoActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type TaskProviderProps = {
  children: ReactNode;
};

const initialTask: Task = {
  id: 0,
  title: "Task inicial",
  description: "text da task inicial",
  check: true,
};

const initialData: State = {
  tasks: [initialTask],
};

const ToDoContext = createContext<ContextType | undefined>(undefined);

export enum toDoActions {
  createTask,
  editTask,
  deleteTask,
  reorderTask,
}

const toDoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case toDoActions.createTask:
      return { ...state, tasks: action.payload };
    case toDoActions.editTask:
      return { ...state, tasks: action.payload };
    case toDoActions.deleteTask:
      return { ...state, tasks: action.payload };
    case toDoActions.reorderTask:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export const ToDoProvider = ({ children }: TaskProviderProps) => {
  const [state, dispatch] = useReducer(toDoReducer, initialData);
  const value = { state, dispatch };
  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export const useTask = () => {
  const context = useContext(ToDoContext);
  if (context === undefined) {
    throw new Error("useTask só pode ser utilizado dentro do taskProvider");
  }
  return context;
};
