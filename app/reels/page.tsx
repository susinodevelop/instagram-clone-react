import Reel from '@/components/Reel';
import { getReel, getAllReels } from '@/services/ReelService';
import { Box, Text } from '@chakra-ui/react';
import type { Metadata } from 'next';
import React from 'react';

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
        <Box
            position="absolute"
            left="0"
            top="0"
            width="100%"
            display="flex"
            flexDirection="column"
            gap="20px"
            alignItems="center"
        >
            <Text as="h1">Reels</Text>
            {reels.map((reel, index) => (
                <div key={index}>
                    <Reel url={reel.reel_url} owner_username={reel.username} owner_profile_img={reel.user_profile_img} />
                </div>
            ))}
        </Box>
    );
};

export default Reels;
