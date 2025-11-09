import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationModal } from './information-modal';

describe('InformationModal', () => {
  let component: InformationModal;
  let fixture: ComponentFixture<InformationModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
