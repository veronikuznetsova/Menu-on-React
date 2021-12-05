import React, { useState } from "react";
import Users from "../../components/Content/components/Users";
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { connect } from 'react-redux';
import { removeTodo } from '../../redux/actions/todo';

const CoursePage = (removeTodo) => {

    const [valueInput, setValue] = useState([]);
    
    const onChangeHandler = (value) => {
        setValue(value)
    }

    const onClickHandler = () => {
            removeTodo(valueInput);
    }

    return(
        <div>
            <h1>Course page</h1>
            <Input onChange={onChangeHandler}/>
            <Button onClick={onClickHandler}>Delete user</Button> 
            {items.map(item => (
                <div>{item}</div>
            ))}
            {/* <Users /> */}
        </div>
    )
}

function mapStateToProps(state){
    return {
        items: state.todo.items
    }
}

const mapDispatchToProps = {
    removeTodo: removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);;