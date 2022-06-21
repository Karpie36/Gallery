import React from "react";

function Image(props) {
    console.log(props.imgSrc);
    return (
        <img src={props.imgSrc} alt="Sth" loading="lazy"/>
    )
}

export default Image;