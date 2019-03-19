import { all } from 'redux-saga/effects';
import { todoSaga } from './Todo/todoSaga';

export default function* rootSaga() {
    yield all([
        ...todoSaga
    ]);
}