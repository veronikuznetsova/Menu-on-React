import React from 'react';
import styles from './style.module.scss';
import Form from './components/Form';
import Todo from './components/Todo';
import ShouldComponentUpdateExample from './components/ShouldComponentUpdateExample';
import FormSubscription from './components/FormSubcscription';
import Image from 'components/Image';
import backgroundImage from 'images/logo.jpeg';
import SmallImage from '../Image/versions/SmallImage';
import PreviewImage from '../Image/versions/PreviewImage';
import FunctionalComponent from './components/FunctionalComponent';
import TodoFunc from './components/Todo/TodoFunc';

class Content extends React.Component {
    render() {
        return(
            <div className={styles.content}>
                {/* <Form/>
                {/* <Todo /> */}
                {/* <ShouldComponentUpdateExample /> */}
                {/* <FormSubscription /> */}
                {/* <SmallImage src={backgroundImage} />
                <PreviewImage src={backgroundImage} />
                <FunctionalComponent title='hello'/>  */}
                <TodoFunc />
            </div>
        )
    }
}

export default Content;