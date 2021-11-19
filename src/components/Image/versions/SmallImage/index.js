import React from "react";
import Image from 'components/Image';

class SmallImage extends React.Component {
    render() {
        return (
            <Image src={this.props.src} width={50} height={50} />
        )
    }
}

export default SmallImage;