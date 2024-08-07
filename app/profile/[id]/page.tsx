'use client'
import ReelView from '@/components/ReelView';
import Post from '@/interface/Post';
import Reel from '@/interface/Reel';
import User from '@/interface/User';
import Story from '@/interface/Story';
import { getUser, getUserPosts, getUserReels, getUserStories } from '@/services/UserService';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import type { Metadata } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { LuCameraOff } from 'react-icons/lu';
import StoriesModal from '@/components/StoriesModal';
import PostModal from '@/components/PostModal';
import ReelModal from '@/components/ReelModal';
import ProfileImage from '@/components/ProfileImage';

//TODO convertir la pagina en un componente de servidor
//TODO crear un nuevo componente llamado ProvileView y meter toda la logica de cliente ahi
// export const metadata: Metadata = {
//     title: 'Perfil',
//     description: 'Página de perfil',
// }

const TAMAÑO_IMAGEN_1_1 = 250

interface ProfilePage {
    params: {
        id: string
    }
}

const ProfilePage = ({ params }: ProfilePage) => {

    const { id } = params
    const userId = Number(id)
    const [user, setUser] = useState<User>()
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
    const [userHighlights, setUserHighlights] = useState<Story[]>([])
    const [userPosts, setUserPosts] = useState<Post[]>([])
    const [userReels, setUserReels] = useState<Reel[]>([])
    const [userSavedPosts, setUserSavedPosts] = useState<Post[]>([])
    const [userTaggedPosts, setUserTaggedPosts] = useState<Post[]>([])
    const [isStoriesModalOpen, setStoriesModalOpen] = useState<boolean>(false)
    const [userStories, setUserStories] = useState<Story[]>([])
    const [isPostModalOpen, setPostModalOpen] = useState<boolean>(false)
    const [activePost, setActivePost] = useState<Post>()
    const [isReelModalOpen, setReelModalOpen] = useState<boolean>(false)
    const [activeReel, setActiveReel] = useState<Reel>()


    //TODO en un futuro añadir los post guardados y con etiquetaciones

    const fetchAndSetPosts = async () => setUserPosts(await getUserPosts(userId))
    const fetchAndSetReels = async () => setUserReels(await getUserReels(userId))
    const fetchAndSetSavedPosts = async () => setUserSavedPosts([]) //TODO cargar saved posts
    const fetchAndSetTaggedPosts = async () => setUserTaggedPosts([]) //TODO cargar tagged posts
    const handleTabChange = (index: number) => setActiveTabIndex(index)
    const handleSelectPost = (post: Post) => setActivePost(post)
    const handleSelectReel = (reel: Reel) => setActiveReel(reel)
    const openReelModal = () => setReelModalOpen(true)
    const closeReelModal = () => setReelModalOpen(false)
    const openPostModal = () => setPostModalOpen(true)
    const closePostModal = () => setPostModalOpen(false)
    const openStoriesModal = () => setStoriesModalOpen(true)
    const closeStoriesModal = () => setStoriesModalOpen(false)
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
                fetchAndSetSavedPosts()
            case 3:
                fetchAndSetTaggedPosts()
            default:
                fetchAndSetPosts()
        }
    }, [activeTabIndex])

    useEffect(() => {
        const loadStories = async () => {
            if (isStoriesModalOpen) {
                setUserStories(await getUserStories(userId))
            } else {
                setUserStories([])
            }
        }
        loadStories()
    }, [isStoriesModalOpen])

    return (
        <>
            <Box className="mr-10 flex flex-col p-8 w-5/6 justify-center">
                <div className='flex flex-col '>
                    {
                        user &&
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <ProfileImage user={user} width={150} height={150} />
                            <div className='ml-8'>
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
                                <div className='relative w-[60px] h-[60px] mb-[5px]'>
                                    <Image src={highlight.miniature_url}
                                        alt={highlight.title}
                                        fill
                                        sizes='60px'
                                        className='rounded-full'
                                    />
                                </div>
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
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '5px' }}>
                                                        {userPosts && userPosts.map((post) => (
                                                            <div key={post.id} className='relative w-full aspect-square'>
                                                                <Image
                                                                    src={post.url}
                                                                    alt={`post-${post.id}`}
                                                                    fill
                                                                    sizes={`${TAMAÑO_IMAGEN_1_1}px`}
                                                                    style={{ objectFit: "cover" }}
                                                                    onClick={() => {
                                                                        handleSelectPost(post)
                                                                        openPostModal()
                                                                    }}
                                                                    className="aspect-square cursor-pointer"
                                                                    priority
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
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
                                                        <ReelView
                                                            key={reel.id}
                                                            reel={reel}
                                                            width='23%'
                                                            height='auto'
                                                            withControls={false}
                                                            className='m-1 cursor-pointer'
                                                            onClick={() => {
                                                                handleSelectReel(reel)
                                                                openReelModal()
                                                            }}
                                                        />

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
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '5px' }}>
                                                        {userSavedPosts && userSavedPosts.map((post) => (
                                                            <div key={post.id} className='relative w-full aspect-square'>
                                                                <Image
                                                                    src={post.url}
                                                                    alt={`post-${post.id}`}
                                                                    fill
                                                                    sizes={`${TAMAÑO_IMAGEN_1_1}px`}
                                                                    style={{ objectFit: "cover" }}
                                                                    onClick={() => {
                                                                        handleSelectPost(post)
                                                                        openPostModal()
                                                                    }}
                                                                    className="aspect-square cursor-pointer"
                                                                    priority
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
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
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '5px' }}>
                                                        {userTaggedPosts && userTaggedPosts.map((post) => (
                                                            <div key={post.id} className='relative w-full aspect-square'>
                                                                <Image
                                                                    src={post.url}
                                                                    alt={`post-${post.id}`}
                                                                    fill
                                                                    sizes={`${TAMAÑO_IMAGEN_1_1}px`}
                                                                    style={{ objectFit: "cover" }}
                                                                    onClick={() => {
                                                                        handleSelectPost(post)
                                                                        openPostModal()
                                                                    }}
                                                                    className="aspect-square cursor-pointer"
                                                                    priority
                                                                />
                                                            </div>
                                                        ))}
                                                    </div> </div>
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

            {activePost && <PostModal post={activePost!} isOpen={isPostModalOpen} onClose={closePostModal} />}
            {activeReel && <ReelModal reel={activeReel!} isOpen={isReelModalOpen} onClose={closeReelModal} />}
            {userStories && userStories.length > 0 && <StoriesModal stories={userStories} isOpen={isStoriesModalOpen} onClose={closeStoriesModal} />}
        </>
    );
}

export default ProfilePage;
