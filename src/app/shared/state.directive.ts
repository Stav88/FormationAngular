import { Directive, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') className: string;
  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    this.className = this.formatCssClass(this.appState);
  }

  private removeSpecialChars(str: string): string {
    // normalize() s'assure que la string est en unicode accent + char
    // replace [\u0300-\u036f] correspond au accents seuls
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private formatCssClass(state: string): string {
    state = this.removeSpecialChars(state);
    return `state-${state}`
      .toLowerCase()
      .replace(/\s+/g, '');
  }
}
