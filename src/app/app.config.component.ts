import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <div id="layout-config" class="layout-config" [ngClass]="{'layout-config-active': appMain.configActive}"
             (click)="appMain.onConfigClick($event)">
            <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                <i class="pi pi-cog"></i>
            </a>

            <div class="layout-config-content">
                <div class="layout-config-header">
                    <h3>Theme Customization</h3>
                    <span>Freya offers different themes for layout, topbar, menu etc.</span>
                </div>

                <div class="layout-config-section options">
                    <h6>Color Mode </h6>
                    <div class="p-grid p-nogutter layout-config-options">
                        <div class="p-col-6">
                            <p-radioButton name="darkMode" value="light" [(ngModel)]="app.darkMode" inputId="darkMode1"
                                           (onClick)="changeColorScheme('light')"></p-radioButton>
                            <label for="darkMode1">Light</label>
                        </div>
                        <div class="p-col-6">
                            <p-radioButton name="darkMode" value="dark" [(ngModel)]="app.darkMode" inputId="darkMode2"
                                           (onClick)="changeColorScheme('dark')"></p-radioButton>
                            <label for="darkMode2">Dark</label>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section options">
                    <h6>Menu Mode </h6>
                    <div class="p-grid p-nogutter layout-config-options p-mb-3">
                        <div class="p-col-6">
                            <p-radioButton name="menuMode" value="horizontal" [(ngModel)]="app.menuMode" inputId="mode1" (onClick)="app.menuTheme = app.topbarTheme;"></p-radioButton>
                            <label for="mode1">Horizontal</label>
                        </div>
                        <div class="p-col-6">
                            <p-radioButton name="menuMode" value="sidebar" [(ngModel)]="app.menuMode" inputId="mode2"></p-radioButton>
                            <label for="mode2">Sidebar</label>
                        </div>
                    </div>
                    <div class="p-grid p-nogutter layout-config-options">
                        <div class="p-col-6">
                            <p-radioButton name="menuMode" value="slim" [(ngModel)]="app.menuMode" inputId="mode3"></p-radioButton>
                            <label for="mode3">Slim</label>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section options" *ngIf="app.menuMode === 'horizontal'">
                    <h6>Topbar and Menu Mode </h6>
                    <div class="p-grid p-nogutter layout-config-options">
                        <div class="p-col-6">
                            <p-radioButton name="topbarTheme" value="light" [disabled]="app.darkMode ==='dark'" [(ngModel)]="app.topbarTheme" inputId="topbarTheme1" (onClick)="onChangeTopbar($event,'light')"></p-radioButton>
                            <label for="topbarTheme1">Light</label>
                        </div>
                        <div class="p-col-6">
                            <p-radioButton name="topbarTheme" value="dark" [disabled]="app.darkMode ==='dark'" [(ngModel)]="app.topbarTheme" inputId="topbarTheme2" (onClick)="onChangeTopbar($event,'dark')"></p-radioButton>
                            <label for="topbarTheme2">Dark</label>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section options" *ngIf="app.menuMode !== 'horizontal'">
                    <h6>Topbar Mode </h6>
                    <div class="p-grid p-nogutter layout-config-options">
                        <div class="p-col-6">
                            <p-radioButton name="topbarTheme" value="light" [disabled]="app.darkMode ==='dark'" [(ngModel)]="app.topbarTheme" inputId="topbarTheme1"></p-radioButton>
                            <label for="topbarTheme1">Light</label>
                        </div>
                        <div class="p-col-6">
                            <p-radioButton name="topbarTheme" value="dark" [disabled]="app.darkMode ==='dark'" [(ngModel)]="app.topbarTheme" inputId="topbarTheme2"></p-radioButton>
                            <label for="topbarTheme2">Dark</label>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section options" *ngIf="app.menuMode !== 'horizontal'">
                    <h6>Menu Mode </h6>
                    <div class="p-grid p-nogutter layout-config-options">
                        <div class="p-col-6">
                            <p-radioButton name="menuTheme" value="light" [disabled]="app.darkMode ==='dark'" [(ngModel)]="app.menuTheme" inputId="menuTheme1"></p-radioButton>
                            <label for="menuTheme1">Light</label>
                        </div>
                        <div class="p-col-6">
                            <p-radioButton name="menuTheme" value="dark" [disabled]="app.darkMode ==='dark'" [(ngModel)]="app.menuTheme" inputId="menuTheme2"></p-radioButton>
                            <label for="menuTheme1">Dark</label>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section options">
                    <h6>Input Background</h6>
                    <div class="p-grid p-nogutter layout-config-options">
                        <div class="p-col-6">
                            <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                            <label for="inputStyle1">Outlined</label>
                        </div>
                        <div class="p-col-6">
                            <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                            <label for="inputStyle2">Filled</label>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section options">
                    <h6>Ripple Effect</h6>
                    <div class="p-d-flex p-jc-between layout-config-options">
                        <div class="p-d-flex p-ai-center">
                            <p-inputSwitch [ngModel]="app.ripple" (onChange)="appMain.onRippleChange($event)"></p-inputSwitch>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section colors">
                    <h6>Theme Colors</h6>
                    <div class="p-grid layout-config-colors">
                        <div *ngFor="let t of themes" class="p-col p-col-fixed">
                            <a style="cursor: pointer" (click)="changeTheme(t.name)" class="layout-config-option">
                                <span class="layout-config-option-color" [ngStyle]="{'background-color': t.color}"></span>
                                <span class="layout-config-option-check-mask" *ngIf="theme === t.name">
                                    <i class="pi pi-check"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    theme = 'purple';

    constructor(public app: AppComponent, public appMain: AppMainComponent) {
    }

    ngOnInit() {
        this.themes = [
            {name: 'blue', color: '#2c84d8'},
            {name: 'green', color: '#34B56F'},
            {name: 'orange', color: '#FF810E'},
            {name: 'turquoise', color: '#58AED3'},
            {name: 'avocado', color: '#AEC523'},
            {name: 'purple', color: '#464DF2'},
            {name: 'red', color: '#FF9B7B'},
            {name: 'yellow', color: '#FFB340'},
        ];
    }

    onChangeTopbar(event, mode) {
        this.app.menuTheme = mode;
    }

    changeColorScheme(scheme) {
        this.changeStyleSheetsColor('layout-css', 'layout-' + scheme + '.css', 1);
        this.changeStyleSheetsColor('theme-css', 'theme-' + scheme + '.css', 1);

        this.app.darkMode = scheme;
        this.app.topbarTheme = scheme;
        this.app.menuTheme = scheme;
    }

    changeTheme(theme) {
        this.theme = theme;
        this.changeStyleSheetsColor('theme-css', theme, 2);
    }

    changeStyleSheetsColor(id, value, from) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');

        if (from === 1) {           // which function invoked this function - change scheme
            urlTokens[urlTokens.length - 1] = value;
        } else if (from === 2) {       // which function invoked this function - change color
            urlTokens[urlTokens.length - 2] = value;
        }

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    onConfigButtonClick(event) {
        this.appMain.configActive = !this.appMain.configActive;
        this.appMain.configClick = true;
        event.preventDefault();
    }
}
