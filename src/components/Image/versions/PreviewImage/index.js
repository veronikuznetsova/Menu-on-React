import React from "react";
import Image from "components/Image";

class PreviewImage extends React.Component {
    render() {
        return (
            <Image src={this.props.src} width={300} height={200} />
        )
    }
}

export default PreviewImage;