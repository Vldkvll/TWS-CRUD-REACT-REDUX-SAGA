import React, {useState} from 'react'
import ava from '../../assets/ava.jpg'
import style from './userTable.module.css'

const UserTable = ({users, deleteUser, editRow, filterUser}) => {
    const initialFormState = {name: '', email: '', role: '', startDate: ''}
    const [user, setUser] = useState(initialFormState)

    const handleDeleteUser = id => {
        let answer = window.confirm('Are you sure?')
        if (answer) {
            deleteUser(id)
        }
    }

    const handleInputChange = event => {
        const {name, value} = event.currentTarget
        setUser({...user, [name]: value})
    }

    const handleApplyFilterOnClick = event => {
        Object.keys(user).forEach((key) => (user[key] === "") && delete user[key]);
        filterUser(user)
        setUser(initialFormState)
    }

    return (
        <table className={`${style.tableControl} table table-hover`}>
            <thead>
            <tr className={`table-light`}>
                <td><img className={style.imgControl} src={` ${ava}`} alt=""/></td>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Date</th>
            </tr>
            <tr>
                <td><img className={style.imgControl} src={` `} alt=""/></td>
                <th>
                    <input
                        value={user.name}
                        name={`name`}
                        type="text"
                        className={`form-control form-control-sm`}
                        placeholder={`Filter Name`}
                        onChange={handleInputChange}
                    />
                </th>
                <th>
                    <input
                        value={user.email}
                        name={`email`}
                        type="text"
                        className={`form-control form-control-sm`}
                        placeholder={`Filter Email`}
                        onChange={handleInputChange}
                    />
                </th>
                <th>
                    <input
                        value={user.role}
                        name={`role`}
                        type="text"
                        className={`form-control form-control-sm`}
                        placeholder={`Filter Role`}
                        onChange={handleInputChange}
                    />
                </th>
                <th>
                    <input
                        value={user.startDate}
                        name={`startDate`}
                        type="text"
                        className={`form-control form-control-sm`}
                        placeholder={`Filter Date`}
                        onChange={handleInputChange}
                    />
                </th>
                <th>
                    <button
                        className={`btn btn-secondary btn-sm `}
                        onClick={() => handleApplyFilterOnClick()}
                    >
                        Apply
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {users.length > 0 ? (
                users.map(user => (
                    <tr key={user.id}>
                        <td><img className={style.imgControl} src={` ${user.picture}`} alt=""/></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user.createdAt}</td>
                        <td>
                            <button
                                onClick={() => {
                                    editRow(user)
                                }}
                                className="button muted-button btn btn-outline-primary"
                            >
                                Edit
                            </button>
                            &nbsp;
                            <button
                                className="button muted-button btn btn-outline-primary"
                                onClick={() => handleDeleteUser(user.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export {UserTable}
