'use client'
import Sidebar from '@/components/Sidebar';
import { getUser, getUserPosts, getUserStories } from '@/services/UserService';
import React, { useEffect, useState } from 'react';

// TODO eliminar cuando funcione consulta a bbdd
// const profile = {
//     username: 'miperfil_gz',
//     name: 'Susino Develop',
//     bio: 'Software developer | Fitness | Travel',
//     link: 'https://linktr.ee/miperfil_gz',
//     followers: 474,
//     following: 219,
//     posts: 42,
//     highlights: [
//         { id: 1, name: 'Valencia ES', image: 'https://via.placeholder.com/50' },
//         { id: 2, name: 'Ruta Oeste PFBS', image: 'https://via.placeholder.com/50' },
//         { id: 3, name: 'Tenerife IC', image: 'https://via.placeholder.com/50' },
//         { id: 4, name: 'Oporto PT', image: 'https://via.placeholder.com/50' },
//         { id: 5, name: 'Malta MT', image: 'https://via.placeholder.com/50' },
//         { id: 6, name: 'Marrakech MA', image: 'https://via.placeholder.com/50' },
//         { id: 7, name: 'Varsovia PL', image: 'https://via.placeholder.com/50' }
//     ],
//     postsImages: [
//         'https://via.placeholder.com/200',
//         'https://via.placeholder.com/200',
//         'https://via.placeholder.com/200',
//         'https://via.placeholder.com/200',
//         'https://via.placeholder.com/200',
//         'https://via.placeholder.com/200',
//         'https://via.placeholder.com/200',
//         'https://via.placeholder.com/200'
//     ]
// };

const Profile: React.FC = () => {

    //TODO meter esto en un contexto React (ver como funciona en Next Js 14)
    const [user, setUser] = useState<User>({
        id: 1,
        username: "",
        biography_name: "",
        biography_content: "",
        biography_url: "",
        profile_img: "",
        created_at: ""
    })

    const [userPosts, setUserPosts] = useState<UserPost[]>([])
    // TODO cambiar story por Highlight (crear en bbdd)
    const [userHightlights, setUserHighlights] = useState<UserStory[]>([])


    //TODO revisar el id que se le pasa aqui(debe obtenerse al autenticar usuario)
    const fetchAndSetUser = async (): Promise<void> => {
        const retrievedUser: User = await getUser(1)
        setUser(retrievedUser)
    }

    const fetchAndSetUserPosts = async (): Promise<void> => {
        const retrievedPosts: UserPost[] = await getUserPosts(1)
        setUserPosts(retrievedPosts)
    }

    const fetchAndSetUserHighlights = async (): Promise<void> => {
        //TODO cambiar por fetch hightlights cuando lo haya
        const retrievedStories: UserStory[] = await getUserStories(1)
        setUserHighlights(retrievedStories)
    }

    useEffect(() => {
        fetchAndSetUser()
        fetchAndSetUserPosts()
        fetchAndSetUserHighlights()
    }, [])

    return (
        <div style={{ display: 'flex', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <Sidebar />
            <main style={{ flex: 1, padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img src={user.profile_img} alt="profile" style={{ borderRadius: '50%', marginRight: '20px', width: '150px', height: '150px' }} />
                    <div>
                        <h2>{user.username}</h2>
                        <button style={{ marginRight: '10px', padding: '5px 10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}>Editar perfil</button>
                        <button style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}>Ver archivo</button>
                        <button style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}>Herramientas de anuncios</button>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <p style={{ marginRight: '20px' }}><strong>{userPosts.length}</strong> publicaciones</p>
                    {/* <p style={{ marginRight: '20px' }}><strong>{profile.followers}</strong> seguidores</p> */}
                    {/* <p><strong>{profile.following}</strong> seguidos</p> */}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h3>{user.biography_name}</h3>
                    <p>{user.biography_content}</p>
                    <a href={user.biography_url} style={{ color: '#0095f6', textDecoration: 'none' }}>{user.biography_url}</a>
                </div>
                {/* 
                TODO en vez de usar stories usar highlights
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                    {profile.highlights.map(highlight => (
                        <div key={highlight.id} style={{ marginRight: '10px', textAlign: 'center' }}>
                            <img src={highlight.image} alt={highlight.name} style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '5px' }} />
                            <p style={{ fontSize: '12px' }}>{highlight.name}</p>
                        </div>
                    ))}
                </div> */}
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                    {userHightlights.map(highlight => (
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
                        {Array.isArray(userPosts) && userPosts.map((post, index) => (
                            <img key={index} src={post.url} alt={`post-${index}`} style={{ width: '100%' }} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Profile;
