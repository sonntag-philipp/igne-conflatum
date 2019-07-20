import { Character } from './models/character';
import { ConnectionService } from './connection/connection.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {

  private _characters: Character[] = [
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
          value: 75,
          max: 100
        },
        {
          name: "Mana",
          value: 43,
          max: 100
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
          value: 75,
          max: 100
        },
        {
          name: "Mana",
          value: 43,
          max: 100
        }
      ]
    },
    {
      name: "Seter Piemens",
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
          value: 75,
          max: 100
        },
        {
          name: "Mana",
          value: 43,
          max: 100
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
          value: 75,
          max: 100
        },
        {
          name: "Mana",
          value: 43,
          max: 100
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
          value: 75,
          max: 100
        },
        {
          name: "Mana",
          value: 43,
          max: 100
        }
      ]
    }
  ];
  public get characters(): Character[] {
    return this._characters;
  }

  public shiftSequence(shifting: number): void {
    if(shifting > 0) {
      for (let i = 0; i < shifting; i++) {
        this.characters.push(this.characters.shift());
        this.updateCharacter(this.characters[0]);
      }
    }
    else {
      for (let i = 0; i > shifting; i--) {
        this.characters.unshift(this.characters.pop());
        this.updateCharacter(this.characters[1]);
      }
    }
  }


  constructor(private connection: ConnectionService) {
    connection.connect().then(() => {
      console.log("Connection established");

      connection.hubConnection.invoke("GetAllCharacters").then(result => {
        this._characters = result;
      })

      connection.hubConnection.on("UpdateCharacter", this.onCharacterUpdated);
      connection.hubConnection.on("RemoveCharacter", this.onCharacterRemoved);
    });
  }

  public updateCharacter(char: Character): void {
    if(this.connection.hubConnection.state === 1) {
      console.log(char);
      const index = this.characters.indexOf(this.characters.find(x => x.name === char.name));
  
      if(index > -1) {
        this.characters[index] = char;
        this.connection.hubConnection.invoke("UpdateCharacter", char);
      }
      else {
        this.characters.push(char);
        this.connection.hubConnection.invoke("UpdateCharacter", char);
      }
    }
  }

  public removeCharacter(char: Character): void {
    if(this.connection.hubConnection.state === 1) {
      const index = this.characters.indexOf(this.characters.find(x => x.name === char.name));
  
      if(index > -1) {
        this.characters.splice(index, 1);
        this.connection.hubConnection.invoke("RemoveCharacter", char);
      }
    }
  }

  private onCharacterRemoved = (char: Character) => {
    console.log("Incoming removal:", char);

    const index = this.characters.indexOf(this.characters.find(x => x.name === char.name));
    if(index > -1) {
      this.characters.splice(index, 1);      
    }
    else {
      console.log("Could not remove. ", char);
    }
  }

  private onCharacterUpdated = (char: Character) => {
    console.log("Incoming update:", char);

    const index = this.characters.indexOf(this.characters.find(x => x.name === char.name));
    if(index < 0) {
      this.characters.push(char); 
    }
    else {
      this.characters[index] = char;
    }
  }
}