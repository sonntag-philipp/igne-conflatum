import { Character } from './../../shared/models/character';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Effect } from 'src/app/shared/models/effect';

@Component({
  selector: 'ic-char-edit-dialog',
  templateUrl: './char-edit.dialog.html',
  styleUrls: ['./char-edit.dialog.scss']
})
export class CharEditDialog {

  
  private _char : Character;
  public get char() : Character {
    return this._char;
  }
  public set char(v : Character) {
    this._char = v;
  }
  
  constructor(
    public dialogRef: MatDialogRef<CharEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {char: Character}) {
      this._char = data.char;
    }

  public saveChanges(name: any) {
    this.char.name = name.value;
    this.dialogRef.close(this.char);
  }

  public discardChanges() {
    this.dialogRef.close(undefined);
  }

  public removeEntry() {
    this.dialogRef.close(null);
  }

}
