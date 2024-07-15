import Sidebar from '@/components/Sidebar';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { FaHeart, FaComment, FaPaperPlane, FaBookmark } from 'react-icons/fa';

const reels = [
    {
        id: 1,
        user: 'kreisi_random',
        userImage: 'https://via.placeholder.com/50',
        content: 'https://via.placeholder.com/300x500',
        caption: 'Noooooo, porque son así 😭...',
        music: 'Hislerim (feat. Zerrin) - Serhat Durmus',
        likes: 84
    },
    {
        id: 2,
        user: 'kreisi_random',
        userImage: 'https://via.placeholder.com/50',
        content: 'https://via.placeholder.com/300x500',
        caption: 'Noooooo, porque son así 😭...',
        music: 'Hislerim (feat. Zerrin) - Serhat Durmus',
        likes: 84
    },
    {
        id: 3,
        user: 'kreisi_random',
        userImage: 'https://via.placeholder.com/50',
        content: 'https://via.placeholder.com/300x500',
        caption: 'Noooooo, porque son así 😭...',
        music: 'Hislerim (feat. Zerrin) - Serhat Durmus',
        likes: 84
    },
    // Agrega más reels según sea necesario
];

const Reels: React.FC = () => {
    return (
        <Flex style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '20px' }}>
            <Sidebar />
            <div style={{ justifyContent: "center", width: "100%" }}>
                <h1>Reels</h1>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    {reels.map(reel => (
                        <div key={reel.id} style={{ width: '300px', position: 'relative' }}>
                            <img src={reel.content} alt="reel" style={{ width: '100%', borderRadius: '10px' }} />
                            <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', alignItems: 'center' }}>
                                <img src={reel.userImage} alt={reel.user} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                                <p>{reel.user} • Seguir</p>
                            </div>
                            <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                                <p>{reel.caption}</p>
                                <p style={{ color: '#bbb' }}>{reel.music}</p>
                            </div>
                            <div style={{ position: 'absolute', bottom: '10px', right: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                <FaHeart /> {reel.likes}
                                <FaComment />
                                <FaPaperPlane />
                                <FaBookmark />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Flex >
    );
}

export default Reels;
