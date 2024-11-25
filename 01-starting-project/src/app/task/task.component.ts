import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() task!: any;
  @Output() taskComplete= new EventEmitter<string>();

  onComplete() {
    this.taskComplete.emit(this.task.id);
  }
}
