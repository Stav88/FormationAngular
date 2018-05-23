import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input('bgColor') bgColor = 'lime';
  title = 'app';
  constructor() {
  }
  onClick(evt) {
    alert('Click: \nx = ' + evt.offsetX + '\ny = ' + evt.offsetY);
  }
}
