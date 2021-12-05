import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailPost from '../DetailPost';
import styles from './style.module.scss';

const BlogPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            setPosts(response.data);
        })
    }, []);

    return(
        <div className={styles.page}>
            <h1>Blog page</h1>
            {posts.map(post => (
                <DetailPost id={post.id} title={post.title} description={post.description} />
            ))}
        </div>
    )
}

export default BlogPage;