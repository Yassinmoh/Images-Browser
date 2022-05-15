import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'
const ImageList = (props) => {
    const image = props.images.map((image) => {
        return <ImageCard key={Math.random()} image={image}/>
    })
    return (
        <div className="image-list">
            {image}
        </div>
    )
}

export default ImageList