import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVendasComponent } from './form-vendas.component';

describe('FormVendasComponent', () => {
  let component: FormVendasComponent;
  let fixture: ComponentFixture<FormVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
