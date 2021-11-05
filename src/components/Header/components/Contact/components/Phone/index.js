import React from 'react';
import styles from './style.module.scss';
import PhoneItem from './components/PhoneItem';

class Phone extends React.Component{
    render() {
        return (
            <div className={styles.phone}>
                <PhoneItem value='+375 29 105-59-59'/>
                <PhoneItem value='+375 29 305-59-59'/>
            </div>
        )
    }
}

export default Phone;