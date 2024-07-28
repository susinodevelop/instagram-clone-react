export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import ReelView from '@/components/ReelView';
import { getAllReels } from '@/services/ReelService';
import { Box, Text } from '@chakra-ui/react';

export const metadata = {
    title: 'Reels',
    description: 'Página de reels',
}

const Reels = async () => {

    const reels = await getAllReels()

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
            {reels && reels.map(reel => (
                <div key={reel.id}>
                    <ReelView reel={reel} />
                </div>
            ))}
        </Box>
    );
};

export default Reels;
