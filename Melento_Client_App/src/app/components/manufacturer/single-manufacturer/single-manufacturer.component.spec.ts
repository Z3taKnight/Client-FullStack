import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleManufacturerComponent } from './single-manufacturer.component';

describe('SingleManufacturerComponent', () => {
  let component: SingleManufacturerComponent;
  let fixture: ComponentFixture<SingleManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleManufacturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
