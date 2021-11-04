import React from 'react';
import styles from './style.module.scss';

class PhoneItem extends React.Component{
    render(){
        return(
         <a className = {styles.phoneItem} href = {this.props.href}>{this.props.title}</a>
        )
    }
}

export default PhoneItem;