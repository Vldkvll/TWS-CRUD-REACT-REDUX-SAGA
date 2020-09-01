import {
    CREATE_USER_SUCCESS,
    DELETE_USER_SUCCESS,
    FETCH_FILTER_USERS_SUCCESS,
    FETCH_USERS_SUCCESS,
    UPDATE_USER_SUCCESS
} from "./types";

export function retriveUsers(data) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: data,
    }
}

export function deleteUser(data) {
    return {
        type: DELETE_USER_SUCCESS,
        payload: data,
    }
}

export function createUser(data) {
    return {
        type: CREATE_USER_SUCCESS,
        payload: data,
    }
}

export function updateUser(data) {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: data,
    }
}

export function retriveFilterUsers(data) {
    return {
        type: FETCH_FILTER_USERS_SUCCESS,
        payload: data,
    }
};