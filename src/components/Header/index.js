import React from 'react';
// import './style.scss';
import styles from './style.module.scss'
import Menu from './components/Menu';
import Logo from './components/Logo';
import Contact from './components/Contact';

// const styles = {
//     background: 'red',
//     height: '50px'
// }

// import {HeaderStyled} from './style'

class Header extends React.Component {
    render() {
        return(
            // <header className ='header'>Header</header>
            // <header style = {styles}>Header</header>
            <header className = {styles.header}>
                <Logo/>
                <Menu/>
                <Contact/>
            </header>
            // <HeaderStyled>Header</HeaderStyled>
        )
    }
}

export default Header;