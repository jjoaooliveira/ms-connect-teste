import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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

  constructor(private responsive: BreakpointObserver){}

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
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isPhonePortrait = false; 

        if (result.matches) {
          this.isPhonePortrait = true;
        }
  });
  }
}
