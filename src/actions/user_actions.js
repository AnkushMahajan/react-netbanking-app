import { LOGIN_SUCCESS } from './types'
import { LOGIN_ERROR } from './types'
import { FETCH_USER_SUCCESS } from './types'
import { FETCH_USER_ERROR } from './types'
import { LOGOUT } from './types'
import { ROOT_URL } from './types'

function loginResolve(token) {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

function loginError(error) {
    return {
        type: LOGIN_ERROR,
        payload: error
    }
}

function populateUser(user) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

function fetchUserError(error){
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}

function logOutUser(response){
    return {
        type: LOGOUT,
        payload: response
    }
}

// Action to authenticate user, returns an action with type AUTHENTICATE_USER and userToken Payload
export function authenticateUser() {

    return (dispatch) => {

        let userTokenPromise = fetch(`${ROOT_URL}auth/login`, {
            method: 'POST'
        });

        userTokenPromise.then((response) => {
            return response.json();
        }).then((data) => {
            dispatch(loginResolve(data.token))
        }).catch((error) => {
            dispatch(loginError(error))
        })
    }
}

// get user details once logged in
export function getUser() {

    return (dispatch, getState) => {
        const token = getState().loggedInDetails.token

        if (token){

            let userDetailPromise = fetch(`${ROOT_URL}auth/me/?token=${token}`,{
                method: 'GET'
            });

            userDetailPromise.then((response) => {
                return response.json();
            }).then((data) => {
                dispatch (populateUser(data));
            }).catch(error => {
                dispatch (fetchUserError(error));
            })
        } else {
            dispatch(loginError({message: 'Please log in'}));
        }
    }
}

export function logoutUser() {

    return (dispatch, getState) => {
        const token = getState().loggedInDetails.token

        if (token){

            let userLogoutPromise = fetch(`${ROOT_URL}auth/logout/?token=${token}`,{
                method: 'POST'
            });

            userLogoutPromise.then((response) => {
                dispatch (logOutUser(response));
            }).catch(error => {
                dispatch (fetchUserError(error));
            })
        } else {
            dispatch(loginError({message: 'User not logged in'}));
        }
    }
}