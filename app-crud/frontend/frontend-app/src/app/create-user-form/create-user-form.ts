import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../user-service';
import { CreateUserRequest } from '../user-interface';
import { MatDialog } from '@angular/material/dialog';
import { InformationModal } from '../information-modal/information-modal';

/**
 * Component responsible for rendering the user creation form.
 * It includes form validation and submission logic.
 * @component
 */

@Component({
  selector: 'app-create-user-form',
  imports: [
    ReactiveFormsModule, 
    MatFormField, 
    MatError, 
    CommonModule, 
    MatLabel, 
    MatInputModule,
    MatButton
  ],
  templateUrl: './create-user-form.html',
  styleUrl: './create-user-form.scss',
})
export class CreateUserForm implements OnInit {
  isPhonePortrait = false;

  constructor(
    private responsive: BreakpointObserver, 
    private userService: UserService, 
    private dialog: MatDialog
  ){}

  userFormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.maxLength(100)
    ]),

    email: new FormControl('', [
      Validators.required, 
      Validators.email, 
      Validators.maxLength(100)
    ]),
    
    phone: new FormControl('', [
      Validators.maxLength(20), 
      Validators.required
    ])
  })

    ngOnInit(): void {
        this.responsive
            .observe(Breakpoints.HandsetPortrait)
            .subscribe(result => {
                this.isPhonePortrait = false; 

                if (result.matches) {
                    this.isPhonePortrait = true;
                }
            });
    }

    saveUser() {
        const newUser: CreateUserRequest = this.userFormGroup.value as CreateUserRequest;

        this.userService
            .saveUser(newUser)
            .subscribe({
                next: (userFromApi: any) => {
                    this.userFormGroup.reset();
                    
                    this.dialog.open(InformationModal, {
                        width: '320px',
                        data: 'Usuário criado com sucesso!'
                    });
                },
                error: (error) => {
                    this.dialog.open(InformationModal, {
                        width: '320px',
                        data: error.error.message || 'Ocorreu um erro ao deletar o usuário.'
                    });
                }
            });
    }
}
