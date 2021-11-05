import React from 'react';
import styles from './style.module.scss';
import SocialItem from './components/SocialItem';
import FacebookImage from './images/facebook.svg';
import VimeoImage from './images/vimeo.svg';
import YoutubeImage from './images/youtube.svg';
import InstagramImage from './images/instagram.svg';


class Social extends React.Component{
    render() {
        return(
            <div className={styles.social}>
                <SocialItem src={FacebookImage}/>
                <SocialItem src={VimeoImage}/>
                <SocialItem src={YoutubeImage}/>
                <SocialItem src={InstagramImage}/>
            </div>
        )
    }
}

export default Social;