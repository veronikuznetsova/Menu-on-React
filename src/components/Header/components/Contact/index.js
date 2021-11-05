import React from 'react';
import styles from './style.module.scss';
import Phone from './components/Phone';
import Social from './components/Social';

class Contact extends React.Component{
    render() {
        return(
            <div className={styles.contact}>
                <Phone/>
                <Social/>
            </div>
        )
    }
}

export default Contact;