export interface Sighting {
    id: string;
    celebrity: string;
    location: string;
    timestamp: Date;
    userId: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
}