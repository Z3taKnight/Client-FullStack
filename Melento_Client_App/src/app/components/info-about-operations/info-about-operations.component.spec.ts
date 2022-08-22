import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAboutOperationsComponent } from './info-about-operations.component';

describe('InfoAboutOperationsComponent', () => {
  let component: InfoAboutOperationsComponent;
  let fixture: ComponentFixture<InfoAboutOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAboutOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAboutOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
