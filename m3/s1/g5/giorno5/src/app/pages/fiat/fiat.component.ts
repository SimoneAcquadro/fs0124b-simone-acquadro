import { Component } from '@angular/core';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  fiatArr:any[] = []

  ngOnInit(){
    fetch("../../../assets/db.json")
    .then(macchine => macchine.json())
    .then(macchine => this.fiatArr = macchine.filter((i:any) => i.brand == "Fiat"))
  }
}
