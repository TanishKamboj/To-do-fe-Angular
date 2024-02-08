import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLableComponent } from './task-lable.component';

describe('TaskLableComponent', () => {
  let component: TaskLableComponent;
  let fixture: ComponentFixture<TaskLableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskLableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
