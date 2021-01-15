export interface AppContextInterface {
  todos: TodoInterface[];
  setTodos: (newTodos: TodoInterface) => void;
}
export interface TodoInterface {
  id: string;
  title: string;
  isDone: boolean;
}