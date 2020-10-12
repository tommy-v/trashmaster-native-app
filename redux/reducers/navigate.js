import { NAVIGATE } from '../actions/navigate';

const initialState = {
    path: '/'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE:
            return {
                ...state,
                path: action.payload,
            }
        default:
            return state;
    }
}
