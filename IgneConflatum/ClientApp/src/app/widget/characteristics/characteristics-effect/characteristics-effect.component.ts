import { Component, OnInit, Input } from '@angular/core';
import { Effect } from 'src/app/shared/models/effect';

@Component({
  selector: 'ic-characteristics-effect',
  templateUrl: './characteristics-effect.component.html',
  styleUrls: ['./characteristics-effect.component.scss']
})
export class CharacteristicsEffectComponent implements OnInit {

  @Input() effect: Effect;

  constructor() { }

  ngOnInit() {
  }

}
