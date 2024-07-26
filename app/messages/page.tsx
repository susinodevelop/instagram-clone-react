'use client'
import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';

// TODO revisar e hacer fetching co usuario sender do mensajes
const Messages: React.FC = () => {

    useEffect(() => {
        document.title = 'Mensajes'
    }, [])

    return (
        <Flex style={{ display: 'flex', color: '#fff', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <p>Tus mensajes</p>
                <p>Envía fotos y mensajes privados a un amigo o grupo</p>
                <button style={{ backgroundColor: '#0095f6', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Enviar mensaje</button>
            </div>
        </Flex>
    );
}

export default Messages;
