import React from 'react';
import styles from './style.module.scss';
import LogoImg from './components/LogoImg';

class Logo extends React.Component{
    render() {
        return(
            <a className = {styles.logo} href = ''>
                <LogoImg/>
            </a>
        )
    }
}

export default Logo;