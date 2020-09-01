import {
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS, DELETE_USER_FAILURE,
    DELETE_USER_SUCCESS, FETCH_FILTER_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS, UPDATE_USER_FAILURE,
    UPDATE_USER_SUCCESS
} from "../actions/types";

let initialState = {
    items: []
};

function usersWork(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                items: [...action.payload],
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                items: [],
            }
        case DELETE_USER_SUCCESS: {
            const user_id = action.id
            return {
                ...state,
                items: state.items.filter(user => user.id !== user_id),
            }
        }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                items: state.items.concat(action.payload),
            }
        case UPDATE_USER_SUCCESS: {
            const {id, ...rest} = action.payload
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === id) {
                        return {...user, ...rest}
                    }
                    return user
                }),
            }
        }

        case FETCH_FILTER_USERS_SUCCESS:
            return {
                ...state,
                items: [...action.payload],
            }

        case CREATE_USER_FAILURE:
        case DELETE_USER_FAILURE:
        case UPDATE_USER_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default usersWork