import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Online Assessment Application';
  navigationMenu = [
    {'name': 'Home', 'route': ''},
    {'name': 'Settings', 'route': 'settings'},
    {'name': 'Result', 'route': 'result'},
    {'name': 'Links', 'route': 'links'}
  ];
}
