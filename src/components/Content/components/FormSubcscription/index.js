import React from 'react';
import styles from './style.module.scss';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button'

class FormSubcscription extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            tel: '',
            text: '',
            hasError: false,
        }
    }

    onChangePhoneHandler = (event) => {
        this.setState({
            tel: event.target.value,
        });
    }

    onChangeCodeHandler = (event) => {
        this.setState({
            text: event.target.value,
        });
    }

    onClick = (event) => {
        event.preventDefault();
        const tel = this.state.tel
        const text = this.state.text

        if (tel !== '') {
            this.setState({
                hasError: false
            })
            alert(`tel: ${this.state.tel}, promo: ${this.state.text}`)
        } else {
            this.setState({
                hasError: true
            })
        }
    }


    render() {
        return(
            <form className={styles.formSub}>
                <Input onChange={this.onChangePhoneHandler} type='tel' placeholder="Номер телефона"/>
                <Input onChange={this.onChangeCodeHandler} type='text' placeholder='Промокод'/>
                {/* {this.state.tel.length < 7 && (
                    <div>Введи тел</div>
                )} */}
                {this.state.hasError && (
                    <div className={styles.formError}>Пожалуйста, заполните все обязательные поля</div>
                )}
                <Button onClick={this.onClick}>Записаться</Button>
            </form>
        )
    }
}

export default FormSubcscription;