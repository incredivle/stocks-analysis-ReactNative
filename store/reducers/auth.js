import { LOGIN, SIGNUP, AUTHENTICATE, LOGOUT } from "../actions/auth";

const initialState = {
    token: null,
    userId: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case AUTHENTICATE:
            return {
                token: action.token,
                userId: action.userId
            }
        case LOGOUT:
            return initialState; // token and userId is reset to null
            
        // case SIGNUP:
        //     return {
        //         token: action.token,
        //         userId: action.userId
        //     }
        
        default:
            return state;
    }
}