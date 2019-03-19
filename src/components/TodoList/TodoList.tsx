import * as React from 'react';
import TodoListProps from './TodoListProps';
import Todo from '../Todo/Todo';

class TodoList extends React.Component<TodoListProps> {
  public componentDidMount() {
    const { getTodoItems } = this.props;
    getTodoItems();
  }

  public render() {
    const { todos } = this.props;
    const handleToggle = (id: string) => () => {
      console.log('');
    };

    const handleDelete = (id: string) => () => {
      console.log('');
    };
    return (
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            handleToggle={handleToggle(todo.id)}
            handleDelete={handleDelete(todo.id)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;