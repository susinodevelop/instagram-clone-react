'use client';
import Sidebar from '@/components/Sidebar';
import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { Message } from 'postcss';
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

const Messages: React.FC = () => {

    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        async function fetchMessages() {
            try {
                const response = await axios.get('/api/messages');
                setMessages(response.data)
            } catch (error) {
                console.error("Error fetching messages: ", error)
            }
        }
        fetchMessages()
    }, [])

    return (
        <Flex style={{ display: 'flex', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <Sidebar showText={false} />
            <aside style={{ width: '300px', borderRight: '1px solid #333', padding: '20px' }}>
                <h1>miprofile_gz</h1>
                <div style={{ marginBottom: '20px' }}>
                    <button style={{ marginRight: '10px' }}>Primary</button>
                    <button style={{ marginRight: '10px' }}>General</button>
                    <button>Requests</button>
                </div>
                <div>
                    {messages.map(message => (
                        <div key={message.message_id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            {/* TODO introducir enlace entre mensaje y usuario y meter aqui la foto de perfil del usuario que envio el mensaje */}
                            <img src={"https://via.placeholder.com/50"} alt={message.sender_username} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                            <div>
                                <p style={{ margin: '0', fontWeight: 'bold' }}>{message.sender_username}</p>
                                <p style={{ margin: '0', color: '#bbb' }}>{message.message_content}</p>
                                <p style={{ margin: '0', color: '#777' }}>{message.timestamp}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
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
