import { User } from "@/common/user.interface";

const url = "https://jsonplaceholder.typicode.com/users";
const headers = { 'Content-type': 'application/json' };

export const getUsers = async () => {
    const res = await fetch(url)
    const users = await res.json();
    return users
}

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
    const body = JSON.stringify(user)
    const method = 'POST'
    return await (await fetch(url, { body, method, headers })).json();
}

export const editUser = async (user: User): Promise<User> => {
    const body = JSON.stringify(user)
    const method = 'PUT'
    return await (await fetch(`${url}/${user.id}`, { body, method, headers })).json()
}