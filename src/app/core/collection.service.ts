import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { State } from '../items/state.enum';

@Injectable({
  providedIn: 'root' // défini le singleton
})
export class CollectionService {
  private _collection$: Observable<Item[]>;

  constructor() {
    const collection: Item[] = [
      {
        id: 1,
        name: 'titre',
        reference: 123456,
        state: State.ALIVRER
      },
      {
        id: 2,
        name: 'titre 2',
        reference: 456,
        state: State.ENCOURS
      }
    ];
    this._collection$ = of(collection);
  }

  get collection$(): Observable<Item[]> {
    return this._collection$;
  }

  // get length$(): Observable<number> {
  //   return this._collection$.pipe(map((collection: Item[]) => collection.length));
  // }
}
