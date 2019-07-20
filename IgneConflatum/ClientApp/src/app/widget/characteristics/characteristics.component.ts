import { Character } from './../../shared/models/character';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ic-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit() { }

}
