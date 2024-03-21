import { Component } from '@angular/core';
import { iPost } from './Models/ipost';
import { JsonContent } from './Models/json-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  postArr:iPost[] = [];

  ngOnInit(){
    fetch('../assets/db.json')
    .then(res => res.json())
    .then((contenutoJson:JsonContent) => {

      this.postArr = contenutoJson.posts

    })

  }

}
