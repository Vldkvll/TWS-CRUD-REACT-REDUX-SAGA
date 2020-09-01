import React, {useState} from 'react'
import style from './AddUserForm.module.css'

const AddUserForm = ({addUser}) => {
    const initialFormState = {name: '', email: '', role: '', picture: ''}
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.currentTarget
        setUser({...user, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (user.name && user.email && user.role) {
            addUser(user)
            setUser(initialFormState)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`${style.div}`}>

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
            <button className={`btn btn-secondary btn-sm ${style.button} `}>Add</button>
        </form>
    )
}

export {AddUserForm}
