import React, { useContext } from 'react';
import Input  from 'components/Form/Input';
import styles from './style.module.scss';
import { InputContext } from '../../index';

const LeftSide = () => {
    const {inputs, onChangeHandler} = useContext(InputContext);

    return (
        <div className={styles.leftSide}>
            <Input onChange={onChangeHandler} value={inputs} data-testid='inputLeft'/>
        </div>
    )
} 

export default LeftSide;