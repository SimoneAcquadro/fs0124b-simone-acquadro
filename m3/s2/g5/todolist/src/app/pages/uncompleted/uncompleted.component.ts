import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-uncompleted',
  templateUrl: './uncompleted.component.html',
  styleUrl: './uncompleted.component.scss'
})
export class UncompletedComponent {
  result:any

  constructor(public allTodo:TodoService, public allUsers:UserService){
    this.result = allTodo.todo

  }
  ngOnInit(){
    this.result = this.result.filter((res:any) => res.completed == false)
  }
}
