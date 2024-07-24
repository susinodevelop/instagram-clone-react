import { Image } from "@chakra-ui/react";

interface PostGridProps {
    posts: Post[],
    width: string,
    height: string
}

const PostGrid = (props: PostGridProps) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '5px' }}>
            {Array.isArray(props.posts) && props.posts.map((post) => (
                <Image
                    key={post.id}
                    src={post.url}
                    alt={`post-${post.id}`}
                    width={props.width}
                    height={props.height}
                    objectFit="cover"
                />
            ))}
        </div>
    )
}

export default PostGrid;