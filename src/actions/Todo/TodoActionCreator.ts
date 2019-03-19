import TodoActionType from './TodoActionType';
import { createAsyncAction } from 'typesafe-actions';
import Todos from 'src/models/states/Todos/Todos';
import TodoState from 'src/models/states/Todos/TodoState';

export const getTodos = createAsyncAction(
    TodoActionType.GET_TODOS_REQUEST, TodoActionType.GET_TODOS_SUCCEEDED, TodoActionType.GET_TODOS_FAILED
)<undefined, Todos, Error>();

export const addTodo = createAsyncAction(
    TodoActionType.ADD_TODO_REQUEST, TodoActionType.ADD_TODO_SUCCEEDED, TodoActionType.ADD_TODOS_FAILED
)<string, Todos, Error>();

export const toggleTodo = createAsyncAction(
    TodoActionType.TOGGLE_TODO_REQUEST, TodoActionType.TOGGLE_TODO_SUCCEEDED, TodoActionType.TOGGLE_TODOS_FAILED
)<string, TodoState, Error>();

export const deleteTodo = createAsyncAction(
    TodoActionType.DELETE_TODO_REQUEST, TodoActionType.DELETE_TODO_SUCCEEDED, TodoActionType.DELETE_TODOS_FAILED
)<string, TodoState, Error>();