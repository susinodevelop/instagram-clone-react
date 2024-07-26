'use client'
import PostGrid from '@/components/PostsGrid';
import User from '@/interface/User';
import UserPost from '@/interface/UserPost';
import UserStory from '@/interface/UserStory';
import { getUser, getUserPosts, getUserStories } from '@/services/UserService';
import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Profile: React.FC = () => {
    // TODO: meter el user id en contexto react cuando se añada autenticacion
    const userId = 1

    const [user, setUser] = useState<User>()
    const [userPosts, setUserPosts] = useState<UserPost[]>([])
    const [userHighlights, setUserHighlights] = useState<UserStory[]>([])

    const fetchData = async () => {
        setUser(await getUser(userId))
        setUserPosts(await getUserPosts(userId))
        //TODO cambiar la peticion a las highlights cuando estén listas
        setUserHighlights(await getUserStories(userId))
    }

    useEffect(() => {
        document.title = 'Perfil'
        fetchData()
    }, [])

    // TODO: revisar el id que se le pasa aqui(debe obtenerse al autenticar usuario)

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
                    {userHighlights && userHighlights.map(highlight => (
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
