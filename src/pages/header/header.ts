import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'header',
  templateUrl: 'header.html',
})
export class HeaderPage {
  @Input() title: string;

  constructor(public events: Events) {
  }

  exit() {
    this.events.publish('exit');
  }

}
