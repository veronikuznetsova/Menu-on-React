import React from 'react';
import styles from './style.module.scss';
import MenuItem from './components/MenuItem';

class Menu extends React.Component {
    render() {
        return(
            <ul className={styles.menu}>
                <MenuItem to='/kursy-programmirovaniya' title='Курсы'/>
                <MenuItem to='besplatnye-probnye-zanatia' title='Мастер-классы'/>
                <MenuItem to='teachers' title='Преподаватели'/>
                <MenuItem to='blog' title='Блог'/>
                <MenuItem to='contact' title='Контакты'/>
            </ul>
        )
    }
}

export default Menu;