import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'servers-component',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    serverName = '';
    serverCreated = false;
    servers = ['000', '001', '002'];

    constructor() { }

    ngOnInit() {
    }

    isServerNameEmpty() {
        return this.serverName === '';
    }

    onButtonClick(event: any) {
        this.serverCreated = true;
        this.serverName = event.target.value;
        this.servers.push(this.serverName);
    }
}
