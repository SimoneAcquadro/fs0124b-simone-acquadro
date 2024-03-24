import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  macchineArr:any[] = []
  macchineRandom:any[] = []

  ngOnInit(){
    fetch("../../../assets/db.json")
    .then(macchine => macchine.json())
    .then(macchine => this.macchineArr = macchine.filter((i:any) => i.available))

    .then(macchine => this.getMacchineRandom(2))
  }

  getMacchineRandom(n:number){

    for (let i = 0; i < n; i++){

      let rand = Math.floor(Math.random() * this.macchineArr.length)

      this.macchineRandom.push( this.macchineArr[rand])

      this.macchineArr.splice(1, rand)

    }

  }
}
