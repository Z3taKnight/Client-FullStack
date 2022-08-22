import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSupplierComponent } from './single-supplier.component';

describe('SingleSupplierComponent', () => {
  let component: SingleSupplierComponent;
  let fixture: ComponentFixture<SingleSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
