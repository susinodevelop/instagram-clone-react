'use client'
import Sidebar from '@/components/Sidebar';
import React from 'react';

const profile = {
    username: 'miperfil_gz',
    name: 'Susino Develop',
    bio: 'Software developer | Fitness | Travel',
    link: 'https://linktr.ee/miperfil_gz',
    followers: 474,
    following: 219,
    posts: 42,
    highlights: [
        { id: 1, name: 'Valencia ES', image: 'https://via.placeholder.com/50' },
        { id: 2, name: 'Ruta Oeste PFBS', image: 'https://via.placeholder.com/50' },
        { id: 3, name: 'Tenerife IC', image: 'https://via.placeholder.com/50' },
        { id: 4, name: 'Oporto PT', image: 'https://via.placeholder.com/50' },
        { id: 5, name: 'Malta MT', image: 'https://via.placeholder.com/50' },
        { id: 6, name: 'Marrakech MA', image: 'https://via.placeholder.com/50' },
        { id: 7, name: 'Varsovia PL', image: 'https://via.placeholder.com/50' }
    ],
    postsImages: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
    ]
};

const Profile: React.FC = () => {
    return (
        <div style={{ display: 'flex', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <Sidebar />
            <main style={{ flex: 1, padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img src="https://via.placeholder.com/150" alt="profile" style={{ borderRadius: '50%', marginRight: '20px' }} />
                    <div>
                        <h2>{profile.username}</h2>
                        <button style={{ marginRight: '10px', padding: '5px 10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}>Editar perfil</button>
                        <button style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}>Ver archivo</button>
                        <button style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}>Herramientas de anuncios</button>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <p style={{ marginRight: '20px' }}><strong>{profile.posts}</strong> publicaciones</p>
                    <p style={{ marginRight: '20px' }}><strong>{profile.followers}</strong> seguidores</p>
                    <p><strong>{profile.following}</strong> seguidos</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h3>{profile.name}</h3>
                    <p>{profile.bio}</p>
                    <a href={profile.link} style={{ color: '#0095f6', textDecoration: 'none' }}>{profile.link}</a>
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                    {profile.highlights.map(highlight => (
                        <div key={highlight.id} style={{ marginRight: '10px', textAlign: 'center' }}>
                            <img src={highlight.image} alt={highlight.name} style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '5px' }} />
                            <p style={{ fontSize: '12px' }}>{highlight.name}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                        <span style={{ cursor: 'pointer' }}>PUBLICACIONES</span>
                        <span style={{ cursor: 'pointer' }}>REELS</span>
                        <span style={{ cursor: 'pointer' }}>GUARDADAS</span>
                        <span style={{ cursor: 'pointer' }}>ETIQUETADAS</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
                        {profile.postsImages.map((image, index) => (
                            <img key={index} src={image} alt={`post-${index}`} style={{ width: '100%' }} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Profile;
