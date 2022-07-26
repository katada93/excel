import { DomListener } from './DomListener';

export class Excel extends DomListener {
  private el: Element | null = null;

  constructor(el: string) {
    super();
    this.el = document.querySelector(el);
  }

  toHTML() {
    return '';
  }
}
