import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ic-relative-table',
  templateUrl: './relative-table.component.html',
  styleUrls: ['./relative-table.component.scss']
})
export class RelativeTableComponent implements OnInit {

  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() title: string;


  constructor() { }

  ngOnInit() {
    console.log("Siemens");
  }

}
