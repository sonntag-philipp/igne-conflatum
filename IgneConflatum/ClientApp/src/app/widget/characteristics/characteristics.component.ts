import { CharEditDialog } from './../char-edit-dialog/char-edit.dialog';
import { BarEditDialog } from './../bar-edit-dialog/bar-edit.dialog';
import { Bar } from './../../shared/models/bar';
import { CharacterService } from './../../shared/character.service';
import { EffectEditDialog } from './../effect-edit-dialog/effect-edit.dialog';
import { MatDialog } from '@angular/material';
import { Character } from './../../shared/models/character';
import { Component, OnInit, Input } from '@angular/core';
import { Effect } from 'src/app/shared/models/effect';

@Component({
  selector: 'ic-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  @Input() character: Character;

  constructor(private dialog: MatDialog, public characterService: CharacterService) { }

  ngOnInit() { /*
    this.character.effects.push({
      name: "Verbrennungen",
      rounds: 5,
      color: "255, 255, 100"
    });
    this.character.bars.push({
      name: "Leben",
      value: 50,
      max: 150
    });*/
  }

  public selectEffect(effect: Effect): void {
    this.dialog.open(EffectEditDialog, {
      data: {
        effect: effect
      }
    }).afterClosed().subscribe(
      result => {
        if(result === null) {
          this.character.effects.splice(this.character.effects.indexOf(effect), 1);
        }

        if(result !== undefined && result !== null) {
          effect = result;
        }

        if(result !== undefined) {
          console.log("UpdateChar");
          this.characterService.updateCharacter(this.character);
        }
      }
    );
  }

  public selectChar(): void {
    this.dialog.open(CharEditDialog, {
      data: {
        char: this.character
      }
    }).afterClosed().subscribe(
      result => {
        if(result === null) {
          this.character = null;
        }

        if(result !== undefined && result !== null) {
          this.character = result;
        }

        if(result !== undefined) {
          console.log("UpdateChar");
          this.characterService.updateCharacter(this.character);
        }
      }
    );
  }

  public selectBar(bar: Bar): void {
    this.dialog.open(BarEditDialog, {
      data: {
        bar: bar
      }
    }).afterClosed().subscribe(
      result => {
        if(result === null) {
          this.character.bars.splice(this.character.bars.indexOf(bar), 1);
        }

        if(result !== undefined && result !== null) {
          bar = result;
        }

        if(result !== undefined) {
          console.log("UpdateChar");
          this.characterService.updateCharacter(this.character);
        }
      }
    );
  }

}
