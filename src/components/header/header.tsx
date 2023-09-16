import React from 'react';
import { ProfilePictureSuso } from '../../data/images';
import ImageContent from '../image-content';
import './style.css';

export const Header = () => {

    //TODO traer desde api back
    const profilePicture = ProfilePictureSuso


    return (
        <header className='header-home'>
            <div className='header-profile-picture-container '>
                {/* //TODO redirigir a link perfil usuario */}
                <a className='header-profile-picture' href='/'>
                    <ImageContent
                        image={profilePicture}
                        width='50px'
                        height='50px'
                        rounded='50%'
                        border={true}
                    />
                </a>
            </div>
        </header>
    )
}