import React, { useEffect, useRef, useState } from "react";
import VideoSrc from 'video/mov_bbb.mp4';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';

const VideoPlayer = () => {
    const video = useRef();

    const [play, setVideo] = useState(false);

    const [volume, setVolume] = useState(0);
    

    useEffect(() => {
        // if(play){
        //     video.current.play();
        // } else {
        //     video.current.pause();
        // }
        play ? video.current.play() : video.current.pause()
    }, [play])

    useEffect(() => {
        video.current.volume = volume
    }, [volume])

    const onClickPlay = () => {
        // video.current.play();

        // if(play){
        //     video.current.pause();
        // } else {
        //     video.current.play();
        // }

        setVideo(!play);

        // if(play === false){
        //     video.current.play();
        //     setVideo(true)
        // } else if (play === true) {
        //     video.current.pause();
        //     setVideo(false)
        // }
    }

    const onClickVideo = () => {
        setVideo(true)
    }

    const onChangeVolume = (value) => {
        setVolume(value)
    }

    return (
        <div>
            {/* <video ref={video} onClick= {onClickPlay}> */}
            <video ref={video} onClick={onClickVideo}>
            <source src={VideoSrc} type="video/mp4"></source>
        </video>
        <br/>
        <Button onClick={onClickPlay}>
            {play ? 'Pause' : 'Play'}
        </Button>
        <br/>
        <Input type='number' min="0.0" max="1.0" step='0.1' onChange={onChangeVolume}></Input>
        </div>
    )
}

export default VideoPlayer;