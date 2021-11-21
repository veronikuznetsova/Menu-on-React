import React, { useCallback, useContext } from "react";
import styles from './style.module.scss';
import Button from 'components/Form/Button';
import { UsersContext } from "../../../../index";

const UserItem = ({ name, age, id }) => {

    const { deleteUser } = useContext(UsersContext);

    const onClickHandler = () => {
        deleteUser(id);
    };

    return (
        <div className={styles.item}>
            <div>{name} | {age}</div>
            <div>
                <Button onClick={onClickHandler}>Delete</Button>
            </div>
        </div>
    )
}

export default UserItem;