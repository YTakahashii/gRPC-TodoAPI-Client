import { Dispatch } from 'redux';
import { AddTodoFormDispatchProps } from 'src/components/AddTodoForm/AddTodoFormProps';
import { connect } from 'react-redux';
import { ActionType } from 'typesafe-actions';
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm';
import * as TodoActions from 'src/actions/Todo/TodoActionCreator';

type TodoAction = ActionType<typeof TodoActions>;
const mapDispatchToProps = (
    dispatch: Dispatch<TodoAction>
): AddTodoFormDispatchProps => ({
    addTodo: (text: string) => dispatch(TodoActions.addTodo.request(text))
});

export default connect(
    null,
    mapDispatchToProps
)(AddTodoForm);