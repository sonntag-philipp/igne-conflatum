import { ShellService } from './shell.service';
import { Component, OnInit } from '@angular/core';

import { routes } from '../app-routing.module';

@Component({
  selector: 'ic-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  public routeList = routes;

  constructor(public shellService: ShellService) { }

  ngOnInit() {
  }

}
