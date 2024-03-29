import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.scss'
})
export class ProvaComponent {

  constructor(public serviceProva:TodosService) {}

  ngOnInit(): void {}

}
