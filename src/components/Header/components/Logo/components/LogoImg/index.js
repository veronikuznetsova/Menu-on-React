import React from 'react';
import styles from './style.module.scss';

class LogoImg extends React.Component{
    render() {
        return(
            <img className = {styles.logoImg} src = 'https://static.tildacdn.com/tild6431-3066-4264-b661-306535386264/logo.svg'></img>
        )
    }
}

export default LogoImg;