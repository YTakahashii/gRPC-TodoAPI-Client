import * as React from 'react';
import AddTodoFormProps from './AddTodoFormProps';
import AddTodoFormState from './AddTodoFormState';
import * as todo_grpc_pb from '../../models/proto/TodoServiceClientPb';
import * as todo_pb from '../../models/proto/todo_pb';

export default class AddTodoForm extends React.Component<AddTodoFormProps, AddTodoFormState> {
    constructor(props: AddTodoFormProps) {
        super(props);

        this.state = {
            input: ''
        };

        const client = new todo_grpc_pb.TodoServiceClient('http://127.0.0.1:8080', {}, {});
        const request = new todo_pb.Empty();

        client.getTodoItems(request, {}, (error, response) => {
            if (error) {
                console.log('Error: ', error);
            } else {
                console.log(response.toObject());
            }
        });
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type='text'
                        value={this.state.input}
                        onChange={this.onInputChange}
                        aria-label='todo-input'
                    />
                    <button type='submit' className='todo-submit'>
                        Todoを追加
                    </button>
                </form>
            </div>
        );
    }

    public onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            input: e.currentTarget.value
        });
    };

    public onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!this.state.input.trim()) {
            return;
        }

        this.props.addTodo(this.state.input);

        this.setState({
            input: ''
        });
    };
}
