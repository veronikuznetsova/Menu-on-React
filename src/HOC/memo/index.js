import React from "react";

function Memo(component) {
    return class extends React.PureComponent {
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
    console.log(this.state, nextState)
    if(this.state.count !== nextState.count) {
        return true;
    }
        return false;
    }   

    render() {
        return (
            <Component 
            items={this.state.count} 
            click={this.onClickHandler}
            update={this.shouldComponentUpdate}
            />
        )
    }
   }
}

export default Memo;

