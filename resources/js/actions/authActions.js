import { GET_TOKEN } from "./types";
import axios from 'axios';

const credentials = {
    username: 'homenick.astrid@example.net',
    password: 'secret',
    grant_type: 'password',
    client_id: 2,
    client_secret: 's9X6p3B2Rkc8H1pQBwZhm83iDnM7jMXO64Ju1G7A',
};

export const login = () => {
    return (dispatch) => {
        axios.post('/oauth/token', credentials)
            .then(response => dispatch({
                type: GET_TOKEN,
                payload: response.data.access_token
            }))
            .catch(error => {
                throw(error);
            });
    }
};