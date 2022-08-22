import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackFungusAwarenessComponent } from './black-fungus-awareness.component';

describe('BlackFungusAwarenessComponent', () => {
  let component: BlackFungusAwarenessComponent;
  let fixture: ComponentFixture<BlackFungusAwarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackFungusAwarenessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackFungusAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
