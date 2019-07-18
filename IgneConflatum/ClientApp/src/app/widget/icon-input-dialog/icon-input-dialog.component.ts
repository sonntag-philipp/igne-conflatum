import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ic-icon-input-dialog',
  templateUrl: './icon-input-dialog.component.html',
  styleUrls: ['./icon-input-dialog.component.scss']
})
export class IconInputDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<IconInputDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  saveChanges(value: any): void {
    this.dialogRef.close(value.value);
  }

  discardChanges(): void {
    this.dialogRef.close();
  }

}
