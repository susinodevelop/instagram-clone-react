import Sidebar from "@/components/Sidebar";
import { Flex } from "@chakra-ui/react";
import React from "react";

const Explore: React.FC = () => {

    const url: string = "https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/405369984_366479109172340_3464042000465999892_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=klWd7lrIwmUQ7kNvgHJ-iEv&_nc_ht=scontent.fvgo1-1.fna&oh=00_AYDSeo7zubILgu0fHBAC_HzSoEB5s1oak0uAhxDsh-zo3g&oe=6699897F"

    const posts = [
        { src: url, alt: 'Descripción de la imagen 1' },
        { src: url, alt: 'Descripción de la imagen 2' },
        { src: url, alt: 'Descripción de la imagen 3' },
        // Agrega más imágenes según sea necesario
    ];

    return (
        <Flex style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '20px' }}>
            <Sidebar />
            <h1>Galería</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '10px'
            }}>
                {posts.map((post, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        <img
                            src={post.src}
                            alt={post.alt}
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                    </div>
                ))}
            </div>
        </Flex>
    );
}

export default Explore;