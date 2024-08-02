'use client'
import User from "@/interface/User";
import { useEffect, useState } from "react";
import Notification from "@/interface/Notification";
import { Box } from "@chakra-ui/react";
import Reel from "@/interface/Reel";
import { getReel } from "@/services/ReelService";
import ReelView from "./ReelView";
import ReelModal from "./ReelModal";
import NotificationView from "./NotificationView";

interface ReelNotificationViewProps {
    notification: Notification
    actionUser: User
}

const ReelNotificationView = ({ notification, actionUser }: ReelNotificationViewProps) => {

    const [isReelsModalOpen, setReelsModalOpen] = useState<boolean>(false)
    const [activeReel, setActiveReel] = useState<Reel>()

    const openReelModal = () => {
        setReelsModalOpen(true)
    }

    const closeReelModal = () => {
        setReelsModalOpen(false)
    }

    useEffect(() => {
        const loadInitialData = async () => {
            setActiveReel(await getReel(notification.related_entity_id))
        }
        loadInitialData()
    }, [])

    return (
        <>
            <NotificationView notification={notification} actionUser={actionUser} />
            {
                activeReel &&
                <Box as='button' onClick={openReelModal}>
                    <ReelView reel={activeReel} width="50px" height="50px" />
                    <ReelModal reel={activeReel} isOpen={isReelsModalOpen} onClose={closeReelModal} />
                </Box >
            }
        </>
    )
}

export default ReelNotificationView;