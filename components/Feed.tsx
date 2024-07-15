'use client';
import User from "@/interface/User";
import { Box, Image, VStack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";

const Feed = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <VStack spacing="10px" padding="20px" bg="black" color="white" flex="1">

      {
        users.map(user => (
          <li key={user.username} className="list-none">
            <Box >
              <div className="flex flex-row justify-between p-4 rounded-lg shadow-md">
                <ProfilePicture user={user} borderColor="red" />
                <Text fontSize="lg">• 9 min</Text>
              </div>
              {/* TODO crear endpoint para imagenes segun usuario */}
              <Image className="h-[250px]" src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </Box>
          </li>
        ))
      }


    </VStack>
  );
};

export default Feed;
