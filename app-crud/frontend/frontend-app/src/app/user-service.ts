import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map, BehaviorSubject } from "rxjs";
import { CreateUserRequest, UpdateUserRequest, User } from "./user-interface";

/** Service for managing user data via HTTP requests.
 * @method getUsers - Retrieves a list of users.
 * @method saveUser - Creates a new user.
 * @method updateUser - Updates an existing user.
 * @method deleteUser - Deletes a user by ID.
 */

@Injectable({
  providedIn: 'root'
})
export class UserService  {
    
    private baseUrl = 'http://host.docker.internal:8000/api/users';
    private totalUsersSubject = new BehaviorSubject<number>(0);
    totalUsers = this.totalUsersSubject.asObservable();

    constructor(private http: HttpClient) {}

    refreshTotalUsers(): void {
        this.getUsers()
            .pipe(map((response: any) => response.data.length))
            .subscribe(total => this.totalUsersSubject.next(total));
    }

    /**
     * Retrieves a list of users from the backend API.
     * @returns An Observable emitting an array of users. 
     */
    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
    }

    /**
     * Creates a new user via the backend API.
     * @param user - The user data to be created.
     * @returns An Observable emitting the created user data.
     */
    saveUser(user: CreateUserRequest): Observable<any[]> {
        return this.http.post<User[]>(this.baseUrl, user);
    }

    /**
     * Updates an existing user via the backend API.
     * @param user - The user data to be updated.
     * @returns An Observable emitting the updated user data.
     */
    updateUser(user: UpdateUserRequest): Observable<User[]> {
        return this.http.put<User[]>(`${this.baseUrl}/${user.id}`, user);
    }

    /**
     * Deletes a user by ID via the backend API.
     * @param id - The ID of the user to be deleted.
     * @returns An Observable emitting the response from the delete operation.
     */

    deleteUser(id: number): Observable<any[]> {
        return this.http.delete<User[]>(`${this.baseUrl}/${id}`);
    }
}