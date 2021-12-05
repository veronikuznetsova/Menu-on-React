import React, { useState } from "react";
import styles from './style.module.scss';
import Button from 'components/Form/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from 'redux_main/actions/count';
import { useNavigate } from "react-router";

const MasterclassPage = () => {
    const count = useSelector(state => state.count.count);

    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(addCount());
    }

//     const onClickHandler = () => {
//         setCount(count + 1);
// }
const navigate = useNavigate()

    const onClickHandler2 = () => {
        // navigate('/')
        navigate(-1);
    }   

    return(
        <div>
            <h1>Master-class page</h1>
            <Button onClick={onClickHandler}>+</Button>
            <Button onClick={onClickHandler2}>Link to home</Button>

            <div className={styles.count}>{count}</div>
        </div>
    )
}

export default MasterclassPage;