import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output()
    navClicked = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onNavClick(feature: string) {
        this.navClicked.emit(feature);
    }
}
