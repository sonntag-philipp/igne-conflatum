import { CharacterService } from './../../shared/character.service';
import { ConnectionService } from './../../shared/connection/connection.service';
import { BarEditDialog } from './../../widget/bar-edit-dialog/bar-edit.dialog';
import { Character } from './../../shared/models/character';
import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';

@Component({
  selector: "ic-char-board",
  templateUrl: "./char-board.component.html",
  styleUrls: ["./char-board.component.scss"]
})
export class CharBoardComponent implements OnInit {


  public stepForward(): void {
    console.log("Step forward");
    if(this.characterService.characters[0].effects !== undefined) {
      for (const item of this.characterService.characters[0].effects) {
        item.rounds--;
      }
      this.characterService.updateCharacter(this.characterService.characters[0]);
    }
    this.characterService.shiftSequence(1);
  }

  public stepBack(): void {
    console.log("Step back");
    if(this.characterService.characters[this.characterService.characters.length - 1].effects !== undefined) {
      for (const item of this.characterService.characters[this.characterService.characters.length - 1].effects) {
        item.rounds++;
      }
      this.characterService.updateCharacter(this.characterService.characters[this.characterService.characters.length - 1]);
    }
    this.characterService.shiftSequence(-1);
  }


  constructor(private dialog: MatDialog, public characterService: CharacterService) { }

  ngOnInit() { }
}
