import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCategoryBtnComponent } from './work-category-btn.component';

describe('WorkCategoryBtnComponent', () => {
  let component: WorkCategoryBtnComponent;
  let fixture: ComponentFixture<WorkCategoryBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkCategoryBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCategoryBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
