import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVendasModalComponent } from './form-vendas-modal.component';

describe('FormVendasModalComponent', () => {
  let component: FormVendasModalComponent;
  let fixture: ComponentFixture<FormVendasModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVendasModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVendasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
