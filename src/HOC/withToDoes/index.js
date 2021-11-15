import React from "react";
import axios from 'axios';

function withToDoes(Component) {
    return class extends React.PureComponent {
        constructor(props) {
            super(props)

            this.state = {
                todos: []
            }
        }

        componentDidMount() {
            this.loadToDoes();
        }

        loadToDoes = () => {
            axios.get('https://todo-fe57.herokuapp.com/todo').then((response) => {
                const todos = response.data.map(item => {
                    return {
                        id: item._id,
                        title: item.title
                    }
                });
    
                this.setState({
                    todos: todos
                })
            })
        }

        createTodo = (title) => {
            const formData = new FormData();
            formData.append('title', title);
            axios.post('https://todo-fe57.herokuapp.com/todo', formData).then(() => {
               this.loadToDoes();
        });
        }

        deleteTodo = (id) => {
            axios.delete(`https://todo-fe57.herokuapp.com/todo/${id}`).then(() => {
                this.loadToDoes();
            });
        }

        render() {
            return (
                <Component 
                items={this.state.todos} 
                create={this.createTodo}
                delete={this.deleteTodo}
                />
            )
        }
    }
}

export default withToDoes;