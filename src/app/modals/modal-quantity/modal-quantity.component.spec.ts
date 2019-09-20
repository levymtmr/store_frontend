import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuantityComponent } from './modal-quantity.component';

describe('ModalQuantityComponent', () => {
  let component: ModalQuantityComponent;
  let fixture: ComponentFixture<ModalQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
