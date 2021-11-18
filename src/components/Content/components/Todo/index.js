import React from 'react';
import TodoItem from './components/TodoItem';
import styles from './style.module.scss';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import axios from 'axios';
import withToDoes from '../../../../HOC/withToDoes';

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

    // componentDidMount() {
    //     this.loadToDoes();
    // }

    // loadToDoes = () => {
    //     axios.get('https://todo-fe57.herokuapp.com/todo').then((response) => {
    //         const todos = response.data.map(item => {
    //             return {
    //                 id: item._id,
    //                 title: item.title
    //             }
    //         });

    //         this.setState({
    //             todos: todos
    //         })
    //     })
    // }

    onRemoveHandler = (id) => {
        // const newItems = this.state.todos.filter(todo => todo.id !== item);
        // this.setState({
        //     todos:newItems
        // })

        // axios.delete(`https://todo-fe57.herokuapp.com/todo/${id}`).then(() => {
        //     this.loadToDoes();
        // })

        this.props.delete(id)
    }

    onAddHandler = () => {
        // const newTodo = {
        //     id: Math.round(Math.random() * 30),
        //     title: this.state.text,
        // };

        // const formData = new FormData()
        // formData.append('title', this.state.text)
        // axios.post('https://todo-fe57.herokuapp.com/todo', formData).then(() => {
        //     this.loadToDoes();
        // })


        // this.setState({
        //     todos: this.state.todos.concat(newTodo)
        // })

        this.props.create(this.state.text);
    }

    onChangeHandler = (event) => {
        this.setState({
            text:event.target.value
        })
    }
 
    render() {
        console.log(this.props)
        return(
            <div className={styles.content}>
                <div>
                <Input onChange={this.onChangeHandler}/>
                <Button onClick={this.onAddHandler}>Add</Button>
                </div>

                {/* {this.state.todos.map((item) => ( */}
                {this.props.items.map((item) => (
                    <TodoItem 
                    key={item.id}
                    id={item.id}
                    title={item.title} 
                    onRemove={this.onRemoveHandler}/>
                ))}
            </div>
        )
    }
}

export default withToDoes(Todo);