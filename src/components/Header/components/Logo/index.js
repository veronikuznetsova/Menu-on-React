import React from 'react';
import styles from './style.module.scss';
import LogoImage from './images/logo.svg'

class Logo extends React.Component{
    render() {
        return(
            <img className={styles.logo} href='' src={LogoImage} /> 
        )
    }
}

export default Logo;