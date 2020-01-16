import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const getUsers = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        let payload = response.json()
        dispatch({
            type: UserActionTypes.GET_USERS,
            payload: payload
        })
    } )
}