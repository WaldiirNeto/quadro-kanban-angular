import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteCardComponent } from './modal-delete-card.component';

describe('ModalDeleteCardComponent', () => {
  let component: ModalDeleteCardComponent;
  let fixture: ComponentFixture<ModalDeleteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
