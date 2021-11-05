import React from 'react';
import styles from './style.module.scss';
import MenuItem from './components/MenuItem';

class Menu extends React.Component {
    render() {
        return(
            <ul className={styles.menu}>
                <MenuItem title='Курсы'/>
                <MenuItem title='Мастер-классы'/>
                <MenuItem title='Преподаватели'/>
                <MenuItem title='Блог'/>
                <MenuItem title='Контакты'/>
            </ul>
        )
    }
}

export default Menu;