'use client';
import DirectMessage from '@/interface/DirectMessage';
import User from '@/interface/User';
import { getAllMessages } from '@/services/MessageService';
import { getUser } from '@/services/UserService';
import { timeAgo } from '@/utils/DateUtils';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// TODO remove 
// const conversations = [
//     {
//         id: 1,
//         user: 'Amelia',
//         lastMessage: 'Tú: 😂🤣😂',
//         time: '22 min',
//         userImage: 'https://via.placeholder.com/50'
//     },
//     {
//         id: 2,
//         user: 'RUBÉN | ENTRENADOR PERSONAL',
//         lastMessage: 'RUBÉN ha enviado un archivo adjunto.',
//         time: '1 h',
//         userImage: 'https://via.placeholder.com/50'
//     },
//     // Agrega más conversaciones según sea necesario
// ];

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
                                <div className='relative w-[50px] h-[50px] mr-[10px]'>
                                    <Image
                                        src={actionUser.profile_img}
                                        alt={actionUser.username}
                                        fill
                                        sizes='50px'
                                        className='rounded-full'
                                    />
                                    {/* TODO revisar el mensaje de timepo de carga de consola */}
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
