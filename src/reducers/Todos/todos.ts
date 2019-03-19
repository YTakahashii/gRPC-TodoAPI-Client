import Todos from 'src/models/states/Todos/Todos';
import TodoActionType from '../../actions/Todo/TodoActionType';
import { ActionType } from 'typesafe-actions';
import * as TodoActions from 'src/actions/Todo/TodoActionCreator';

export const initialState: Todos = [];
export type TodoAction = ActionType<typeof TodoActions>;
const todos = (state: Todos = initialState, action: TodoAction): Todos => {
    switch (action.type) {
        case TodoActionType.GET_TODOS_SUCCEEDED:
            return [
                ...state.slice(state.length),
                ...action.payload
            ];
        case TodoActionType.GET_TODOS_FAILED:
            return [
                ...state.slice(state.length),
                ...initialState
            ];
        default:
            return state;
    }
};

export default todos;