import { Component } from '@angular/core';
import {AppMainComponent} from '../app.main.component';

@Component({
  selector: 'app-notfound',
  templateUrl: './app.notfound.component.html',
})
export class AppNotfoundComponent {
    constructor(public app: AppMainComponent) {}
}
