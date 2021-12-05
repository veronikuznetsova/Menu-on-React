import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import { addTodo, removeTodo, setLoading, asyncAddTodo } from 'redux_main/actions/todo';
import { add } from "lodash";

const HomePage = () => {

    const [value, setValue] = useState('');
    // const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(state => state.todo.items);
    const loading = useSelector(state => state.todo.loading);

    // const onClickHandler = () => {
    //     // dispatch({
    //     //     // type: 'ADD_TODO',
    //     //     // payload: 'custom'

    //     // });
    //     // dispatch(addTodo('custom'));
    //     // addTodo('custom');
    //     dispatch(addTodo(value));
    // }

    const onClickHandler = () => {
    //    dispatch(setLoading(true));
    //    setTimeout(() => {
    //     dispatch(addTodo(value));
    //     dispatch(setLoading(false));
    //    }, 1000);
        dispatch(asyncAddTodo(value));
    }

    const onChangeHandler = (value) => {
        setValue(value)
    }

    const onClickHandler2 = () => {
        dispatch(removeTodo(value));
    }

    return(
        <div>
            <h1>Home page</h1>
            {/* <Link className={styles.homePage} to='/kursy-programmirovaniya'>Link to course page</Link>
            <Link className={styles.homePage} to='/besplatnye-probnye-zanatia'>Link to master-class page</Link>
            <Link className={styles.homePage} to='/teachers'>Link to prepod page</Link>
            <Link className={styles.homePage} to='/blog'>Link to blog page</Link>
            <Link className={styles.homePage} to='/contact'>Link to contact page</Link>
            <Link className={styles.homePage} to='/users'>Link to users page</Link>
            <Link className={styles.homePage} to='/my-account'>My account</Link> */}
            <Button onClick={onClickHandler}>add new item</Button>
            <Input onChange={onChangeHandler}/>
            <Button onClick={onClickHandler2}>Delete user</Button> 
            {items.map(item => (
                <div key={item}>{item}</div>
            ))}
            {loading && <div>loading...</div>}
        </div>
    )
}

// function mapStateToProps(state){
//     return {
//         items: state.todo.items
//     }
// }

// const mapDispatchToProps = {
//     addTodo: addTodo
// }

// export default connect(null, mapDispatchToProps)(HomePage);
export default HomePage;