import React from 'react';
import styles from './style.module.scss';

class Input extends React.Component{

    onChangeHandler = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <input 
            {...this.props}
              type={this.props.type}
              className={styles.input} 
            //   onChange={this.props.onChange} 
            onChange={this.onChangeHandler} 
            />
        )
    }
}

export default Input;