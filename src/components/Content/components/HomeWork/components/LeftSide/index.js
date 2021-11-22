import React, { useState } from 'react';
import Input  from 'components/Form/Input';
import styles from './style.module.scss';

const LeftSide = () => {
    const [value, setValue] = useState('');

    const onChangeInput = (value) => {
        setValue(value)
    }

    return (
        <div className={styles.leftSide}>
            <Input onChange={onChangeInput} value={value}/>
            <div>{value}</div>
        </div>
    )
} 

export default LeftSide;