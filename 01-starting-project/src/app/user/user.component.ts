import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.data';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) activeUser!: boolean;
  @Output() selectedUser: EventEmitter<string> = new EventEmitter<string>();


  // modern angular approach ---- import input and output
  // use calculate() to detect change
  // id = input.required<string>();
  // outputVal = output<string>();  ---- Doesnot create any signal

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id)
  }
}
