import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToFaqComponent } from './link-to-faq.component';

describe('LinkToFaqComponent', () => {
  let component: LinkToFaqComponent;
  let fixture: ComponentFixture<LinkToFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkToFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkToFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
