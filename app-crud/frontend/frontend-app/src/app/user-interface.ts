/**
 * Interface definitions for user-related data structures.
 */

export interface User {
    id: string,
    name: string,
    email: string,
    phone: string,
    created_at: string,
    update_at: string
}

export interface CreateUserRequest {
    name: string,
    email: string,
    phone: string
}

export interface UpdateUserRequest {
    id: number,
    name: string,
    email: string,
    phone: string
}