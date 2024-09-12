import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() title: string = '';
  @Input() dueDate: string = '';
  @Input() summary: string = '';
  @Input() completed: boolean = false;

  markComplete() {
    this.completed = true;
    console.log(`${this.title} is marked complete!`);
  }
}