import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User, UpdateUserRequest } from '../user-interface';

/**
 * Component for the edit user form modal dialog.
 * @component
 * @selector app-edit-user-form
 * @templateUrl ./edit-user-form.html
 * @styleUrl ./edit-user-form.scss
 * @description This component provides a form for editing user details,
 * including responsive design handling.
 */

@Component({
  selector: 'app-edit-user-form',
    imports: [
    ReactiveFormsModule, 
    MatFormField, 
    MatError, 
    CommonModule, 
    MatLabel, 
    MatInputModule,
    MatButton
  ],
  templateUrl: './edit-user-form.html',
  styleUrl: './edit-user-form.scss',
})
export class EditUserForm {
  editUserform: FormGroup;
  isPhonePortrait = false;

  constructor(
    private responsive: BreakpointObserver,
    private dialogRef: MatDialogRef<EditUserForm>,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private builder: FormBuilder,
  ){
    this.editUserform = this.builder.group({
      name: [user.name, [
        Validators.required, 
        Validators.maxLength(100)]
      ],
      email: [user.email, [
        Validators.required, 
        Validators.email, 
        Validators.maxLength(100)]
      ],
      phone: [user.phone, [
        Validators.required, 
        Validators.maxLength(20)]
      ]
    });
  }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isPhonePortrait = false; 

        if (result.matches) {
          this.isPhonePortrait = true;
        }
  });
  }

  update() {
    // monta um objeto atualizado
    const updatedUser: UpdateUserRequest = this.editUserform.value;
    updatedUser.id = Number(this.user.id);
    this.dialogRef.close(updatedUser);
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
