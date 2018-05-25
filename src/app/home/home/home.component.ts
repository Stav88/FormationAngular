import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { JsonplaceholderService } from '../../core/jsonplaceholder.service';
import { Observable, of } from 'rxjs';
import { Post } from '../../core/post';
import { skip, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _observer: any;
  public page = 1;
  public nbByPage = 10;
  public posts$: Observable<Post[]>;
  private _fullPostsList: Post[];

  constructor(public jphService: JsonplaceholderService,
    private element: ElementRef,
    private renderer: Renderer2) {
    this.posts$ = Observable.create((observer) => this._observer = observer);
  }

  ngOnInit() {
    this.jphService.posts$.subscribe((postsList) => {
      this._fullPostsList = postsList;
      this.setPage(1);
    });
  }

  public setPage(page) {
    this.page = page;
    this._observer.next(this._fullPostsList.slice(
      this.nbByPage * (this.page - 1),
      this.nbByPage * this.page
    ));
    setTimeout(() => {
      const element: HTMLElement = this.element.nativeElement;
      const liList = element.querySelectorAll('.paginator > .pagination > li');
      for (let i = 0 ; i < liList.length ; i++) {
        this.renderer.addClass(liList[i], 'page-item');
        this.renderer.addClass(liList[i].querySelector('a'), 'page-link');
      }
    }, 100);
  }
}
