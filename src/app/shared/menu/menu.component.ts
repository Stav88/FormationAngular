import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _title: string;
  private _isCollapse: boolean;
  // @Input('bgColor') bgColor = 'red';
  // @Input('text') text;
  // @Output() outClickEvent: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this._title = 'Formation Angular';
    this._isCollapse = true;
  }

  // onClick(evt) {
  //   console.log(evt);
  //   this.outClickEvent.emit(evt);
  // }

  public get title(): string {
    return this._title;
  }

  public get isCollapse(): boolean {
    return this._isCollapse;
  }

  public set isCollapse(isCollapse: boolean) {
    this._isCollapse = isCollapse;
  }
}
