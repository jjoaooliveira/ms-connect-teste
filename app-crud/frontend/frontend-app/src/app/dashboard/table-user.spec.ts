import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUser } from './table-user';

describe('TableUser', () => {
  let component: TableUser;
  let fixture: ComponentFixture<TableUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
