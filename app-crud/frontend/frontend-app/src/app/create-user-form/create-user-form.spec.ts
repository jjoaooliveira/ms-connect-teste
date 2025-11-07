import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserForm } from './create-user-form';

describe('CreateUserForm', () => {
  let component: CreateUserForm;
  let fixture: ComponentFixture<CreateUserForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
