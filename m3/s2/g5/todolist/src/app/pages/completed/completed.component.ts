import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  result:any

  constructor(public allTodo:TodoService, public allUsers:UserService){
    this.result = allTodo.todo

  }
  ngOnInit(){
    this.result = this.result.filter((res:any) => res.completed == true)
  }
}
