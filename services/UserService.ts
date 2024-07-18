const API_URL = '/api/users';

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch reels');
    }
    return response.json();
}
