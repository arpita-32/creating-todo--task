import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { TaskComponent } from '../tasks/task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, TaskComponent, NgFor, NgIf],  // Add FormsModule here
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() name!: string;

  tasks = [
    { title: 'Task 1', dueDate: '2024-09-11', summary: 'Summary of Task 1' },
    { title: 'Task 2', dueDate: '2024-09-12', summary: 'Summary of Task 2' },
    { title: 'Task 3', dueDate: '2024-09-13', summary: 'Summary of Task 3' }
  ];

  newTask = { title: '', dueDate: '', summary: '' };

  addTask() {
    if (this.newTask.title && this.newTask.dueDate && this.newTask.summary) {
      this.tasks.push({ ...this.newTask });
      this.newTask = { title: '', dueDate: '', summary: '' };  // Clear inputs
    }
  }
}