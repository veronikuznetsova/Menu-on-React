import React from 'react';
import styles from './style.module.scss';
import { Link, NavLink } from 'react-router-dom';

class MenuItem extends React.Component {
    getClass = (state) => {
        return styles.menuItem + (state.isActive ? ` ${styles.active}` : '');
    }

    render() {
        return(
            <NavLink className={this.getClass} 
            to={this.props.to}>
                {this.props.title}
            </NavLink>
        )
    }
}

export default MenuItem;