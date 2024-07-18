const API_URL = '/api/posts';

export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}

export async function fetchPost(id: number): Promise<Post> {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch post with id ${id}`);
    }
    return response.json();
}

export async function createPost(post: Partial<Post>): Promise<Post> {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    if (!response.ok) {
        throw new Error('Failed to create post');
    }
    return response.json();
}

export async function updatePost(id: number, post: Partial<Post>): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    if (!response.ok) {
        throw new Error(`Failed to update post with id ${id}`);
    }
}

export async function deletePost(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Failed to delete post with id ${id}`);
    }
}
