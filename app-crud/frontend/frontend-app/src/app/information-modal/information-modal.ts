import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

/**
 * Component for the information modal dialog.
 * @component
 * @selector app-information-modal
 * @templateUrl ./information-modal.html
 * @styleUrl ./information-modal.scss
 * @description This component displays an information modal dialog
 * using Angular Material's MatDialog. It receives data via dependency injection.
 */

@Component({
  selector: 'app-information-modal',
  imports: [MatDialogModule, MatButton],
  templateUrl: './information-modal.html',
  styleUrl: './information-modal.scss',
})
export class InformationModal {
    content: string = '';
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.content = data;
    }
}
