import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './style.module.scss';

const CommentPage = () => {

    const { id } = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments').then(response => {
            setComments(response.data);
        })
    }, []);

    return(
        <div className={styles.comment}>
            {comments.map(item=> (
                <div className={styles.comment} name={item.name} email={item.email} body={item.body}>{item.name} <br/><br/> {item.email} <br/><br/> {item.body}</div>
            ))}
        </div>
    )
}

export default CommentPage;