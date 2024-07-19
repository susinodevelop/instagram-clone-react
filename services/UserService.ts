const API_URL = '/api/users';

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch reels');
    }
    return response.json();
}

export async function fetchUser(userId: number): Promise<User> {
    const response = await fetch(`${API_URL}/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch user with id ${userId}`);
    }
    return response.json();
}

export async function fetchUserPosts(userId: number): Promise<UserPost[]> {
    const response = await fetch(`${API_URL}/${userId}/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch posts for user with id ${userId}`);
    }
    return response.json();
}

export async function fetchUserStories(userId: number): Promise<UserStory[]> {
    const response = await fetch(`${API_URL}/${userId}/stories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch stories for user with id ${userId}`);
    }
    return response.json();
}

export async function fetchUserNotifications(userId: number): Promise<UserNotification[]> {
    const response = await fetch(`${API_URL}/${userId}/notifications`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch stories for user with id ${userId}`);
    }
    return response.json();
}

export async function fetchUserMessages(userId: number): Promise<DirectMessage[]> {
    const response = await fetch(`${API_URL}/${userId}/messages`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch messages for user with id ${userId}`);
    }
    return response.json();
}