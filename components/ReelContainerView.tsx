'use client'
import Reel from "@/interface/Reel";
import User from "@/interface/User";
import { getUser } from "@/services/UserService";
import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaBookmark, FaComment, FaHeart, FaPaperPlane } from "react-icons/fa";
import ReelView from "./ReelView";

interface ReelContainerViewProps {
    reel: Reel
    width: string,
    height: string,
    withControls: boolean,
}
const ReelContainerView = ({ reel, width = 'auto', height = 'auto', withControls = true }: ReelContainerViewProps) => {

    const [thisReel, setThisReel] = useState<Reel>(reel)
    const [user, setUser] = useState<User>()

    const fetchData = async () => {
        setUser(await getUser(reel.user_owner_id))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{ width: width, padding: '16px' }}>
            <Box position="relative" >
                <ReelView reel={reel} width={width} height={height} withControls={withControls} />
                {
                    user &&
                    <Box position="absolute" top="10px" left="10px" display="flex" alignItems="center">
                        <Image src={user.profile_img} alt={user.username} width="40px" height="40px" borderRadius="50%" mr="10px" />
                        <Text>{user.username} • Seguir</Text>
                    </Box>
                }
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
export default ReelContainerView;