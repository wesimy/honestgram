// "use strict"
export default function sessionReducer(state = {}, action) {
    switch (action.type) {
        case 'AUTH_USER_SET': {
            return {...state, user: action.payload};
        }
        //case ''
        default: return state;
    }
}

