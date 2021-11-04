import React from 'react';
import styles from './style.module.scss'

class MenuItem extends React.Component {
    render() {
        return(
            <li className = {styles.menuItem}>
                {this.props.title}
            </li>
        )
    }
}

export default MenuItem;