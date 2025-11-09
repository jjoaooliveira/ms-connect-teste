import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

/**
 * Component for the delete user confirmation modal dialog.
 * @component
 * @selector app-delete-user-modal
 * @templateUrl ./delete-user-modal.html
 * @styleUrl ./delete-user-modal.scss
 * @description This component provides a confirmation dialog for deleting a user.
 */

@Component({
    selector: 'app-delete-user-modal',
    imports: [MatDialogModule, MatButton],
    templateUrl: './delete-user-modal.html',
    styleUrl: './delete-user-modal.scss',
})
export class DeleteUserModal {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
