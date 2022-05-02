import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
//import counter, { watchCounter } from '@/pages/basic/counter';
import login, { loginSaga } from './auth/login';
import register,{ registerSaga } from './auth/register';

const rootReducer = combineReducers({
 register, login
});

export function* rootSaga() {
  yield all([registerSaga(), loginSaga()]);
}

export default rootReducer;