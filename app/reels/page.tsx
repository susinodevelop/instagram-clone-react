import Reel from '@/components/Reel';
import { getAllReels } from '@/services/ReelService';
import { getUser } from '@/services/UserService';
import { Box, Text } from '@chakra-ui/react';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Reels',
    description: 'Página de reels',
}

const Reels: React.FC = async () => {

    const users = new Map<number, User>()

    const getUserFromMap = async (id: number): Promise<User> => {
        let user: User;
        if (users.has(id)) {
            user = users.get(id) as User
        } else {
            user = await getUser(id);
            users.set(user.id, user)
        }
        return user
    }

    const getReels = async (): Promise<ReelUser[]> => {

        const retrievedReels: Reel[] = await getAllReels();

        const promises = retrievedReels.map(async (retrievedReel): Promise<ReelUser> => {
            let user: User = await getUserFromMap(retrievedReel.user_owner_id)

            const reel: ReelUser = {
                ...retrievedReel,
                user
            }
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
                    <Reel reel={reel} user={reel.user} />
                </div>
            ))}
        </Box>
    );
};

export default Reels;
