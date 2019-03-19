import * as todoServiceClientPb from 'src/models/proto/TodoServiceClientPb';
import * as todoPb from '../models/proto/todo_pb';
import Todos from 'src/models/states/Todos/Todos';
import TodoState from 'src/models/states/Todos/TodoState'

export default class TodoServiceRequests {
    // private client = new todoServiceClientPb.TodoServiceClient('http://127.0.0.1:8080', {}, {});

    // Mapper ここじゃなくて他に定義したほうが
    public mapTodoPb2TodoState = (pb: todoPb.Todo): TodoState => (
        {
            id: pb.getId(),
            text: pb.getName(),
            completed: pb.getIscomplete()
        }
    );

    public mapTodoPbArray2Todos = (pbArray: todoPb.Todo[]): Todos => {
        const todos = pbArray.map(pb => this.mapTodoPb2TodoState(pb));

        return todos;
    }

    public getTodos() {
        const client = new todoServiceClientPb.TodoServiceClient('http://127.0.0.1:8080', {}, {});
        return new Promise<todoPb.GetTodoItemsResponse>((resolve, reject) => {
            const request = new todoPb.Empty();
            client.getTodoItems(request, {}, (error, response) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(response)
                }
            });
        }).then(response => {
            return { response }
        });
    }
}