import * as React from "react";

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
            src={props.imgSrc}
            alt="Sth"
            loading="lazy"
            onError={event => handleImgError(event)}
        />
    )
}

export default Image;