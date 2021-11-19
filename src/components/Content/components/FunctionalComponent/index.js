import React, { useEffect, useState} from "react";
import Input  from 'components/Form/Input';

// const FunctionalComponent = (props) => {
//     return (
//         <div>{props.title}</div>
//     )
// }

const FunctionalComponent = ({ title }) => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log('я обновился');
    }, []);

    useEffect(() => {
        console.log('count поменялся на ' + number);
    }, [number, count]);

    const onClickHandler = () => {
        setCount(count + 1);
    }

    const onChangeHandler = (value) => {
        // setNumber(value * 2);
        setNumber(() => {
            return value * 2
        });
    }

    return (
        <div>
            <div onClick={onClickHandler}>{count}</div>
            <Input onChange={onChangeHandler}/>
            <div>{number}</div>
        </div>
    )
}

export default FunctionalComponent;