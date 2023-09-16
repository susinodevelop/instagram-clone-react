import React from 'react';
import ImageContent from '../../components/image-content';
import { ProfilePictureSuso } from '../../data/images';
import { Button } from '@mui/material';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import './style.css';

export const Profile = () => {

    //TODO traer desde api back
    const profilePicture = ProfilePictureSuso

    return (
        <>
            <div className='profile-main-header'>
                <div className='profile-main-header-image'>
                    <ImageContent
                        image={profilePicture}
                        width='200px'
                        height='200px'
                        rounded='50%'
                        border={false} />
                </div>
                <div className='profile-main-header-data'>
                    <div className='profile-statistics'>
                        <span>15 posts</span>
                        <span>476 followers</span>
                        <span>119 following</span>
                    </div>
                    <div className='profile-information'>
                        <span className='realname'>Nombre Apellido Apellido</span>
                        <p className='description'>
                            Descripcion larga
                            porque si
                            jajaja que guay
                        </p>
                        <a className='profile-link-bio' href='/profile'>
                            http://www.google.com
                        </a>
                    </div>
                </div>
            </div>
            <div className='profile-main-story-highlights'>
                {/* TODO aqui iran nuestras stories */}
            </div>
            <hr />
            <div className='profile-main-content-buttons'>
                <Button className='profile-button-posts' startIcon={<ViewCompactOutlinedIcon />} >POSTS</Button>
                <Button className='profile-button-reels' startIcon={<SlideshowOutlinedIcon />}>REELS</Button>
                <Button className='profile-button-saved' startIcon={<BookmarkBorderOutlinedIcon />}>SAVED</Button>
                <Button className='profile-button-tagged' startIcon={<AssignmentIndOutlinedIcon />}>TAGGED</Button>
            </div>
            <div className='profile-main-content'>
                <div className='profile-main-feed-posts'>
                    {/* TODO aqui iran nuestros posts */}
                </div>
                <div className='profile-main-feed-reels'>
                    {/* TODO aqui iran los reels */}
                </div>
                <div className='profile-main-feed-saved'>
                    {/* TODO aqui iran los post que hemos guardado en favoritos */}
                </div>
                <div className='profile-main-feed-taged'>
                    {/* TODO aqui iran los posts en los que estamos etiquetados */}
                </div>
            </div>
        </>
    )
}