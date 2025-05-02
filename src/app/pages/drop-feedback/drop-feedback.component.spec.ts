import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropFeedbackComponent } from './drop-feedback.component';

describe('DropFeedbackComponent', () => {
  let component: DropFeedbackComponent;
  let fixture: ComponentFixture<DropFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
