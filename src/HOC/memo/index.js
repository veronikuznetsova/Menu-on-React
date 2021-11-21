import React from "react";
import _ from 'lodash';

function memo(Component) {
    return class extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, nextProps)
    return !_.isEqual(this.props, nextProps)
    //    if (_.isEqual(this.props, nextProps)) {
    //         return false
    //     }
    //     return true
    }  

    render() {
        return (
            <Component {...this.props} />
        )
    }
   }
}

export default memo;

