import React, { useState } from 'react';
import Input  from 'components/Form/Input';
import styles from './style.module.scss';

const RightSide = () => {
    const [value, setValue] = useState('');

    const onChangeInput = (value) => {
        setValue(value)
    }

    return (
        <div className={styles.rightSide}>
            <Input onChange={onChangeInput} value={value}/>
        </div>
    )
} 

export default RightSide;