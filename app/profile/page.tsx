// pages/profile.js
import PostGrid from '@/components/PostsGrid';
import Post from '@/interface/Post';
import User from '@/interface/User';
import UserStory from '@/interface/UserStory';
import { getUser, getUserPosts, getUserStories } from '@/services/UserService';
import { Box } from '@chakra-ui/react';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Perfil',
    description: 'Página de perfil',
}

interface ProfileProps {
    user: User,
    userPosts: Post[],
    userHighlights: UserStory[]
}

export const getServerSideProps = async () => {
    const userId = 1; // Reemplaza con la lógica para obtener el userId
    const user = await getUser(userId);
    const userPosts = await getUserPosts(userId);
    const userHighlights = await getUserStories(userId);

    return {
        props: {
            user,
            userPosts,
            userHighlights,
        } as ProfileProps,
    };
}

const Profile = ({ user, userPosts, userHighlights }: ProfileProps) => {
    return (
        <Box className="mr-10 flex flex-col p-8 w-2/3 justify-center">
            <div className='flex flex-col '>
                {
                    user &&
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <img src={user.profile_img} alt="profile" style={{ borderRadius: '50%', marginRight: '20px', width: '150px', height: '150px' }} />
                        <div>
                            <h2 className="font-bold text-2xl my-5">{user.username}</h2>
                            <button style={{ marginRight: '10px', padding: '5px 10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}>Editar perfil</button>
                            <button style={{ marginRight: '10px', padding: '5px 10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}>Ver archivo</button>
                            <button style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}>Herramientas de anuncios</button>
                        </div>
                    </div>
                }

                {
                    userPosts &&
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <p style={{ marginRight: '20px' }}><strong>{userPosts.length}</strong> publicaciones</p>
                    </div>
                }
                {
                    user &&
                    <div style={{ marginBottom: '20px' }}>
                        <h3>{user.biography_name}</h3>
                        <p>{user.biography_content}</p>
                        <a href={user.biography_url} style={{ color: '#0095f6', textDecoration: 'none' }}>{user.biography_url}</a>
                    </div>
                }
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                    {userHighlights && Array.isArray(userHighlights) && userHighlights.map(highlight => (
                        <div key={highlight.id} style={{ marginRight: '10px', textAlign: 'center' }}>
                            <img src={highlight.miniature_url} alt={highlight.title} style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '5px' }} />
                            <p style={{ fontSize: '12px' }}>{highlight.title}</p>
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
                    {
                        userPosts &&
                        <PostGrid posts={userPosts} width='250px' height='250px' />
                    }
                </div>
            </div>
        </Box>
    );
}

export default Profile;
