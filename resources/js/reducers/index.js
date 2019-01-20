import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import axios from 'axios';

function isLogged(state = false, action) {
    let token = localStorage.getItem('token');

        axios.get(`http://127.0.0.1:8000/api/user`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {
                return res.data;
            })




    // if (!token) {
    //     return state;
    // } else if (isValidToken()) {
    //     return true;
    // }


    //return !!localStorage.getItem('token');
}

export default combineReducers({
    auth: authReducer,
    tasks: taskReducer,
})