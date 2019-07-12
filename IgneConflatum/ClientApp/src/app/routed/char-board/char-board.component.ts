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

  public characters: Character[] = [
    {
      name: "Bartholomäus Siemens",
      effects: [
        {
          name: "Vergiftet",
          color: "135, 15, 105",
          rounds: 3
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
    }
  ];



  private _listCharacters: Character[];
  public get listCharacters(): Character[] {
    return this._listCharacters;
  }


  private _fieldCharacters: Character[];
  public get fieldCharacters(): Character[] {
    return this._fieldCharacters;
  }

  public stepForward(): void {
    console.log("Step forward");
    if(this._fieldCharacters[0].effects !== undefined) {
      for (const item of this._fieldCharacters[0].effects) {
        item.rounds--;
      }
    }

    this._listCharacters.unshift(this._fieldCharacters.shift());
    this._fieldCharacters.push(this._listCharacters.pop());
  }

  public stepBack(): void {
    console.log("Step back");
    if(this._fieldCharacters[0].effects !== undefined) {
      for (const item of this._fieldCharacters[0].effects) {
        item.rounds++;
      }
    }

    this._listCharacters.push(this._fieldCharacters.pop());
    this._fieldCharacters.unshift(this._listCharacters.shift());
  }

  public openEditDialog(char: Character): void {
    let dialogRef = this.dialog.open(BarEditDialog, {
      data: {
        character: char
      }
    }).afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this._fieldCharacters = [
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
        name: "Pietro Lamborghini",
        effects: [
          {
            name: "Mit kacke verschmiert",
            color: "133, 62, 21",
            rounds: 3
          }
        ],
        bars: [
          {
            name: "Leben",
            value: 15
          },
          {
            name: "Mana",
            value: 42
          }
        ]
      }
    ];

    this._listCharacters = [
      {
        name: "Bartholomäus Siemens",
        effects: [
          {
            name: "Vergiftet",
            color: "135, 15, 105",
            rounds: 3
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
        name: "Angela Merkel",
        effects: [
          {
            name: "Angeschissen",
            color: "135, 15, 105",
            rounds: 3
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
        name: "Adolf Hitler",
        effects: [
          {
            name: "Tischplatte",
            color: "135, 15, 105",
            rounds: 3
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
        name: "Nils K.",
        effects: [
          {
            name: "Huso",
            color: "135, 15, 105",
            rounds: 3
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
        name: "Kollegah",
        effects: [
          {
            name: "Asozial",
            color: "135, 15, 105",
            rounds: 3
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
        name: "Joseph Stalin",
        effects: [
          {
            name: "Sozialismus",
            color: "135, 15, 105",
            rounds: 3
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
        name: "Keine Ahnung",
        bars: [
          {
            name: "Leben",
            value: 32
          }
        ]
      }
    ];
  }

}
