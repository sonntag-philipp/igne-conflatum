import { Bar } from './../../shared/models/bar';
import { Character } from './../../shared/models/character';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ic-char-board",
  templateUrl: "./char-board.component.html",
  styleUrls: ["./char-board.component.scss"]
})
export class CharBoardComponent implements OnInit {

  public characters: Character[] = [
    {
      name: "Bartholomäus Siemens",
      effects: [
        {
          name: "Vergiftet",
          color: "135, 15, 105"
        }
      ],
      bars: [
        {
          name: "Leben",
          value: 75
        },
        {
          name: "Mana",
          value: 43
        }
      ]
    },
    {
      name: "Nephias",
      bars: [
        {
          name: "Leben",
          value: 50
        }
      ]
    },
    {
      name: "Keine Ahnung",
      bars: [
        {
          name: "Leben",
          value: 32
        }
      ]
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
