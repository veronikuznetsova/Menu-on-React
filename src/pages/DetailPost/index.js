import React from "react";
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const DetailPost = ({id, title, description}) => {

    return (
            <Link to={'/posts/' + id} className={styles.blog}>{title}</Link>
    )
}

export default DetailPost;