import React, { useEffect, useState } from "react";
import Image from "../Image/Image";
import { faker } from '@faker-js/faker';

function createPhotos(num) {
    const photos = new Array(num)
    for(let i=0; i < num; i++) {
        photos[i] = faker.image.cats();
    }
    return photos;
}

function Gallery() {
    const [imgsUrls, setImgsUrls] = useState([]);

    useEffect(() => {
        const newImgUrl = createPhotos(1);
        setImgsUrls(state => [...state, newImgUrl]);
    }, []);

    return (
        <div className="Gallery">
            {
                imgsUrls.map((imgUrl, index) => {
                    return <Image key={index} imgSrc={imgUrl}/>
                })
            }
        </div>
    )
}

export default Gallery;