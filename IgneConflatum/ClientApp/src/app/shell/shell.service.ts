import { Injectable } from '@angular/core';

@Injectable()
export class ShellService {

    public open: boolean;

    constructor() { }

    toggleSidenav(): void {
        this.open = !this.open;
    }
}
