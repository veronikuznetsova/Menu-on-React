import React from "react";
import styles from './style.module.scss'

class Button extends React.PureComponent{
    render() {
        return (
            <button 
                onClick={this.props.onClick}
                className={styles.button}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Button;