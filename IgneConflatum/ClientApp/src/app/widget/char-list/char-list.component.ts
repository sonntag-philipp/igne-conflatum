import { Character } from './../../shared/models/character';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ic-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss']
})
export class CharListComponent implements OnInit {

  @Input() characters: Character[] = [];

  constructor() { }

  ngOnInit() {
  }

}
