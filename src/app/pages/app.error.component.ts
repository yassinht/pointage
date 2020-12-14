import { Component } from '@angular/core';
import {AppMainComponent} from '../app.main.component';

@Component({
  selector: 'app-error',
  templateUrl: './app.error.component.html',
})
export class AppErrorComponent {
    constructor(public app: AppMainComponent) {}
}
