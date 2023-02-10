import React, { useState, useEffect } from "react";
import './index.css';

const ImageGenerator = () => {
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (count === 2) {
            clearInterval(intervalId);
        }
    }, [count]);

    const getImages = () => {
        fetch("https://api.waifu.im/search/?included_tags=paizuri")
            .then((res) => res.json())
            .then((data) => {
                setImages((prevImages) => [...prevImages, data]);
                setCount((prevCount) => prevCount + 1);
                console.log(images[0]["images"][0]["url"]);

            });
    };

    const startRequest = () => {
        const id = setInterval(getImages, 1000);
        setIntervalId(id);
    };

    return (
        <div>
            <button className="button" onClick={startRequest}>Start Request</button>
            <ul className="img-container" >
                {images.map((image, index) => (
                    <li key={index}>
                        <img className="img-each" src={image["images"][0]["url"]} alt="Generated Image" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageGenerator;
