import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'servers-component',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    serverName: string = '';
    serverCreated: boolean = false;
    servers: any = ['000', '001', '002'];


    showDetails: boolean = false;
    clicks: any = [];

    constructor() { }

    ngOnInit() {
    }

    isServerNameEmpty() {
        return this.serverName === '';
    }

    onButtonClick(event: any) {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverName = '';
    }

    onShowDetails(event: any) {
        this.showDetails = !this.showDetails ;
        this.clicks.push(new Date());
    }

    getClickCountStyle() {
        return this.clicks.length >= 5 ? 'blue' : 'yellow';
    }


}
