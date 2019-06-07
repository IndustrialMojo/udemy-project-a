import { Component } from '@angular/core';

@Component({
    selector: 'server-component',
    templateUrl: './server.component.html',
    styles: [`

	div.online {
    	background-color: green;
    	color: white;
	}

	div.offline {
    	background-color: red;
    	color: white;
	}

  `]
})

export class ServerComponent {

    serverName = '099';
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }


}
