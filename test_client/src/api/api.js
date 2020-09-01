import axios from 'axios';

const instance = axios.create({
    headers: {
        contentType: 'application/json'
    },
    baseURL: `http://localhost:9000/`,
})

export const getUsersApi = () => {
    return instance.get(`/users/`)
        .then(function (response) {
            return response.data
        })
}

export const createUserApi = (user) => {
    return instance.post(`users`, user)
        .then(response => response.data)
}

export const deleteUserApi = (id) => {
    return instance.delete(`/users/${id}`)
        .then(response => response.data)
}

export const updateUserApi = (user) => {
    return instance.put(`/users/${user.id}`, user)
}

export const getFilterUsersApi = (data) => {
    return instance.get(`/users/`,
        {
            params: data
        })
        .then(function (response) {
            return response.data
        })
};