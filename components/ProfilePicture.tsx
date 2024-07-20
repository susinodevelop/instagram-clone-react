import React from 'react';
import styled from 'styled-components';

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  color: white;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
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

const UserName = styled.strong<ProfileImageProps>`
max-width: 80px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
color: ${({ $textColor }) => $textColor || 'black'};
`;

const ProfilePicture = (props: ProfilePictureProps) => {

    return (
        <UserProfileContainer className="flex flex-row">
            <ProfileImageContainer className='mr-5'>
                <ProfileImage
                    src={props.user.profile_img}
                    alt={`${props.user.username}'s profile`}
                    $borderColor={props.borderColor}
                />
            </ProfileImageContainer >
            <UserName $textColor={props.textColor}>
                {props.user.username}
            </UserName>
        </UserProfileContainer >
    );
};

export default ProfilePicture;
