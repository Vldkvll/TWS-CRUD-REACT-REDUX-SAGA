import {combineReducers} from 'redux'
import usersWork from './reducer'

const rootReducer = combineReducers({
    usersWorkList: usersWork
})

export default rootReducer;
