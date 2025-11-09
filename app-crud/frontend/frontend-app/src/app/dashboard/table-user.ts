import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { User } from '../user-interface';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { EditUserForm } from '../edit-user-form/edit-user-form';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserModal } from '../delete-user-modal/delete-user-modal';
import { MatButton } from '@angular/material/button';
import { InformationModal } from '../information-modal/information-modal';

/**
 * Component to display and manage a table of users.
 * @component
 * @selector app-table-user
 * @templateUrl ./table-user.html
 * @styleUrl ./table-user.scss
 * @implements OnInit
 * @description This component displays a table of users with options to edit and delete each user.
 */
@Component({
  selector: 'app-table-user',
  imports: [MatTableModule, MatIcon, MatButton],
  templateUrl: './table-user.html',
  styleUrl: './table-user.scss',
})
export class TableUser implements OnInit {
    users: User[] = [];
    columnsToDisplay: string[] = [
        'id',
        'name', 
        'email', 
        'phone', 
        'created_at', 
        'update_at',
        'actions'
    ];
  
    constructor(private userService: UserService, private dialog: MatDialog) {};

    itemParaEditar: any = null;

    ngOnInit(): void {
        this.userService.getUsers().subscribe(
            (buffer: any) => {
                this.users = buffer.data;
            }
        )
    }

    editUser(item: any) {
        const dialogRef = this.dialog.open(EditUserForm, {
            width: '480px',
            data: { ...item }
        });

        dialogRef.afterClosed().subscribe((updatedUser) => {
            if (updatedUser) {

                this.userService.updateUser(updatedUser).subscribe({
                    next: (response: any) => {
                        let responseUser = response.user;
                        const index = this.users.findIndex(u => u.id === responseUser.id);
    
                        if (index !== -1) {
                            this.users[index] = response.user;
                            this.users = [...this.users];
                        }
                        this.dialog.open(InformationModal, {
                            width: '320px',
                            data: 'Usuário atualizado com sucesso!'
                        });
                    },
                    error: (error: any) => {
                        this.dialog.open(InformationModal, {
                            width: '320px',
                            data: error.error.message || 'Ocorreu um erro ao atualizar o usuário.'
                        });
                    }
                });
            };
        });
    }
    deleteUser(user: User) {
        const dialogRef = this.dialog.open(DeleteUserModal, {
            width: '320px',
            data: { user }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.userService.deleteUser(result.id).subscribe({
                    next: () => {
                        this.users = this.users.filter(u => u.id !== result.id);
                        this.dialog.open(InformationModal, {
                        width: '320px',
                        data: 'Usuário deletado com sucesso!'
                });
                    },
                    error: (error: any) => {
                        this.dialog.open(InformationModal, {
                            width: '320px',
                            data: error.error.message || 'Ocorreu um erro ao deletar o usuário.'
                        });
                    }
                });
            }
        });
    }
}
