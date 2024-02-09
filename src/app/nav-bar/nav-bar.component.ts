import { Component } from '@angular/core';
import { CrudCardComponent } from '../crud-card/crud-card.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CrudCardComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  showAddTask = false;

  onAddTaskClick() {
    this.showAddTask = true;
  }
  onShowTaskChanged(value: boolean) {
    this.showAddTask = value;
  }
}
