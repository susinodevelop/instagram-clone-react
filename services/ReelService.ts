const API_URL = '/api/reels';

export async function fetchReels(): Promise<Reel[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch reels');
    }
    return response.json();
}

export async function fetchReel(id: number): Promise<UserReel> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch reel with id ${id}`);
    }
    return response.json();
}

export async function createReel(reel: Partial<Reel>): Promise<Reel> {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reel),
    });
    if (!response.ok) {
        throw new Error('Failed to create reel');
    }
    return response.json();
}

export async function updateReel(id: number, reel: Partial<Reel>): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reel),
    });
    if (!response.ok) {
        throw new Error(`Failed to update reel with id ${id}`);
    }
}

export async function deleteReel(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Failed to delete reel with id ${id}`);
    }
}
