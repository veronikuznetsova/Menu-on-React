import React, { useCallback, useContext } from "react";
import styles from './style.module.scss';
import Button from 'components/Form/Button';
import { UsersContext } from "../../../../index";
import { Link } from 'react-router-dom';

const UserItem = ({ name, age, id }) => {

    const { deleteUser } = useContext(UsersContext);

    const onClickHandler = () => {
        deleteUser(id);
    };

    return (
        <div className={styles.item}>
            <Link to={'/users/' + id}>{name} | {age}</Link>
            <div>
                <Button onClick={onClickHandler}>Delete</Button>
            </div>
        </div>
    )
}

export default UserItem;