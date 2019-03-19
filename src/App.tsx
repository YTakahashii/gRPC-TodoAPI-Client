import * as React from 'react';
import './App.css';
import AddTodoForm from './containers/AddTodoForm/AddTodoForm';
import TodoList from './containers/TodoList/TodoList';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <AddTodoForm />
                <TodoList />
            </div>
        );
    }
}

export default App;
