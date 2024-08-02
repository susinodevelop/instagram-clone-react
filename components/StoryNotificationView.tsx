'use client'

import Story from "@/interface/Story";
import User from "@/interface/User";
import { getStory } from "@/services/StoryService";
import Image from "next/image";
import { useEffect, useState } from "react";
import StoriesModal from "./StoriesModal";
import Notification from "@/interface/Notification";
import { Box } from "@chakra-ui/react";
import NotificationView from "./NotificationView";

interface StoryNotificationView {
    notification: Notification
    actionUser: User
}

const StoryNotificationView = ({ notification, actionUser }: StoryNotificationView) => {

    const [isStoriesModalOpen, setStoriesModalOpen] = useState<boolean>(false)
    const [activeStory, setActiveStory] = useState<Story>()

    const openStoryModal = () => {
        setStoriesModalOpen(true)
    }

    const closeStoryModal = () => {
        setStoriesModalOpen(false)
    }

    useEffect(() => {
        const loadInitialData = async () => {
            setActiveStory(await getStory(notification.related_entity_id))
        }
        loadInitialData()
    }, [])

    return (
        <>
            <NotificationView notification={notification} actionUser={actionUser} />
            {
                activeStory &&
                <Box as='button'
                    className="relative w-[50px] h-[50px] ml-[10px]"
                    onClick={openStoryModal}
                >
                    <Image src={activeStory.miniature_url}
                        alt={actionUser.username}
                        fill
                        sizes='50px'
                        className='rounded-[10px]'
                    />
                    <StoriesModal stories={[activeStory]} isOpen={isStoriesModalOpen} onClose={closeStoryModal} />
                </Box >
            }
        </>
    )
}

export default StoryNotificationView;