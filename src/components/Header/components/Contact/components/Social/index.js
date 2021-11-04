import React from 'react';
import styles from './style.module.scss';
import SocialItem from './components/SocialItem';

class Social extends React.Component{
    render() {
        return(
            <div className = {styles.social}>
                <SocialItem src ='https://raw.githubusercontent.com/hail2u/drawic/ac90c7e48103df466ffaf221621cb5a14795bb5b/facebook.svg'/>
                <SocialItem src = 'https://raw.githubusercontent.com/hail2u/drawic/ac90c7e48103df466ffaf221621cb5a14795bb5b/vimeo.svg'/>
                <SocialItem src = 'https://raw.githubusercontent.com/hail2u/drawic/ac90c7e48103df466ffaf221621cb5a14795bb5b/youtube.svg'/>
                <SocialItem src = 'https://raw.githubusercontent.com/hail2u/drawic/ac90c7e48103df466ffaf221621cb5a14795bb5b/instagram.svg'/>
            </div>
        )
    }
}

export default Social;