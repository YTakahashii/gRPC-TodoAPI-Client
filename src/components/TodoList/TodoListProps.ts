import Todos from 'src/models/states/Todos/Todos';

export interface TodoListConnectedProps {
  todos: Todos;
}

export interface TodoListDispatchProps {
  getTodoItems: () => void;
}

type TodoListProps = TodoListConnectedProps & TodoListDispatchProps;
export default TodoListProps;
