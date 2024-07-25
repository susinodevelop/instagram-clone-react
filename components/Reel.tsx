import { User } from "@/interface/User";
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaBookmark, FaComment, FaHeart, FaPaperPlane } from "react-icons/fa";

interface ReelProps {
    reel: Reel,
    user: User
}
export const Reel = ({ reel, user }: ReelProps) => {
    return (
        <div className='w-[350px] p-[16px]'>
            <Box position="relative" >
                <Box
                    as="video"
                    controls
                    width="100%"
                    height="auto"
                    maxW="600px"
                    margin="0 auto"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                >
                    <source src={reel.url} type="video/mp4" width="100%" height="605" />
                </Box>
                <Box position="absolute" top="10px" left="10px" display="flex" alignItems="center">
                    <Image src={user.profile_img} alt={user.username} width="40px" height="40px" borderRadius="50%" mr="10px" />
                    <Text>{user.username} • Seguir</Text>
                </Box>
                {/* <Box position="absolute" bottom="10px" left="10px">
            TODO: Add caption and music
            <Text>{reel.caption}</Text>
            <Text color="#bbb">{reel.music}</Text>
        </Box> */}
                <Box position="absolute" bottom="20%" right="10px" display="flex" flexDirection="column" alignItems="center" gap="15px">
                    <FaHeart /> {/* TODO: Add likes {reel.likes} */}
                    <FaComment />
                    <FaPaperPlane />
                    <FaBookmark />
                </Box>

            </Box>
        </div>
    )
}
export default Reel;