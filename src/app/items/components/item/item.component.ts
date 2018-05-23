import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../core/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  private _item: Item;

  constructor() { }

  ngOnInit() {
  }

  public get item(): Item {
    return this._item;
  }

  @Input('item') public set item(item: Item) {
    this._item = item;
  }
}
