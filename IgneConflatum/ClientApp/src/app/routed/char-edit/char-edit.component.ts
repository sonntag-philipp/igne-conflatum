import { CharacterService } from './../../shared/character.service';
import { BarEditDialog } from './../../widget/bar-edit-dialog/bar-edit.dialog';
import { EffectEditDialog } from './../../widget/effect-edit-dialog/effect-edit.dialog';
import { MatDialog } from '@angular/material';
import { Effect } from './../../shared/models/effect';
import { Bar } from './../../shared/models/bar';
import { Character } from './../../shared/models/character';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ic-char-edit',
  templateUrl: './char-edit.component.html',
  styleUrls: ['./char-edit.component.scss']
})
export class CharEditComponent implements OnInit {

  public charName: string;

  public get char() : Character {
    const c = this.characterService.characters.find(x => x.name === this.charName);
    if(c === undefined) {
      var chara = {
        name: this.charName,
        bars: [],
        effects: []
      };
      this.characterService.characters.push(chara);
      this.characterService.updateCharacter(chara);
    }
    return this.characterService.characters.find(x => x.name === this.charName);
  }

  public addEffect(): void {
    let effect: Effect = {
      name: "",
      color: "120, 120, 120",
      rounds: 1
    };
    this.dialog.open(EffectEditDialog, {
      data: {
        effect: effect
      }
    }).afterClosed().subscribe(
      result => {
        if(result === null && this.char.effects.indexOf(effect) > -1) {
          this.char.effects.splice(this.char.effects.indexOf(effect), 1);
        }

        if(result !== undefined && result !== null) {
          effect = result;
          this.char.effects.push(effect);
        }

        if(result !== undefined) {
          this.characterService.updateCharacter(this.char);
        }
      }
    );
  }

  public addBar(): void {
    let bar: Bar = {
      name: "",
      value: 0
    };
    this.dialog.open(BarEditDialog, {
      data: {
        bar: bar
      }
    }).afterClosed().subscribe(
      result => {
        console.log(result);
        if(result === null && this.char.bars.indexOf(bar) > -1) {
          this.char.bars.splice(this.char.bars.indexOf(bar), 1);
        }

        if(result !== undefined && result !== null) {
          bar = result;
          this.char.bars.push(bar);
        }

        if(result !== undefined) {
          this.characterService.updateCharacter(this.char);
        }
      }
    );
  }

  constructor(private dialog: MatDialog, private characterService: CharacterService, route: ActivatedRoute) { 
    route.params.subscribe(params => {
      route.params.subscribe(params => {
        this.charName = params.name;
      });
    });

  }

  ngOnInit() {
  }

}
