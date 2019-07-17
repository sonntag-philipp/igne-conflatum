import { Bar } from './../../shared/models/bar';
import { Character } from '../../shared/models/character';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'bar-edit-dialog',
  templateUrl: './bar-edit.dialog.html',
  styleUrls: ['./bar-edit.dialog.scss']
})
export class BarEditDialog {

  
  private _bar : Bar;
  public get bar() : Bar {
    return this._bar;
  }
  public set bar(v : Bar) {
    this._bar = v;
  }
  

  constructor(
    public dialogRef: MatDialogRef<BarEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {bar: Bar}) {
      this._bar = data.bar;
    }

  public saveChanges(name: any, value: any, max: any) {
    if(isNaN(value.value) || isNaN(max.value)) {
      this.discardChanges();
    }
    else {
      this.bar.name = name.value;
      this.bar.value = value.value;
      this.bar.max = max.value;
      this.dialogRef.close(this.bar);
    }

  }

  public discardChanges() {
    this.dialogRef.close(undefined);
  }

  public removeEntry() {
    this.dialogRef.close(null);
  }
  

}
