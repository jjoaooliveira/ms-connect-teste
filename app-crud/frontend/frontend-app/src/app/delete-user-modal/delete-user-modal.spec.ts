import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserModal } from './delete-user-modal';

describe('ConfirmModal', () => {
  let component: DeleteUserModal;
  let fixture: ComponentFixture<DeleteUserModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUserModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
