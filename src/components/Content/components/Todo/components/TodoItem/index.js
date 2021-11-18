import React from "react";
import styles from './style.module.scss';
import Button from 'components/Form/Button';

class TodoItem extends React.PureComponent{

    onClickHandler = () => {
        this.props.onRemove(this.props.id)
    }

    render() {
        return (
            <div className={styles.item}>
                <div>{this.props.title}</div>
                <Button onClick={this.onClickHandler}>Delete</Button>
            </div>
        )
    }
}

export default TodoItem;