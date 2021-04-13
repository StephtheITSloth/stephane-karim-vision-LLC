import React, {useState, useEffect} from 'react';
import Images from './Stylesheet/images'



const Gallery = () => {

const [images, setImages] = useState(Images)

    return (
        <div>
            {images.map((img)=>{
                return <div>
                    {img}
                </div>
            })}
        </div>
    );
};

export default Gallery;