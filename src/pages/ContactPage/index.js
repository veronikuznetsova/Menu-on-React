import React from "react";
import Counter from "../../components/Content/components/Counter";
import Input from "../../components/Form/Input";
import HomeWork from "../../components/Content/components/HomeWork";
import LeftSide from "../../components/Content/components/HomeWork/components/LeftSide";
import { light, dark } from '../../redux/actions/light';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/Form/Button';

const ContactPage = () => {

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

    return(
        <div>
            <h1>Contact page</h1>
            {/* <Counter>10</Counter>
            <Input value='123' />
            <LeftSide value='123'/> */}
            <Button onClick={onChangeColor}>Click</Button>
        </div>
    )
}

export default ContactPage;