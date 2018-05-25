import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { State } from '../items/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root' // défini le singleton
})
export class CollectionService {
  private _table: AngularFirestoreCollection<Item>;
  private _collection$: Observable<Item[]>;

  constructor(private db: AngularFirestore) {
    this._table = db.collection<Item>('collection');
    this._collection$ = this._table.valueChanges();
  }

  get collection$(): Observable<Item[]> {
    return this._collection$;
  }

  public insert(item: Item): void {
    item.id = this.db.createId();
    this._table.doc(item.id).set(item)
      .catch(error => console.error(error));
  }

  public update(item: Item): void {
    this._table.doc(item.id).update(item)
      .catch(error => console.error(error));
  }

  public delete(item: Item): void {
    this._table.doc(item.id).delete()
      .catch(error => console.error(error));
  }

  public getItemFromId(id: string)/*: Observable<Item>*/ {
    return this.db.collection('collection/' + id).valueChanges().pipe(first());
  }

  get length$(): Observable<number> {
    return this._collection$.pipe(map((collection: Item[]) => collection.length));
  }
}
