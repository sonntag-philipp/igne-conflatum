import { Character } from './../../shared/models/character';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ic-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.scss']
})
export class CharInfoComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

}
