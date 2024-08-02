'use client'
import User from '@/interface/User';
import Notification from '@/interface/Notification';
import { getUser, getUserNotifications } from '@/services/UserService';
import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import StoryNotificationView from './StoryNotificationView';
import ReelNotificationView from './ReelNotificationView';
import NotificationView from './NotificationView';

//TODO revisar para hacer con server components
const NotificationsView: React.FC = () => {

    //TODO el id sacarlo del contexto despues de identificar al usuario
    const userId = 1
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [users, setUsers] = useState<{ [key: number]: User }>({})

    useEffect(() => {
        const fetchAndSetNotifications = async (): Promise<void> => {
            const notifications: Notification[] = await getUserNotifications(userId)

            // Fetch users for the notifications
            const userIds = Array.from(new Set(notifications.map(notification => notification.action_user_id)));
            const usersData: User[] = await Promise.all(userIds.map(id => getUser(id)));
            const usersMap = Object.fromEntries(usersData.map(user => [user.id, user]));

            setNotifications(notifications)
            setUsers(usersMap);
        };

        fetchAndSetNotifications();
    }, []);

    const processNotification = (notification: Notification, user: User) => {
        switch (notification.related_entity_type) {
            case 'story':
                return <StoryNotificationView notification={notification} actionUser={user} />
            case 'reel':
                return <ReelNotificationView notification={notification} actionUser={user} />
            default:
                return <NotificationView notification={notification} actionUser={user} />
        }
    }

    return (
        <Flex style={{ display: 'flex', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <div className='flex flex-row w-full'>
                <aside style={{ width: '300px', borderRight: '1px solid #333', padding: '20px' }}>
                    <h1>Notificaciones</h1>
                    <a href="#" style={{ color: '#00f', textDecoration: 'none' }}>Filtrar</a>
                    {notifications.map(notification => {
                        const actionUser = users[notification.action_user_id];

                        if (!actionUser) return <div key={notification.id}></div>; // In case user data is not yet loaded

                        return (
                            <div key={notification.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                {
                                    processNotification(notification, actionUser)
                                }
                            </div>
                        )
                    })
                    }
                </aside>
            </div>
        </Flex>
    );
}

export default NotificationsView;
