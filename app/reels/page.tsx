import { getReel, getAllReels } from '@/services/ReelService';
import { Box, Image, Text } from '@chakra-ui/react';
import type { Metadata } from 'next';
import React from 'react';
import { FaHeart, FaComment, FaPaperPlane, FaBookmark } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Reels',
    description: 'Página de reels',
}

const Reels: React.FC = async () => {

    const getReels = async (): Promise<UserReel[]> => {
        const retrievedReels: Reel[] = await getAllReels();

        const promises = retrievedReels.map(async (retrievedReel): Promise<UserReel> => {
            const reel: UserReel = await getReel(retrievedReel.id);
            return reel;
        });

        return await Promise.all(promises);
    };

    const reels = await getReels()

    return (
        <Box flex="1" display="flex" flexDirection="column" alignItems="center" gap="20px" color="#fff">
            <Text as="h1">Reels</Text>
            {reels.map((reel, index) => (
                <Box key={index} width="300px" position="relative">
                    <Image src={reel.reel_url} alt="reel" width="100%" borderRadius="10px" />
                    <Box position="absolute" top="10px" left="10px" display="flex" alignItems="center">
                        <Image src={reel.reel_url} alt={reel.username} width="40px" height="40px" borderRadius="50%" mr="10px" />
                        <Text>{reel.username} • Seguir</Text>
                    </Box>
                    {/* <Box position="absolute" bottom="10px" left="10px">
                            TODO: Add caption and music
                            <Text>{reel.caption}</Text>
                            <Text color="#bbb">{reel.music}</Text>
                        </Box> */}
                    <Box position="absolute" bottom="10px" right="10px" display="flex" flexDirection="column" alignItems="center" gap="10px">
                        <FaHeart /> {/* TODO: Add likes {reel.likes} */}
                        <FaComment />
                        <FaPaperPlane />
                        <FaBookmark />
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Reels;
