import { Component } from '@angular/core';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  audiArr:any[] = []

  ngOnInit(){
    fetch("../../../assets/db.json")
    .then(macchine => macchine.json())
    .then(macchine => this.audiArr = macchine.filter((i:any) => i.brand == "Audi"))
  }
}
