'use client'
import { getAllPosts } from "@/services/PostService";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

//TODO separar los use effects en componentes y hacer la pagina server component
// export const metadata = {
//     title: 'Explorar',
//     description: 'Página de búsqueda de posts',
// }

const Explore: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([])

    // TODO revisar o porque hay que metelo nunha funcion
    useEffect(() => {
        const fetchAndSetPosts = async () => {
            const result = await getAllPosts()
            setPosts(result)
        }

        fetchAndSetPosts()
    }, [])

    return (
        <Flex style={{ color: '#fff', minHeight: '100vh', padding: '20px' }}>
            <h1>Galería</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '10px'
            }}>
                {posts.map((post, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        <img
                            src={post.url}
                            alt="Imagen" //TODO revisar
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                    </div>
                ))}
            </div>
        </Flex>
    );
}

export default Explore;