import { getAllPosts } from "@/services/PostService";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const metadata = {
    title: 'Explorar',
    description: 'Página de búsqueda de posts',
}

const Explore: React.FC = async () => {

    const posts = await getAllPosts()

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