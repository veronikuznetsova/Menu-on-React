import React from 'react';
import styles from './style.module.scss';

class PhoneItem extends React.Component{
    render() {
        return(
         <a className={styles.phoneItem} href={'tel: ' + this.props.value}>{this.props.value}</a>
        )
    }
}

export default PhoneItem;