import { Directive, Input, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { JsonplaceholderService } from '../core/jsonplaceholder.service';
import { User } from '../core/user';

@Directive({
  selector: '[appUserId]'
})
export class UserIdDirective implements AfterViewInit {
  @Input() appUserId: number;

  constructor(
    private jphService: JsonplaceholderService,
    private element: ElementRef,
    private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.jphService.getUser$(this.appUserId).subscribe((user: User) => {
      const text = this.renderer.createText(user.name);
      this.renderer.appendChild(this.element.nativeElement, text);
    });
  }
}
