'use client'
import PostGrid from '@/components/PostsGrid';
import ReelView from '@/components/ReelView';
import Post from '@/interface/Post';
import Reel from '@/interface/Reel';
import User from '@/interface/User';
import UserStory from '@/interface/UserStory';
import { getUser, getUserPosts, getUserReels, getUserStories } from '@/services/UserService';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image } from '@chakra-ui/react';
import type { Metadata } from 'next';
import React, { useEffect, useState } from 'react';
import { LuCameraOff } from 'react-icons/lu';

//TODO convertir la pagina en un componente de servidor
//TODO crear un nuevo componente llamado ProvileView y meter toda la logica de cliente ahi
// export const metadata: Metadata = {
//     title: 'Perfil',
//     description: 'Página de perfil',
// }

const Profile: React.FC = () => {
    // TODO: meter el user id en contexto react cuando se añada autenticacion
    const userId = 1

    const [user, setUser] = useState<User>()
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
    const [userHighlights, setUserHighlights] = useState<UserStory[]>([])
    const [userPosts, setUserPosts] = useState<Post[]>([])
    const [userReels, setUserReels] = useState<Reel[]>([])
    const [userSavedPosts, setUserSavedPosts] = useState<Post[]>([])
    const [userTaggedPosts, setUserTaggedPosts] = useState<Post[]>([])

    //TODO en un futuro añadir los post guardados y con etiquetaciones

    const fetchAndSetPosts = async () => setUserPosts(await getUserPosts(userId))
    const fetchAndSetReels = async () => setUserReels(await getUserReels(userId))

    const handleTabChange = (index: number) => setActiveTabIndex(index)

    useEffect(() => {
        const fetchInitialData = async () => {
            setUser(await getUser(userId))
            //TODO cambiar la peticion a las highlights cuando estén listas
            setUserHighlights(await getUserStories(userId))
            setUserPosts(await getUserPosts(userId)) //TODO optimizar
        }
        fetchInitialData()
    }, [])

    useEffect(() => {
        switch (activeTabIndex) {
            case 0:
                fetchAndSetPosts()
            case 1:
                fetchAndSetReels()
            case 2:
            //TODO por implementar guardadas;
            case 3:
            //TODO por implementar etiquetadas
            default:
                fetchAndSetPosts()
        }
    }, [activeTabIndex])

    return (
        <Box className="mr-10 flex flex-col p-8 w-2/3 justify-center">
            <div className='flex flex-col '>
                {
                    user &&
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <Image src={user.profile_img} alt="profile" style={{ borderRadius: '50%', marginRight: '20px', width: '150px', height: '150px' }} />
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
                            <Image src={highlight.miniature_url} alt={highlight.title} style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '5px' }} />
                            <p style={{ fontSize: '12px' }}>{highlight.title}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <Tabs isFitted variant="enclosed" onChange={handleTabChange}>
                        <TabList mb="1em">
                            <Tab>PUBLICACIONES</Tab>
                            <Tab>REELS</Tab>
                            <Tab>GUARDADAS</Tab>
                            <Tab>ETIQUETADAS</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel tabIndex={0}>
                                <Box>
                                    {
                                        userPosts && userPosts.length > 0 ? (
                                            <div className='w-full h-full'>
                                                {/* TODO por que hace falta un div aqui */}
                                                {/* TODO revisar el tema de los tamaños en los grid de imagenes */}
                                                <PostGrid posts={userPosts} width='250px' height='250px' />
                                            </div>
                                        ) : (
                                            <div className='flex flex-col items-center justify-center h-full'>
                                                <p>No hay publicaciones disponibles</p>
                                                <LuCameraOff />
                                            </div>
                                        )
                                    }
                                </Box>
                            </TabPanel>
                            <TabPanel tabIndex={1}>
                                <Box className='flex flex-wrap'>
                                    {
                                        userReels && userReels.length > 0 ?
                                            (
                                                userReels.map(reel => (
                                                    <ReelView key={reel.id} reel={reel} width='150px' height='200px' withControls={false} className='m-1' />
                                                ))
                                            ) : (
                                                <div className='flex flex-col items-center justify-center h-full'>
                                                    <p>No hay publicaciones disponibles</p>
                                                    <LuCameraOff />
                                                </div>
                                            )
                                    }
                                </Box>
                            </TabPanel>
                            <TabPanel tabIndex={2}>
                                <Box>
                                    {/* Contenido para la pestaña de Guardadas */}
                                    {
                                        userSavedPosts && userSavedPosts.length > 0 ? (
                                            <div>
                                                {/* TODO por que hace falta un div aqui */}
                                                {/* TODO revisar el tema de los tamaños en los grid de imagenes */}
                                                <PostGrid posts={userSavedPosts} width='250px' height='250px' />
                                            </div>
                                        ) : (
                                            <div className='flex flex-col items-center justify-center h-full'>
                                                <p>No hay publicaciones disponibles</p>
                                                <LuCameraOff />
                                            </div>
                                        )
                                    }
                                </Box>
                            </TabPanel>
                            <TabPanel tabIndex={3}>
                                <Box>
                                    {/* Contenido para la pestaña de Etiquetadas */}
                                    {
                                        userTaggedPosts && userTaggedPosts.length > 0 ? (
                                            <div>
                                                {/* TODO por que hace falta un div aqui */}
                                                {/* TODO revisar el tema de los tamaños en los grid de imagenes */}
                                                <PostGrid posts={userTaggedPosts} width='250px' height='250px' />
                                            </div>
                                        ) : (
                                            <div className='flex flex-col items-center justify-center h-full'>
                                                <p>No hay publicaciones disponibles</p>
                                                <LuCameraOff />
                                            </div>
                                        )
                                    }
                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </div>
            </div>
        </Box>

    );
}

export default Profile;
