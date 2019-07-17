import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ic-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  public navBarOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
