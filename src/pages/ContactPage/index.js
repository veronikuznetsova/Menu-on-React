import React from "react";
import Counter from "../../components/Content/components/Counter";
import Input from "../../components/Form/Input";
import HomeWork from "../../components/Content/components/HomeWork";
import LeftSide from "../../components/Content/components/HomeWork/components/LeftSide";

const ContactPage = () => {
    return(
        <div>
            <h1>Contact page</h1>
            <Counter>10</Counter>
            <Input value='123' />
            <LeftSide value='123'/>
        </div>
    )
}

export default ContactPage;