import React, {useState, useEffect} from 'react'
import style from "./AddUserForm.module.css";

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )

    const handleInputChange = event => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateUser(user.id, user)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`${style.div}`}
        >
            <label></label>
            <input
                className={`form-control form-control-sm ${style.input}`}
                type="text"
                name="name"
                placeholder={`Name`}
                value={user.name}
                onChange={handleInputChange}
            />
            <label></label>
            <input
                className={`form-control form-control-sm ${style.input}`}
                type="email"
                name="email"
                placeholder={`Email`}
                value={user.email}
                onChange={handleInputChange}
            />
            <label></label>
            <input
                className={`form-control form-control-sm ${style.input}`}
                type="text"
                name="picture"
                placeholder={`Ava`}
                value={user.picture}
                onChange={handleInputChange}
            />

            <label></label>
            <input
                className={`form-control form-control-sm ${style.input}`}
                type="text"
                name="role"
                placeholder={`Role`}
                value={user.role}
                onChange={handleInputChange}
            />

            <button
                className={`btn btn-secondary btn-sm ${style.button} `}
            >
                Update
            </button>
            <div></div>
            <button
                className={`btn btn-secondary btn-sm ${style.button} `}
                onClick={() => props.setEditing(false)}
            >
                Cancel
            </button>
        </form>
    )
}

export {EditUserForm}
