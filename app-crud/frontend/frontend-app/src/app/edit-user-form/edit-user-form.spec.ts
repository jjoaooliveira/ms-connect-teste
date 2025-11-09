import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserForm } from './edit-user-form';

describe('EditUserForm', () => {
  let component: EditUserForm;
  let fixture: ComponentFixture<EditUserForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
