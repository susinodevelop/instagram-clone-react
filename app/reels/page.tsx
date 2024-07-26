'use client'
import ReelView from '@/components/ReelView';
import Reel from '@/interface/Reel';
import { getAllReels } from '@/services/ReelService';
import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Reels = () => {

    const [reels, setReels] = useState<Reel[]>([])

    const fetchData = async () => {
        setReels(await getAllReels())
    }

    useEffect(() => {
        document.title = 'Reels'
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
