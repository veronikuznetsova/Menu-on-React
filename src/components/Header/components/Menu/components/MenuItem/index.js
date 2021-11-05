import React from 'react';
import styles from './style.module.scss'

class MenuItem extends React.Component {
    render() {
        return(
            <li className={styles.menuItem}>
                <a href={this.props.href}>
                {this.props.title}
                </a>
            </li>
        )
    }
}

export default MenuItem;