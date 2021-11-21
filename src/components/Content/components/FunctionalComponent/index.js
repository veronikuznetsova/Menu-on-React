import React, { useCallback, useEffect, useState, useMemo, memo} from "react";
import Input  from 'components/Form/Input';
import Button from 'components/Form/Button';

// const FunctionalComponent = (props) => {
//     return (
//         <div>{props.title}</div>
//     )
// }

const users = [
    {name: 'dima', age: 15},
    {name: 'dima2', age: 20},
    {name: 'dima3', age: 13},
    {name: 'dima4', age: 3},
    {name: 'dima5', age: 56},
]

const FunctionalComponent = ({ title }) => {
    const [count, setCount] = useState(0);
    // const [number, setNumber] = useState(0);
    const [value, setValue] = useState('');

    // useEffect(() => {
    //     console.log('я обновился');
    // }, []);

    // useEffect(() => {
    //     console.log('count поменялся на ' + number);
    // }, [number, count]);

    // const onClickHandler = () => {
    //     setCount(count + 1);
    // }

    // const adult = users.filter(user => user.age >= 10 && user.age <= 20);

    const adult = useMemo(() => {
        return users.filter(user => user.age >= 10 && user.age <= 20);
    }, []);

    const onChangeInput = (value) => {
        // setNumber(value * 2);
        setValue(value)
    }

    const onClickHandler = useCallback(() => {
        console.log('work', value)
    }, [value]);

    return (
        <div>
            {/* <div onClick={onClickHandler}>{count}</div>
            <Input onChange={onChangeHandler}/>
            <div>{number}</div> */}
            <div>
                <Input onChange={onChangeInput} />
                {value}
            </div>
            <Button onClick={onClickHandler}>click</Button>
            {adult.map(user => (
                <div>{user.name}</div>
            ))}
        </div>
    )
}

export default memo(FunctionalComponent);