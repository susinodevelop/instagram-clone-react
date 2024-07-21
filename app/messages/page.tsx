'use client';
import Sidebar from '@/components/Sidebar';
import { getAllMessages } from '@/services/MessageService';
import { getUser } from '@/services/UserService';
import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';


// TODO revisar e hacer fetching co usuario sender do mensajes
const Messages: React.FC = () => {

    const [messages, setMessages] = useState<DirectMessage[]>([])
    const [users, setUsers] = useState<{ [key: number]: User }>({})

    useEffect(() => {
        const fetchAndSetMessages = async (): Promise<void> => {

            const messages: DirectMessage[] = await getAllMessages()

            // TODO ver aqui para traer los datos del usuario de cada mensaje
            // Fetch users for the messages
            const userIds = Array.from(new Set(messages.map(m => m.action_user_id)));
            const usersData = await Promise.all(userIds.map(id => getUser(id)));
            const usersMap = Object.fromEntries(usersData.map(user => [user.id, user]));

            setMessages(messages)
            setUsers(usersMap)
        }
        fetchAndSetMessages()
    }, [])

    return (
        <Flex style={{ display: 'flex', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <Sidebar showText={false} />
            <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <p>Tus mensajes</p>
                    <p>Envía fotos y mensajes privados a un amigo o grupo</p>
                    <button style={{ backgroundColor: '#0095f6', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Enviar mensaje</button>
                </div>
            </main>
        </Flex>
    );
}

export default Messages;
