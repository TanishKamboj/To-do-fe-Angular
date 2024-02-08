import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTagLableComponent } from './task-tag-lable.component';

describe('TaskTagLableComponent', () => {
  let component: TaskTagLableComponent;
  let fixture: ComponentFixture<TaskTagLableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTagLableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskTagLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
