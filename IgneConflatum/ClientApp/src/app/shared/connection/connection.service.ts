import { Character } from './../models/character';
import * as signalR from "@aspnet/signalr";
import { environment } from 'src/environments/environment';

export class ConnectionService {

  
  private _hubConnection : signalR.HubConnection;
  public get hubConnection() : signalR.HubConnection {
    return this._hubConnection;
  }
  

  private updateFunctions: any[] = [];

  public set characterUpdated(v: any) {
    this.updateFunctions.push(v);
  }


  constructor() {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(environment.hubAddress)
      .build();
  }

  public connect(): Promise<void> {
    return this.hubConnection.start();
  }

  public updateCharacter(char: Character) {
    console.log(this.hubConnection);
    if(this.hubConnection.state === 1) {
      console.log("Siemens");
      this.hubConnection.invoke("UpdateCharacter", char);
    }
  }

  public getCharacter(name: string) {
    if(this.hubConnection.state === 1) {
      this.hubConnection.invoke("GetCharacter", name);
    }
  }
}