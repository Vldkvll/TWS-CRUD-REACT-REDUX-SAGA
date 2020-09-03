import {AddUserForm} from '../forms/AddUserForm'
import React from 'react'
import classes from "./Add.module.css";

const Add = ({addUser}) => {

    return (
        <div className={classes.div}>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}/>
        </div>
    )
}
export {Add};