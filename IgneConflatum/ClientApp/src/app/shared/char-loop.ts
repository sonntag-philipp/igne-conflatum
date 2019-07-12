import { Character } from './models/character';

export class CharLoop {


  private _characters: Character[];
  public get characters(): Character[] {
    return this._characters;
  }
  public set characters(v: Character[]) {
    this._characters = v;
  }

  constructor() {

  }


  public shift(index: number) {
    console.log(this.characters);
    for (let i = 0; i < index; i++) {
      this.characters.push(this.characters.shift());
    }
    if(index < 0) {
      for (let i = 0; i < (index * -1); i++) {
        this.characters.unshift(this.characters.pop());
      }
    }
  }

}