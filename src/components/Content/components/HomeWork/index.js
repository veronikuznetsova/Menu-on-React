import React, { useState, useEffect} from 'react';
import styles from './style.module.scss';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Input  from 'components/Form/Input';

const HomeWork = () => {
    const [value, setValue] = useState('');

    const onChangeInput = (value) => {
        setValue(value)
    }

    return (
        <div className={styles.homeWork}>
            <div className={styles.side}>
            <Input onChange={onChangeInput} value={value}/>
            </div>
            <div className={styles.side}>
            <Input onChange={onChangeInput} value={value}/>
            </div>
        </div>
    )
} 

export default HomeWork;