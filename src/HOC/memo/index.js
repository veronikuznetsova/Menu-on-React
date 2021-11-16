import React from "react";

function Memo(component) {
    return class extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, nextProps)
    if(this.props !== nextProps) {
        return true;
    }
        return false;
    }   

    render() {
        return (
            <Component 
            update={this.shouldComponentUpdate}
            />
        )
    }
   }
}

export default Memo;

