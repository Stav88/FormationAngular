import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../core/item';
import { State } from '../../state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  private _item: Item;
  State = State;
  @Output('onchange') onchange: EventEmitter<Item> = new EventEmitter();
  @Output('ondelete') ondelete: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public get item(): Item {
    return this._item;
  }

  @Input('item') public set item(item: Item) {
    this._item = item;
  }

  public changeState(state: State): void {
    this._item.state = state;
    this.onchange.emit(this._item);
  }

  public delete(): void {
    this.ondelete.emit(this._item);
  }
}
