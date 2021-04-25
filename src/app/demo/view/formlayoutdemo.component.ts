import {Component} from '@angular/core';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    selectedState: any = null;

    states: any[] = [
        {name: 'Tunis', code: 'Tunis'},
        {name: 'Sfax', value: 'Sfax'},
        {name: 'Sousse', code: 'Sousse'},
        {name: 'Gabes', code: 'Gabes'},
        {name: 'Medanine', code: 'Medanine'}
    ];
}
