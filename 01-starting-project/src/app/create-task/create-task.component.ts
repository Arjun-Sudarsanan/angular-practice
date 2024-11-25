import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../user.data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Output() closeNewTaskPrompt = new EventEmitter<void>();
  @Output() newTaskDetails = new EventEmitter<Task>();
  
  title!: string;
  summary!: string;
  dueDate!: string;

  closeModal() {
    this.closeNewTaskPrompt.emit();
  }
  addNewTask() {
    this.newTaskDetails.emit(
      {
        title: this.title,
        summary: this.summary,
        dueDate: this.dueDate
      });
    this.closeModal();
  }
}
