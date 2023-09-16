import React from "react";
import ImageModel from "../../models/image-model";
import './style.css';

export interface ImageContentProps {
    image: ImageModel,
    width?: string,
    height?: string,
    rounded?: string,
    border?: boolean
}

export const ImageContent = ({
    image,
    width = '100%',
    height = '100%',
    rounded = '0%',
    border = false
}: ImageContentProps) => {

    //TODO esto ten que salir do api back
    const unlookedStories = true ? 'unlooked-stories' : 'looked-stories'

    return (
        <div className='image-content' >
            <img className={`image-content-picture  ${border ? unlookedStories : ''}`}
                src={image.source}
                alt={image.alt}
                style={{ width, height, borderRadius: rounded }}
            />
        </div >
    )
}