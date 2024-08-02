'use client'
import User from "@/interface/User";
import Notification from "@/interface/Notification";
import { timeAgo } from "@/utils/DateUtils";
import Image from "next/image";

interface NotificationView {
    notification: Notification
    actionUser: User
}
//TODO revisar para hacer con server components
const NotificationView = ({ notification, actionUser }: NotificationView) => {

    return (
        <>
            <div className="relative w-[50px] h-[50px] mr-[10px]">
                <Image src={actionUser.profile_img}
                    alt={actionUser.username}
                    fill
                    sizes='50px'
                    className='rounded-full'
                />
            </div>
            <div style={{ flex: '1' }}>
                <p style={{ margin: '0' }}>{actionUser.username}</p>
                <p style={{ margin: '0', color: '#777' }}>{timeAgo(notification.created_at)}</p>
            </div>
        </>
    )
}

export default NotificationView;