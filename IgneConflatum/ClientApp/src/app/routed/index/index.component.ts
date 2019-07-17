import { ShellService } from './../../shared/shell.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ic-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private shellService: ShellService) { 
    shellService.visible = false;
  }

  ngOnInit() {
  }

}
