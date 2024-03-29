import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(public serviceUsers: UsersService) { }

  ngOnInit(): void { }
}
