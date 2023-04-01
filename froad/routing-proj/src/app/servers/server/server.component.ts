import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    server: { id: number | undefined, name: string | undefined, status: string | undefined } | undefined;

    constructor(private serversService: ServersService) { }

    ngOnInit() {
        this.server = this.serversService.getServer(1);
    }

}
