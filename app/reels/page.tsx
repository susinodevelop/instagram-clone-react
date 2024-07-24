import Reel from '@/components/Reel';
import { getAllReels } from '@/services/ReelService';
import { getUser } from '@/services/UserService';
import { Box, Text } from '@chakra-ui/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reels',
  description: 'Página de reels',
};

const Reels = async () => {
  // Mapa para cachear los usuarios
  const users = new Map<number, User>();

  const getUserFromMap = async (id: number): Promise<User> => {
    if (users.has(id)) {
      return users.get(id) as User;
    } else {
      const user = await getUser(id);
      users.set(id, user);
      return user;
    }
  };

  const getReels = async (): Promise<ReelUser[]> => {
    const retrievedReels: Reel[] = await getAllReels();

    const reelsWithUsers = await Promise.all(
      retrievedReels.map(async (retrievedReel) => {
        const user = await getUserFromMap(retrievedReel.user_owner_id);
        return { ...retrievedReel, user };
      })
    );

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
      {reels.map((reel, index) => (
        <div key={index}>
          <Reel reel={reel} user={reel.user} />
        </div>
      ))}
    </Box>
  );
};

export default Reels;
