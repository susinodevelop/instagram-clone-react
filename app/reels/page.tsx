import ReelContainerView from '@/components/ReelContainerView';
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
            {
                reels && reels.map(reel => (
                    <div key={reel.id}>
                        <ReelContainerView reel={reel} width='350px' height='auto' withControls={true} />
                    </div>
                ))}
        </Box>
    );
};

export default Reels;
