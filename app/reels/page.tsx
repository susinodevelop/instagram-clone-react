import ReelView from '@/components/ReelView';
import User from '@/interface/User';
import { getAllReels } from '@/services/ReelService';
import { getUser } from '@/services/UserService';
import { Box, Text } from '@chakra-ui/react';
import type { Metadata } from 'next';
import ReelUser from '@/interface/ReelUser'
import Reel from '@/interface/Reel';

export const metadata: Metadata = {
    title: 'Reels',
    description: 'Página de reels',
};

const Reels = async () => {
    // Mapa para cachear los usuarios
    const users = new Map<number, User>();

    const saveCacheUser = async (id: number) => {
        if (!users.has(id)) {
            const user = await getUser(id);
            users.set(user.id, user);
        }
    }

    const getReels = async (): Promise<ReelUser[]> => {
        const retrievedReels: Reel[] = await getAllReels();

        for (const reel of retrievedReels) {
            await saveCacheUser(reel.user_owner_id)
        }
        const reelsWithUsers = retrievedReels.map((reel) => {
            const user = users.get(reel.user_owner_id);
            return { ...reel, user } as ReelUser;
        });

        return reelsWithUsers;
    };

    const reels = await getReels();

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
                    <ReelView reel={reel} user={reel.user} />
                </div>
            ))}
        </Box>
    );
};

export default Reels;
