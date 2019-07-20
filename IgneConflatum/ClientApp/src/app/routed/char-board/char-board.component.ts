import { CharacterService } from './../../shared/character.service';
import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: "ic-char-board",
  templateUrl: "./char-board.component.html",
  styleUrls: ["./char-board.component.scss"]
})
export class CharBoardComponent implements OnInit {

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.characterService.characters, event.previousIndex, event.currentIndex);
  }

  constructor(private dialog: MatDialog, public characterService: CharacterService) { }

  ngOnInit() { }
}
