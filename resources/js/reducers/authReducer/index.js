import { GET_TOKEN } from "../../actions/types";


export default function (state = [], action) {
    switch(action.type) {
        case GET_TOKEN:
            localStorage.setItem('token', action.payload);
            return action.payload;
        default:
            return state;
    }
}