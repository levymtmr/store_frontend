import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMakeSellsComponent } from './modal-make-sells.component';

describe('ModalMakeSellsComponent', () => {
  let component: ModalMakeSellsComponent;
  let fixture: ComponentFixture<ModalMakeSellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMakeSellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMakeSellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
