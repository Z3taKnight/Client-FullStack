import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistServicesComponent } from './specialist-services.component';

describe('SpecialistServicesComponent', () => {
  let component: SpecialistServicesComponent;
  let fixture: ComponentFixture<SpecialistServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
