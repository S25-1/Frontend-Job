import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title: String;

  constructor() {
    this.title = 'Job\'s Test Environment :)';
  }
}
