import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ValueDialogComponent } from '../value-dialog/value-dialog.component';

@Component({
  selector: 'ic-relative-table',
  templateUrl: './relative-table.component.html',
  styleUrls: ['./relative-table.component.scss']
})
export class RelativeTableComponent implements OnInit {

  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() title: string;


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    console.log("Siemens");
  }

  manipulate(element: any, item: string): void {
    // Passing the value this way to get a pass by reference, not value

    const dialogRef = this.dialog.open(ValueDialogComponent, {
      data: {
        key: item,
        value: element[item]
      }
    }).afterClosed().subscribe(
      next => {
        if (next !== undefined && next.trim() !== "") {
          element[item] = next;
          dialogRef.unsubscribe();
        }
      }
    );
  }

}
