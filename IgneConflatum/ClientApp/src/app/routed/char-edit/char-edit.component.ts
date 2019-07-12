import { BarEditDialog } from './../../widget/bar-edit-dialog/bar-edit.dialog';
import { EffectEditDialog } from './../../widget/effect-edit-dialog/effect-edit.dialog';
import { MatDialog } from '@angular/material';
import { Effect } from './../../shared/models/effect';
import { Bar } from './../../shared/models/bar';
import { Character } from './../../shared/models/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ic-char-edit',
  templateUrl: './char-edit.component.html',
  styleUrls: ['./char-edit.component.scss']
})
export class CharEditComponent implements OnInit {

  
  private _char : Character;
  public get char() : Character {
    return this._char;
  }
  public set char(v : Character) {
    this._char = v;
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
        if(result === null && this.char.bars.indexOf(bar) > -1) {
          this.char.bars.splice(this.char.bars.indexOf(bar), 1);
        }

        if(result !== undefined && result !== null) {
          bar = result;
          this.char.bars.push(bar);
        }
      }
    );
  }

  

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.char = 
    {
      name: "Pietro Lamborghini",
      effects: [
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        },
        {
          name: "Mit kacke verschmiert",
          color: "133, 62, 21",
          rounds: 3
        }
      ],
      bars: [
        {
          name: "Leben",
          value: 50,
          max: 200
        },
        {
          name: "Mana",
          value: 42
        }
      ]
    };
  }

}
