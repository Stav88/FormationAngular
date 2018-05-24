import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Post } from './post';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  private _posts$: Observable<Post[]>;
  private _users$: Observable<User[]>;
  constructor(private http: HttpClient) {
  }

  get posts$(): Observable<Post[]> {
    if (!this._posts$) {
      this._posts$ = this.http.get<Post[]>(environment.jsonPlaceholderUrl + '/posts');
    }
    return this._posts$;
  }

  get users$(): Observable<User[]> {
    if (!this._users$) {
      this._users$ = this.http.get<User[]>(environment.jsonPlaceholderUrl + '/users');
    }
    return this._users$;
  }
}
