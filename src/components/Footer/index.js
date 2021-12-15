import React, { useState } from 'react';
import styles from './style.module.scss';
import Button from 'components/Form/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, removeCount } from 'redux_main/actions/count';
import Input from 'components/Form/Input';
import { addTodo, setLoading, asyncAddTodo } from 'redux_main/actions/todo';

const Footer = () => {
    // const count = useSelector(state => state.count.count);

    // const dispatch = useDispatch();

    // const onClickHandler = () => {
    //     dispatch(addCount());
    // }

    // const onClickHandler2 = () => {
    //     dispatch(removeCount());
    // }

    const [value, setValue] = useState();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.todo.loading);

    const onClickHandler = () => {
        // dispatch(setLoading(true));
        // setTimeout(() => {
        //  dispatch(addTodo(value));
        //  dispatch(setLoading(false));
        // }, 1000);
        dispatch(asyncAddTodo(value));
     }

     const onChangeHandler = (value) => {
        setValue(value)
    }

        return(
            <footer className={styles.footer}>
                {/* <Button onClick={onClickHandler}>+</Button>
                <Button onClick={onClickHandler2}>-</Button> */}

            <Button onClick={onClickHandler}>add new item</Button>
            <Input onChange={onChangeHandler}/>
            <Button>Light/Dark</Button>
            </footer>
        )
}

export default Footer;