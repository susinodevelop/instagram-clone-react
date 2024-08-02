'use client'
import User from "@/interface/User";
import Notification from "@/interface/Notification";
import { timeAgo } from "@/utils/DateUtils";
import ProfileImage from "./ProfileImage";

interface NotificationView {
    notification: Notification
    actionUser: User
}
//TODO revisar para hacer con server components
const NotificationView = ({ notification, actionUser }: NotificationView) => {

    return (
        <>
            <div className="mr-[10px]">
                <ProfileImage user={actionUser} />
            </div>
            <div style={{ flex: '1' }}>
                <p style={{ margin: '0' }}>{actionUser.username}</p>
                <p style={{ margin: '0', color: '#777' }}>{timeAgo(notification.created_at)}</p>
            </div>
        </>
    )
}

export default NotificationView;