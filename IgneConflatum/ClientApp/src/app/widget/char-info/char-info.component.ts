import { CharacterService } from './../../shared/character.service';
import { BarEditDialog } from './../bar-edit-dialog/bar-edit.dialog';
import { MatDialog } from '@angular/material';
import { Bar } from './../../shared/models/bar';
import { Character } from './../../shared/models/character';
import { Component, OnInit, Input } from '@angular/core';
import { Effect } from 'src/app/shared/models/effect';
import { EffectEditDialog } from '../effect-edit-dialog/effect-edit.dialog';

@Component({
  selector: 'ic-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.scss']
})
export class CharInfoComponent {

  @Input() character: Character;

  public onBarClicked(bar: Bar) {
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

  public onEffectClicked(effect: Effect) {
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

  constructor(private dialog: MatDialog, private characterService: CharacterService) {
  }
}
