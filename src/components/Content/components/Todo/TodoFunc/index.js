import React, { useEffect, useState} from "react";
import axios from 'axios';

const TodoFunc = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadToDoes();
    }, []);

    const loadToDoes = () => {
        return axios.get('https://todo-fe57.herokuapp.com/todo').then((response) => {
            const todos = response.data.map(item => {
                return {
                    id: item._id,
                    title: item.title
                }
            });
            console.log(todos);

            setTodos(todos)
        })
    }

    return (
        <div>
            {todos.map((item) => (
            <div>{item.title}</div>
        ))}
        </div>
    )
}

export default TodoFunc;