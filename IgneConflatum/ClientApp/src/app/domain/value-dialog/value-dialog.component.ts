import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ic-value-dialog',
  templateUrl: './value-dialog.component.html',
  styleUrls: ['./value-dialog.component.scss']
})
export class ValueDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ValueDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  submit(value: any): void {
    this.dialogRef.close(value);
  }

}
