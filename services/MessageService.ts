const API_URL = '/api/messages';

export async function fetchMessages(): Promise<DirectMessage[]> {
    const response = await fetch(API_URL)
    if (!response.ok) {
        throw new Error('Failed to fetch messages')
    }
    return response.json();
}
