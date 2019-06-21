import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private hubConnection: signalR.HubConnection;

  constructor() { }

  connect(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(environment.connection.address)
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
}
