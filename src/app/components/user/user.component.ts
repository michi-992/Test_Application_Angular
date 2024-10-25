import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service'
import { User } from '../../models/user/user.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user$: Observable<User>;
  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser();
  }
}
