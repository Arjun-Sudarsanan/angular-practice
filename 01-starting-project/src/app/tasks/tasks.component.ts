import { Component, Input, OnChanges } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks, Task, User } from '../user.data';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CreateTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true }) user!: User;

  tasks = dummyTasks;
  showNewTaskPrompt = false;

  get userTaskDetails() {
    return this.tasks.filter((item) => item.userId === this.user.id);
  }

  onTaskComplete(id: string){
    this.tasks = this.tasks.filter(task => task.id != id);
  }

  addNewTask() {
    this.showNewTaskPrompt = true;
  }

  closeNewTaskModal() {
    this.showNewTaskPrompt = false;
  }
  onAddNewTask(task: Task) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.user.id,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    })
  }
}
