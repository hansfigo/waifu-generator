import { useState, useEffect } from "react";

export const useCount = () => {
    const [count, setCount] = useState(0)
    const [images, setImages] = useState([])
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (count === 10) {
            clearInterval(intervalId);
        }
    }, [count]);

    const fecthImage = () => {
        const url = "https://api.waifu.im/search/?is_nsfw=true&included_tags=paizuri"
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setImages((prevImages) => [...prevImages, data]);
                setCount((e) => e+1)
            })
            .catch((e) => console.log(e))
    }

    const GetImages = () => {
        const id = setInterval(fecthImage, 1000);
        setCount(0);
        setIntervalId(id);
    }

    return [images, GetImages]
}

