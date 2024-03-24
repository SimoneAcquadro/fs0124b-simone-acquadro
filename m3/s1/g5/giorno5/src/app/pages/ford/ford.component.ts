import { Component } from '@angular/core';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  fordArr:any[] = []

  ngOnInit(){
    fetch("../../../assets/db.json")
    .then(macchine => macchine.json())
    .then(macchine => this.fordArr = macchine.filter((i:any) => i.brand == "Ford"))
  }
}
