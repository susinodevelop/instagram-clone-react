'use client'
import React from 'react';

const notifications = [
    {
        id: 1,
        category: 'Hoy',
        items: [
            {
                id: 1,
                user: 'Tienes 5 seguidores nuevos en Threads.',
                time: '2 d',
                userImage: 'https://via.placeholder.com/50'
            },
            {
                id: 2,
                user: 'A albondigaatomica le ha gustado tu historia.',
                time: '11 h',
                userImage: 'https://via.placeholder.com/50',
                storyImage: 'https://via.placeholder.com/50'
            },
            {
                id: 3,
                user: 'A albondigaatomica y junilapon les gusta tu historia.',
                time: '11 h',
                userImage: 'https://via.placeholder.com/50',
                storyImage: 'https://via.placeholder.com/50'
            }
        ]
    },
    {
        id: 2,
        category: 'Esta semana',
        items: [
            {
                id: 1,
                user: 'A ramo_dga le ha gustado tu historia.',
                time: '2 d',
                userImage: 'https://via.placeholder.com/50',
                storyImage: 'https://via.placeholder.com/50'
            },
            {
                id: 2,
                user: 'Tienes 4 seguidores nuevos en Threads.',
                time: '2 sem',
                userImage: 'https://via.placeholder.com/50'
            },
            {
                id: 3,
                user: 'A pepegotera y terita45 les gusta tu historia.',
                time: '5 d',
                userImage: 'https://via.placeholder.com/50',
                storyImage: 'https://via.placeholder.com/50'
            },
            {
                id: 4,
                user: 'Tienes 3 seguidores nuevos en Threads.',
                time: '2 sem',
                userImage: 'https://via.placeholder.com/50'
            }
        ]
    }
];

const Notifications: React.FC = () => {
    return (
        <div style={{ display: 'flex', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <aside style={{ width: '300px', borderRight: '1px solid #333', padding: '20px' }}>
                <h1>Notificaciones</h1>
                <a href="#" style={{ color: '#00f', textDecoration: 'none' }}>Filtrar</a>
                {notifications.map(section => (
                    <div key={section.id} style={{ marginBottom: '20px' }}>
                        <h2>{section.category}</h2>
                        {section.items.map(notification => (
                            <div key={notification.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <img src={notification.userImage} alt={notification.user} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                                <div style={{ flex: '1' }}>
                                    <p style={{ margin: '0' }}>{notification.user}</p>
                                    <p style={{ margin: '0', color: '#777' }}>{notification.time}</p>
                                </div>
                                {notification.storyImage && <img src={notification.storyImage} alt="story" style={{ width: '50px', height: '50px', borderRadius: '10px' }} />}
                            </div>
                        ))}
                    </div>
                ))}
            </aside>
            <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <p>Tus mensajes</p>
                    <p>Envía fotos y mensajes privados a un amigo o grupo</p>
                    <button style={{ backgroundColor: '#0095f6', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Enviar mensaje</button>
                </div>
            </main>
        </div>
    );
}

export default Notifications;
