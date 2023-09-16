import React from "react";
import Carrousel from "../carrousel";
import ImageContent from "../image-content";
import { ImageData, ProfilePictureSuso } from "../../data/images";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp'
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import './style.css';
import FeedComments from "../feed-comments";

export const Feed = () => {

    // TODO de donde salen los datos?
    const susoProfilePicture = ProfilePictureSuso
    const images = ImageData

    return (
        <div className="feed-content">
            {/* TODO extraer esto a un componente nuevo 'Feed' */}
            <Carrousel elements={images.map(image => {
                return {
                    id: image.id,
                    item: <div className='carrousel-item'>
                        <div className='carrousel-item-header'>
                            <ImageContent
                                image={susoProfilePicture}
                                width='50px'
                                height='50px'
                                rounded='50%'
                                border={true}
                            />
                            <span className='username'>{image.author.username}</span>
                            <span className='separation-point'>·</span>
                            <span className='time-since-upload'>22h</span>

                        </div>
                        <div className='carrousel-item-content'>
                            <ImageContent
                                image={image}
                                width="468px"
                                height="468px"
                                rounded="5px"
                            />
                        </div>
                        <div className='carrousel-item-actions'>
                            <div className='carrousel-item-actions-left'>
                                <FavoriteBorderSharpIcon />
                                <ChatBubbleOutlineSharpIcon />
                            </div>
                            <div className='carrousel-item-actions-right'>
                                <BookmarkBorderOutlinedIcon />
                            </div>
                        </div>
                        <div className='carrousel-item-footer'>
                            <span>Liked by usuario1234 and others</span>
                            <span>Comments...</span>
                            <FeedComments />
                        </div>

                        <hr className='carroulse-item-division-line' />
                    </div>
                }
            }
            )} />
        </div>
    )
}