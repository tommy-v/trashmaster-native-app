const initialState = {
    token: null,
    errorLogin: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUESTED':
            return {
                ...state,
                errorLogin: null,
            }
        case 'USER_LOGIN_SUCCEEDED':
            return {
                ...state,
                token: action.payload.token
            }
        case 'USER_LOGIN_FAILED':
            return {
                ...state,
                errorLogin: action.payload.message,
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                token: '/',
            }
        case 'USER_CLEAN_ERRORS':
            return {
                ...state,
                errorLogin: null,
            }
        default:
            return state;
    }
}
