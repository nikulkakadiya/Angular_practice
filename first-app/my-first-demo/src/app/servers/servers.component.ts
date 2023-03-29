import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = "No server creation";
    setServerName = '';
    serverCreat=false;
    servers = ['Testserver','Testserver 2'];
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    onCreationServer() {
        this.serverCreat=true;
        this.servers.push(this.setServerName);
        return this.serverCreationStatus = "Server was created! "+this.setServerName;
    }

    onUpdateServerName(event: Event) {
        this.setServerName = (<HTMLInputElement>event.target).value;
    }
}
