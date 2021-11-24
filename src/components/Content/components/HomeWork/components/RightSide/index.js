import React, { useContext } from 'react';
import Input  from 'components/Form/Input';
import styles from './style.module.scss';
import { InputContext } from '../../index';

const RightSide = () => {
    const {inputs, onChangeHandler} = useContext(InputContext);

    return (
        <div className={styles.rightSide}>
            <Input onChange={onChangeHandler} value={inputs}></Input>
        </div>
    )
} 

export default RightSide;