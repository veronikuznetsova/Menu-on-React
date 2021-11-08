import React from 'react';
import TodoItem from './components/TodoItem';
import styles from './style.module.scss'

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
            ]
        }
    }

    onRemoveHandler = (item) => {
        const newItems = this.state.todos.filter(todo => todo.id !== item);
        this.setState({
            todos:newItems
        })
    }

    render() {
        return(
            <div className={styles.content}>
                {this.state.todos.map(item => (
                    <TodoItem 
                    id={item.id}
                    title={item.title} 
                    onRemove={this.onRemoveHandler}/>
                ))}
            </div>
        )
    }
}

export default Todo;