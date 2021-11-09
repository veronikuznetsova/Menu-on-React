import React from 'react';
import styles from './style.module.scss';
import Input from 'components/Form/Input';

class Form extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            number1: 0,
            number2: 0,
            color: 'red'
        }
    }

    onChangeHandler1 = (event) => {
        this.setState({
            number1: +event.target.value,
        });
    }

    onChangeHandler2 = (event) => {
        this.setState({
            number2: +event.target.value,
        });
    }

    onChangeHandler3 = (event) => {
        this.setState({
            color: event.target.value,
        });
    }

    render() {
        return(
            <form className={styles.form}>
                <Input onChange={this.onChangeHandler1} type='number'/>
                <Input onChange={this.onChangeHandler2} type='number'/>
                <div className={styles.number}>
                    {this.state.number1 + this.state.number2}
                </div>

                <Input onChange={this.onChangeHandler3} type='text'/>
                <div className={styles.square} style={{background: this.state.color }}>
                </div>
            </form>
        )
    }
}

export default Form;