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

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.characterService.characters, event.previousIndex, event.currentIndex);
  }


  constructor(private dialog: MatDialog, public characterService: CharacterService) { }

  ngOnInit() { }
}
