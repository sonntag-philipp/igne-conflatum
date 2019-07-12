import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Effect } from 'src/app/shared/models/effect';

@Component({
  selector: 'ic-effect-edit-dialog',
  templateUrl: './effect-edit.dialog.html',
  styleUrls: ['./effect-edit.dialog.scss']
})
export class EffectEditDialog {

  
  private _effect : Effect;
  public get effect() : Effect {
    return this._effect;
  }
  public set effect(v : Effect) {
    this._effect = v;
  }
  
  constructor(
    public dialogRef: MatDialogRef<EffectEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {effect: Effect}) {
      this._effect = data.effect;
    }

  public saveChanges(name: any, rounds: any) {
    this.effect.name = name.value;
    this.effect.rounds = rounds.value;
    this.dialogRef.close(this.effect);
  }

  public discardChanges() {
    this.dialogRef.close(undefined);
  }

  public removeEntry() {
    this.dialogRef.close(null);
  }

}
