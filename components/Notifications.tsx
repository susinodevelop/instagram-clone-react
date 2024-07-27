'use client'
import User from '@/interface/User';
import UserNotification from '@/interface/UserNotification';
import { getUser, getUserNotifications } from '@/services/UserService';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Notifications: React.FC = () => {

    const [notifications, setNotifications] = useState<UserNotification[]>([]);
    const [users, setUsers] = useState<{ [key: number]: User }>({});

    const fetchAndSetNotifications = async (): Promise<void> => {
        //TODO el id sacarlo del contexto despues de identificar al usuario
        const retrievedNotifications: UserNotification[] = await getUserNotifications(1);
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
                                    <Image src={actionUser.profile_img} alt={actionUser.username} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                                    <div style={{ flex: '1' }}>
                                        <p style={{ margin: '0' }}>{actionUser.username}</p>
                                        <p style={{ margin: '0', color: '#777' }}>{notification.created_at}</p>
                                    </div>
                                    {notification.related_entity_type === 'story' && <Image src={actionUser.profile_img} alt="story" style={{ width: '50px', height: '50px', borderRadius: '10px' }} />}
                                </div>
                            )
                        })
                    }
                </aside>
            </div>
        </Flex>
    );
}

export default Notifications;
