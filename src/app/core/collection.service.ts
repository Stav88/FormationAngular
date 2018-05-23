import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private _collection: Item[];

  constructor() {
    this.collection = [
      {
        id: 1,
        name: 'titre',
        reference: 123456,
        state: ''
      },
      {
        id: 2,
        name: 'titre 2',
        reference: 456,
        state: ''
      }
    ];
  }

  get collection(): Item[] {
    return this._collection;
  }

  set collection(collection: Item[]) {
    this._collection = collection;
  }

  get length(): number {
    return this._collection.length;
  }
}
