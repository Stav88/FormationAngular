import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../core/jsonplaceholder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public jphService: JsonplaceholderService) { }

  ngOnInit() {
  }
}
