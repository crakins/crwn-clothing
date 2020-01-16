import { UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    users: []
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload
            }
        case UserActionTypes.GET_USERS:
            return {
                ...state,
                users: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;