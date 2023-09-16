import React from "react";
import VideoModel from "../../models/video-model";
import './style.css';

export interface VideoContentProps {
    video: VideoModel,
    width?: string,
    height?: string
}

export const VideoContent = ({
    video,
    width = '100%',
    height = '100%'
}: VideoContentProps) => {
    return (
        <div className="video-content">
            <video className="video-content-video" width={width} height={height}            >
                <source src={video.source} type={video.type} />
            </video>
        </div>
    )
}