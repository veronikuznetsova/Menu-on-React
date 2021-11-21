import React, { useContext } from "react";
import styles from './style.module.scss';
import UserItem from "./components/UserItem";
import { UsersContext } from "../../index";

// const List = ({ items, onDeleteUser }) => {
const List = ({ }) => {
    const { users } = useContext(UsersContext);

    return (
        <div className={styles.list}>
            {users.map(item => (
            <UserItem 
              key={item.id}
              id={item.id}
              name ={item.name}
              age={item.age}
            />
        ))}
        </div>
    )
}

export default List;