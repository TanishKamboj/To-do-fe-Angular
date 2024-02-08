import { Component, Input } from '@angular/core';
import { TaskTags } from '../../todo.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-tag-lable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-tag-lable.component.html',
  styleUrl: './task-tag-lable.component.css'
})
export class TaskTagLableComponent {

  @Input() taskTags !: TaskTags[];
  tagData = {
    'Programming': {
      imgLink: "https://images.pexels.com/photos/5083216/pexels-photo-5083216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Programming"
    },
    'Home Task': {
      imgLink: "https://images.pexels.com/photos/714563/pexels-photo-714563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Home Task"
    },
    'Office Work': {
      imgLink: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Office Work"
    },
    'Hobbies': {
      imgLink: "https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hobbies"
    }
  }
}
