import { ConnectionService } from './../../../service/connection/connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ic-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.scss']
})
export class PlayerSelectionComponent implements OnInit {

  public chars = [
    {
      name: "Lennhardt Bartholomäus",
      id: "dawimnawd"
    },
    {
      name: "Peter Siemens",
      id: "h5ehe5ftn"
    },
    {
      name: "Bertolt Brecht",
      id: "rn5e4v4"
    }
  ];

  constructor(private connection: ConnectionService) { 
    connection.connect();
  }

  ngOnInit() {
  }

}
