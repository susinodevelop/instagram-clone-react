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

    const [notifications, setNotifications] = useState<Notification[]>([])
    const [users, setUsers] = useState<{ [key: number]: User }>({})

    const fetchAndSetNotifications = async (): Promise<void> => {
        //TODO el id sacarlo del contexto despues de identificar al usuario
        const retrievedNotifications: Notification[] = await getUserNotifications(1);
        setNotifications(retrievedNotifications);

        // Fetch users for the notifications
        const userIds = Array.from(new Set(retrievedNotifications.map(n => n.action_user_id)));
        const usersData: User[] = await Promise.all(userIds.map(id => getUser(id)));
        const usersMap = Object.fromEntries(usersData.map(user => [user.id, user]));

        setUsers(usersMap);
    };


    useEffect(() => {
        fetchAndSetNotifications();
    }, []);

    return (
        <Flex style={{ display: 'flex', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <div className='flex flex-row w-full'>
                <aside style={{ width: '300px', borderRight: '1px solid #333', padding: '20px' }}>
                    <h1>Notificaciones</h1>
                    <a href="#" style={{ color: '#00f', textDecoration: 'none' }}>Filtrar</a>
                    {
                        notifications.map(notification => {
                            const actionUser = users[notification.action_user_id];

                            if (!actionUser) return null; // In case user data is not yet loaded

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
