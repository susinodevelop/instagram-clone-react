'use client'
import User from '@/interface/User';
import Notification from '@/interface/Notification';
import { getUser, getUserNotifications } from '@/services/UserService';
import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import NotificationView from './NotificationView';
import StoryNotificationView from './StoryNotificationView';

//TODO revisar para hacer con server components
const NotificationsView: React.FC = () => {

    //TODO el id sacarlo del contexto despues de identificar al usuario
    const userId = 1
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [users, setUsers] = useState<{ [key: number]: User }>({})

    useEffect(() => {
        const fetchAndSetNotifications = async (): Promise<void> => {
            setNotifications(await getUserNotifications(userId));

            // Fetch users for the notifications
            const userIds = Array.from(new Set(notifications.map(notification => notification.action_user_id)));
            const usersData: User[] = await Promise.all(userIds.map(id => getUser(id)));
            const usersMap = Object.fromEntries(usersData.map(user => [user.id, user]));

            setUsers(usersMap);
        };

        fetchAndSetNotifications();
        console.log(notifications)
    }, []);

    return (
        <Flex style={{ display: 'flex', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <div className='flex flex-row w-full'>
                <aside style={{ width: '300px', borderRight: '1px solid #333', padding: '20px' }}>
                    <h1>Notificaciones</h1>
                    <a href="#" style={{ color: '#00f', textDecoration: 'none' }}>Filtrar</a>
                    {
                        notifications && notifications.length > 0 && notifications.map(notification => {
                            const actionUser = users[notification.action_user_id];

                            if (!actionUser) return <div key={notification.id}></div>; // In case user data is not yet loaded

                            return (
                                <div key={notification.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    {

                                        notification.related_entity_type === 'story' ?
                                            <StoryNotificationView notification={notification} actionUser={actionUser} />
                                            : <NotificationView notification={notification} actionUser={actionUser} />
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
