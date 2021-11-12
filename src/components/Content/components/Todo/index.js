import React from 'react';
import TodoItem from './components/TodoItem';
import styles from './style.module.scss';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';

class Todo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id: 1, title: 'Выучить HTML'},
                {id: 2, title: 'Выучить CSS'},
                {id: 3, title: 'Выучить SASS'},
                {id: 4, title: 'Выучить JS'},
                {id: 5, title: 'Выучить REACT'},
                {id: 6, title: 'Пройти собес'},
            ],
            text: ''
        }
    }

    onRemoveHandler = (item) => {
        const newItems = this.state.todos.filter(todo => todo.id !== item);
        this.setState({
            todos:newItems
        })
    }

    onAddHandler = (text) => {
        const newTodo = {
            id: Math.round(Math.random() * 30),
            title: this.state.text,
        };
        this.setState({
            todos: this.state.todos.concat(newTodo)
        })
    }

    onChangeHandler = (event) => {
        this.setState({
            text:event.target.value
        })
    }
 
    render() {
        return(
            <div className={styles.content}>
                <div>
                <Input onChange={this.onChangeHandler}/>
                <Button onClick={this.onAddHandler}>Add</Button>
                </div>

                {this.state.todos.map((item) => (
                    <TodoItem 
                    // key={item.id}
                    id={item.id}
                    title={item.title} 
                    onRemove={this.onRemoveHandler}/>
                ))}
            </div>
        )
    }
}

export default Todo;