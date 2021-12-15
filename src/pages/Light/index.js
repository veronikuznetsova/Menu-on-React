import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import Button from 'components/Form/Button';

const Light = () => {

    const dispatch = useDispatch();

    const color = useSelector(function(state){
        return state.theme.color
    })

    const onChangeColor = () => {
        if(color === false) {
            dispatch(light())
        } else {
            dispatch(dark())
        }
    }

    return (
        <div>
            <Button onClick={onChangeColor}>Click</Button>
        </div>
    )
}

export default Light;