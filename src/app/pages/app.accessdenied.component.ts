import { Component } from '@angular/core';
import {AppMainComponent} from '../app.main.component';

@Component({
  selector: 'app-accessdenied',
  templateUrl: './app.accessdenied.component.html',
})
export class AppAccessdeniedComponent {
    constructor(public app: AppMainComponent) {}
}
