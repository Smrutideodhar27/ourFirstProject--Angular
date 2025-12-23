import { Component } from '@angular/core';
import { postData } from './shared/consts/posts';
import { Ipost } from './shared/models/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'ourFirstProject';
  postsArr : Array<Ipost>= postData;




}

