import { FETCH_TASKS, NEW_TASK } from "./types";
import axios from 'axios';

let token = localStorage.getItem('token');

export const getAllTasks = () => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/tasks`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => dispatch({
                type: FETCH_TASKS,
                payload: res.data
            }))
            .catch(error => {
                throw(error);
            });
    }
};

export const addTask = (task) => {
    return (dispatch) => {
        axios.post('/api/tasks/store', task, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => dispatch({
                type: NEW_TASK,
                payload: response.data
            }))
            .catch(error => {
                throw(error);
            });
    }
};