import React from 'react';
import styles from './style.module.scss';
import Form from './components/Form';
import Todo from './components/Todo';
import ShouldComponentUpdateExample from './components/ShouldComponentUpdateExample';
import FormSubscription from './components/FormSubcscription'

class Content extends React.Component {
    render() {
        return(
            <div className={styles.content}>
                <Form/>
                {/* <Todo /> */}
                {/* <ShouldComponentUpdateExample /> */}
                {/* <FormSubscription /> */}
            </div>
        )
    }
}

export default Content;