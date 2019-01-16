import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';

function isLogged() {
    return !!localStorage.getItem('token');
}

export default combineReducers({
    token: authReducer,
    tasks: taskReducer,
    isLoggedIn: isLogged,
})