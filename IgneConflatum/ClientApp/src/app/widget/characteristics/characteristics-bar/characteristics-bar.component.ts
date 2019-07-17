import { Bar } from './../../../shared/models/bar';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ic-characteristics-bar',
  templateUrl: './characteristics-bar.component.html',
  styleUrls: ['./characteristics-bar.component.scss']
})
export class CharacteristicsBarComponent implements OnInit {

  @Input() bar: Bar;

  constructor() { }

  ngOnInit() {
  }

}
