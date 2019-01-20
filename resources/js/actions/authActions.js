import {GET_TOKEN, REGISTER, CHECK_TOKEN} from "./types";
import axios from 'axios';

export const login = (credentials) => {
    return (dispatch) => {
        axios.post('/api/login', credentials)
            .then(response => dispatch({
                type: GET_TOKEN,
                payload: response.data.access_token
            }))
            .catch(error => {
                throw(error);
            });
    }
};

export const register = (user) => {
    return (dispatch) => {
        axios.post('/api/register', user)
            .then(response => dispatch({
                type: REGISTER,
                payload: response.data
            }))
    }
};

export const checkToken = (token) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/user`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => dispatch({
                type: CHECK_TOKEN,
                payload: res.data
            }))
            .catch(error => {
                throw(error);
            });
    }
};