import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import styles from './style.module.scss';

const PostPage = () => {

    const { id } = useParams();

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(response => {
            setData(response.data);
        })
    }, []);

    return(
        <div>
            <h1 className={styles.post}>{data.id}</h1>
            <h1 className={styles.post}>{data.title}</h1>
            <h3 className={styles.post}>{data.body}</h3>
            <Link to='comments' className={styles.comments}>Comments Below</Link>
            <Outlet />
        </div>
    )
}

export default PostPage;