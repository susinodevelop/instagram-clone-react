'use client' //TODO revisar
import Story from '@/interface/Story';
import User from '@/interface/User';
import { getUserStories } from '@/services/UserService';
import React, { useEffect, useState } from 'react';
import StoriesModal from './StoriesModal';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

interface ProfilePictureProps {
    user: User
    width?: number
    height?: number
}
const ProfileImage = ({ user, width = 50, height = 50 }: ProfilePictureProps) => {

    const [isStoriesModalOpen, setStoriesModalOpen] = useState<boolean>(false)
    const [stories, setStories] = useState<Story[]>([])

    const openStoriesModal = () => setStoriesModalOpen(true)
    const closeStoriesModal = () => setStoriesModalOpen(false)

    const areStories = () => stories && stories.length > 0

    useEffect(() => {
        const loadInitialData = async () => {
            setStories(await getUserStories(user.id))
        }
        loadInitialData()
    }, [])

    return (
        <Box
            className={`flex items-center justify-center rounded-full ${areStories() && 'cursor-pointer'}`}
            minWidth={width}
            maxHeight={height}
            onClick={openStoriesModal}
        >
            <Image
                src={user.profile_img}
                alt={user.username}
                width={width}
                height={height}
                style={{ border: `${areStories() && '2px solid red'}` }}
                className={`rounded-full aspect-square`}
            />
            {areStories() && <StoriesModal stories={stories} isOpen={isStoriesModalOpen} onClose={closeStoriesModal} />}
        </Box>
    );
};

export default ProfileImage;
