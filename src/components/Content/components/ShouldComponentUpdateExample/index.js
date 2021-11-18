import React from "react";
import Button from 'components/Form/Button';
import Memo from '../../../../HOC/memo';

class ShouldComponentUpdateExample extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    onClickHandler = (event) => {
        this.setState({
            // count: this.state.count + 1
            count: 10
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.state, nextState)
        // if(this.state.count !== nextState.count) {
        //     return true;
        // }
        // return false;
        this.props.update(nextProps, nextState);
    }

    render() {
        return (
            <div>
                <span>click count: {this.state.count}</span>
                <Button onClick = {this.onClickHandler}>Click</Button>
            </div>
        )
    }
}

export default Memo(ShouldComponentUpdateExample);