'use client'
import ReelView from '@/components/ReelView';
import Reel from '@/interface/Reel';
import { getAllReels } from '@/services/ReelService';
import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

//TODO como hacer este cambio en client component
// export const metadata: Metadata = {
//     title: 'Reels',
//     description: 'Página de reels',
// };

const Reels = () => {

    const [reels, setReels] = useState<Reel[]>([])

    const fetchData = async () => {
        setReels(await getAllReels())
    }

    useEffect(() => {
        fetchData()
    }, [])

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
