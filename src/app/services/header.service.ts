import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  visible: boolean;

  constructor() { this.visible = true; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  doSomethingElseUseful() { }
}
