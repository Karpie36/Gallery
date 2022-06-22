import * as React from "react";
import "./Image.scss";

interface ImageProps {
    imgSrc: string
}

function Image(props: ImageProps) {
    function handleImgError(event: React.SyntheticEvent) {
        event.preventDefault();
        event.currentTarget.setAttribute("alt", "Unfortunately it is not possible to load the image. We are sorry :(");
        event.stopPropagation();
    }

    return (
        <img
            className="Image"
            src={props.imgSrc}
            alt={`Image from url ${props.imgSrc}`}
            loading="lazy"
            onError={event => handleImgError(event)}
        />
    )
}

export default Image;