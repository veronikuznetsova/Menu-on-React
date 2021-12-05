import React, { useEffect, useState } from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import { removeUser } from '../../../../redux/actions/user';

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

const Users = ({removeUser, users}) => {
    // const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(usersList);
    }, []);

    // const deleteUser = (id) => {
    //     const newUsers = users.filter(user => user.id !== id);
    //     setUsers(newUsers);
    // }

    const onClickHandler = () => {
            removeUser(users);
    }

    return (
        <Provider value={{ users, deleteUser }}>
            <List onDeleteUser={onClickHandler} items={users} />
        </Provider>
    )
}

export {
    UsersContext,
    usersList
};

function mapStateToProps(state){
    return {
        users: state.user.users
    }
}

const mapDispatchToProps = {
    removeUser: removeUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);