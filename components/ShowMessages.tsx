'use client';
import DirectMessage from '@/interface/DirectMessage';
import User from '@/interface/User';
import { getAllMessages } from '@/services/MessageService';
import { getUser } from '@/services/UserService';
import { timeAgo } from '@/utils/DateUtils';
import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ProfileImage from './ProfileImage';

// TODO revisar e hacer fetching co usuario sender do mensajes
const ShowMessages: React.FC = () => {

    const [messages, setMessages] = useState<DirectMessage[]>([])
    const [users, setUsers] = useState<{ [key: number]: User }>({})

    useEffect(() => {
        const fetchAndSetMessages = async (): Promise<void> => {

            const messages: DirectMessage[] = await getAllMessages()

            // TODO ver aqui para traer los datos del usuario de cada mensaje
            // Fetch users for the messages
            const userIds = Array.from(new Set(messages.map(m => m.action_user_id)));
            const usersData: User[] = await Promise.all(userIds.map(id => getUser(id)));
            const usersMap = Object.fromEntries(usersData.map(user => [user.id, user]));

            setMessages(messages)
            setUsers(usersMap)
        }
        fetchAndSetMessages()
    }, [])

    return (
        <Flex style={{ display: 'flex', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <aside style={{ width: '300px', borderRight: '1px solid #333', padding: '20px' }}>
                <h1>miprofile_gz</h1>
                <div style={{ marginBottom: '20px' }}>
                    <button style={{ marginRight: '10px' }}>Primary</button>
                    <button style={{ marginRight: '10px' }}>General</button>
                    <button>Requests</button>
                </div>
                <div>
                    {messages.map(message => {

                        const actionUser = users[message.action_user_id]

                        if (!actionUser) return null;  // In case user data is not yet loaded

                        return (
                            <div key={message.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <div className='mr-[20px]'>
                                    <ProfileImage user={actionUser} />
                                </div>
                                <div>
                                    <p style={{ margin: '0', fontWeight: 'bold' }}>{actionUser.username}</p>
                                    <p style={{ margin: '0', color: '#bbb' }}>{message.content}</p>
                                    <p style={{ margin: '0', color: '#777' }}>{timeAgo(message.created_at)}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </aside>
        </Flex>
    );
}

export default ShowMessages;
