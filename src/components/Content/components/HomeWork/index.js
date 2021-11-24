import React, { useState} from 'react';
import styles from './style.module.scss';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const InputContext = React.createContext();
const { Provider } = InputContext;

const HomeWork = () => { 

    const [inputs, setInputs] = useState('');
    
    const onChangeHandler = (value) => {
        setInputs(value)
    }

        return(
            <Provider value={{inputs, onChangeHandler}}>
                <div className={styles.homeWork}>
                <LeftSide />
                <RightSide />
                </div>
            </Provider>
        )
}

export {
    InputContext
}

export default HomeWork;