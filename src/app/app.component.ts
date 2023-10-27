import { Component } from '@angular/core';

// root component
// this can load any other component
// add on app component html
@Component({
  // prefix to prevent conflicts with other html elements
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelinventoryapp';
  role = 'Admin'
}
