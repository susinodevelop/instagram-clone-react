'use client' //TODO revisar
import { User } from '@/interface/User';
import React from 'react';
import styled from 'styled-components';

const ProfileImageContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  margin-bottom: 8px;
  border-radius: 50%;
  background: black;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ProfileImageProps {
    $borderColor?: string;
    $textColor?: string;
}

const ProfileImage = styled.img<ProfileImageProps>`
width: 100%;
height: 100%;
border-radius: 50%;
border:  ${({ $borderColor }) => $borderColor ? `2px solid ${$borderColor}` : ''}; // Color del fondo de la imagen
`;

interface ProfilePictureProps {
    user: User,
    borderColor: string
}
const ProfilePicture = (props: ProfilePictureProps) => {

    return (
        <ProfileImageContainer className='mr-5'>
            <ProfileImage
                src={props.user.profile_img}
                alt={`${props.user.username}'s profile`}
                $borderColor={props.borderColor}
            />
        </ProfileImageContainer >
    );
};

export default ProfilePicture;
