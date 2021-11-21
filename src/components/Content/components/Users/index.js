import React, { useEffect, useState } from 'react';
import List from './components/List';

const usersList =[
    { id: 1, name: 'Дима', age: 15 },
    { id: 2, name: 'Вася', age: 20 },
    { id: 3, name: 'Петя', age: 23 },
    { id: 4, name: 'Василий', age: 12 },
    { id: 5, name: 'Дмитрий', age: 65 },
    { id: 6, name: 'Петр', age: 43 },
    { id: 7, name: 'Жанна', age: 32 },
];

const UsersContext = React.createContext();
const { Provider } = UsersContext;

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(usersList);
    }, []);

    const deleteUser = (id) => {
        const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    }

    return (
        <Provider value={{ users, deleteUser }}>
            <List onDeleteUser={deleteUser} items={users} />
        </Provider>
    )
}

export {
    UsersContext
};

export default Users;