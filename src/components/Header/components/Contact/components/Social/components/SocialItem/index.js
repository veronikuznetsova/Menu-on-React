import React from 'react';
import styles from './style.module.scss';

class SocialItem extends React.Component{
    render(){
        return(
            <img className = {styles.socialItem} src = {this.props.src}></img>
        )
    }
}

export default SocialItem;