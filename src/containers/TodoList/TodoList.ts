import RootState from 'src/models/states';
import {
    TodoListConnectedProps,
    TodoListDispatchProps
} from 'src/components/TodoList/TodoListProps';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList/TodoList';
import * as TodoActions from 'src/actions/Todo/TodoActionCreator';
import { ActionType } from 'typesafe-actions';

type TodoAction = ActionType<typeof TodoActions>;

const mapStateToProps = (state: RootState): TodoListConnectedProps => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>): TodoListDispatchProps => ({
    getTodoItems: () => dispatch(TodoActions.getTodos.request())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);