'use client';
import Sidebar from '@/components/Sidebar';
import { fetchMessages } from '@/services/MessageService';
import { Flex } from '@chakra-ui/react';
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
const Messages: React.FC = () => {

    const [messages, setMessages] = useState<DirectMessage[]>([])

    useEffect(() => {
        const fetchAndSetMessages = async (): Promise<void> => {

            const messages: DirectMessage[] = await fetchMessages()

            // TODO ver aqui para traer los datos del usuario de cada mensaje
            setMessages(messages)
        }
        fetchAndSetMessages()
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
                        <div key={message.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            {/* TODO introducir enlace entre mensaje y usuario y meter aqui la foto de perfil del usuario que envio el mensaje */}
                            <img src={"https://via.placeholder.com/50"} /*TODO revisar */ alt={'Imagen placeholder'} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                            <div>
                                <p style={{ margin: '0', fontWeight: 'bold' }}>usuario {/*message.sender_username*/}</p>
                                <p style={{ margin: '0', color: '#bbb' }}>{message.content}</p>
                                <p style={{ margin: '0', color: '#777' }}>{message.created_at}</p>
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
