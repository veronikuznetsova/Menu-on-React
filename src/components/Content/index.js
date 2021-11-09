import React from 'react';
import styles from './style.module.scss';
import Form from './components/Form';
import Todo from './components/Todo'

class Content extends React.Component {
    render() {
        return(
            <div className={styles.content}>
                {/* <Form/> */}
                <Todo />
            </div>
        )
    }
}

export default Content;