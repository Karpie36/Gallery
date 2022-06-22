import * as React from "react";
import "./Gallery.scss";
import Image from "../Image/Image";

interface Photo {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
}

function Gallery() {
    const [imgsUrls, setImgsUrls] = React.useState([]);

    React.useEffect(() => {
        fetch("https://picsum.photos/v2/list", {
            method: "GET"
        })
        .then(response => response.json())
        .then((data) => {
            const newImgsUrls: Array<string> = data.map((ele: Photo) => {
                const imgUrl = ele["url"];
                const newImgUrl = imgUrl.includes("https://unsplash.com/photos/")
                    ? imgUrl.replace("https://unsplash.com/photos/", "http://source.unsplash.com/") 
                    : null;
                return newImgUrl;
            })
            const validatedUrls = newImgsUrls.filter(url => url != null);
            setImgsUrls(state => [...state, ...validatedUrls]);
        })
        .catch(error => {
            alert("We are sorry. It was not possible to load images. You can check internet connection and try again.")
        })
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