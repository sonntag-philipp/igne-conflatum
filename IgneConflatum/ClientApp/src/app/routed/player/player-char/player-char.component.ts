import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ic-player-char',
  templateUrl: './player-char.component.html',
  styleUrls: ['./player-char.component.scss']
})
export class PlayerCharComponent implements OnInit {

  chars = [];

  constructor() { }

  ngOnInit() {
  }

}
