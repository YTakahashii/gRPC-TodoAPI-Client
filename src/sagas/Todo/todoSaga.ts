import { takeEvery, call, put } from 'redux-saga/effects';
import TodoActionType from 'src/actions/Todo/TodoActionType';
import * as TodoActions from 'src/actions/Todo/TodoActionCreator';
import { EmptyAction } from 'typesafe-actions/dist/type-helpers';
import TodoServiceRequests from 'src/requests/todoRequests';
import * as todoPb from 'src/models/proto/todo_pb';

const requests = new TodoServiceRequests();

function* getTodosRequest(action: EmptyAction<TodoActionType.GET_TODOS_REQUEST>) {
    const { response }: { response: todoPb.GetTodoItemsResponse } = yield call(requests.getTodos);
    const todoPbArray: todoPb.Todo[] | undefined  = yield response.getTodosList();
    if (todoPbArray !== undefined) {
        const todos = requests.mapTodoPbArray2Todos(todoPbArray);
        yield put(TodoActions.getTodos.success(todos));
        console.log('success')
    } else {
        console.log('error')
        yield put(TodoActions.getTodos.failure(new Error('todoPbArrayがundefinedです')));
    }
}

export const todoSaga = [
    takeEvery(TodoActionType.GET_TODOS_REQUEST, getTodosRequest)
];