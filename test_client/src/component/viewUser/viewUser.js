import {EditUserForm} from '../forms/EditUserForm'
import React, {useState, useEffect} from 'react'
import {Add} from '../add/Add'
import {UserTable} from '../tables/UserTable'
import {connect} from 'react-redux'
import {CREATE_USER, DELETE_USER, FETCH_FILTER, FETCH_USERS, UPDATE_USER} from "../../redux/actions/types";


const User = ({users, onFetchUser, onDeleteUser, onCreateUser, onUpdatePost, onFetchFilterUser}) => {

    useEffect(() => {
        onFetchUser();
    }, []);

    const [editing, setEditing] = useState(false)
    const initialFormState = {id: null, picture: "somePhoto", name: '', role: ''}
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = user => {
        onCreateUser(user)
        onFetchUser();
    }

    const deleteUser = id => {
        setEditing(false)
        onDeleteUser(id)
        onFetchUser();
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        onUpdatePost({id, ...updatedUser});
        onFetchUser();

    }

    const editRow = user => {
        setEditing(true);
        onFetchUser();
        setCurrentUser({id: user.id, name: user.name, email: user.email, role: user.role})
    }

    const filterUser = data => {
        onFetchFilterUser(data)
    }

    return (
        <div className="container">
            <h1>CRUD with React & Redux-saga</h1>
            <div>
                <div>
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            < Add
                                addUser={addUser}
                            />

                        </div>
                    )}
                </div>
                <div>
                    <h2>Users Area</h2>
                    <UserTable users={users}
                               editRow={editRow}
                               deleteUser={deleteUser}
                               filterUser={filterUser}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersWorkList.items,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchUser: () => dispatch({type: FETCH_USERS}),
        onFetchFilterUser: (payload) => dispatch({type: FETCH_FILTER, payload}),
        onUpdatePost: (payload) => dispatch({type: UPDATE_USER, payload}),
        onCreateUser: (payload) => dispatch({type: CREATE_USER, payload}),
        onDeleteUser: (payload) => dispatch({type: DELETE_USER, payload})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);

