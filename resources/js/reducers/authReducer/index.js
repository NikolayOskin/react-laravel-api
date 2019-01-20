import { GET_TOKEN, CHECK_TOKEN } from "../../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isTokenValid: false,
    isLoggedIn: false
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_TOKEN:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                isTokenValid: true,
                token: action.payload,
                isLoggedIn: true
            };
        case CHECK_TOKEN:
            return {
                ...state,
                isTokenValid: action.payload,
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
}