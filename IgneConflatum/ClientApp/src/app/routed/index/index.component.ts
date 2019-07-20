import { IconInputDialog } from './../../widget/icon-input-dialog/icon-input-dialog.component';
import { MatDialog } from '@angular/material';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ic-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(private dialog: MatDialog, private router: Router) { }

  loadCharacter(): void {
    this.dialog.open(IconInputDialog, {
      data: {
        prompt: "Character name",
        icon: "account_circle",
        placeholder: "Name"
      }
    }).afterClosed().subscribe(
      result => {
        if(result !== undefined) {
          this.router.navigate(["/edit", result]);
        }
      }
    );
  }

  loadBoard(): void {
    this.router.navigate(["/board"]);
  }

}
