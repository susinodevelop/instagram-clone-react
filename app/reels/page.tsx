'use client';
import Sidebar from '@/components/Sidebar';
import { getReel, getAllReels } from '@/services/ReelService';
import { Flex, Box, Image, Text, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaComment, FaPaperPlane, FaBookmark } from 'react-icons/fa';

const Reels: React.FC = () => {
    const [reels, setReels] = useState<UserReel[]>([]);

    useEffect(() => {
        const fetchAndSetReels = async (): Promise<void> => {
            const retrievedReels: Reel[] = await getAllReels();

            const promises = retrievedReels.map(async (retrievedReel): Promise<UserReel> => {
                const reel: UserReel = await getReel(retrievedReel.id);
                return reel;
            });

            const mappedReels: UserReel[] = await Promise.all(promises);
            setReels(mappedReels);
        };

        fetchAndSetReels();
    }, []);

    return (
        <Flex bg="#000" color="#fff" minHeight="100vh" p="20px">
            <Sidebar />
            <Box flex="1" display="flex" flexDirection="column" alignItems="center" gap="20px">
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
        </Flex>
    );
};

export default Reels;
