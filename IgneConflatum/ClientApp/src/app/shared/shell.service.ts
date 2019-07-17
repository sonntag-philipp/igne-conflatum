import { Injectable } from '@angular/core';

@Injectable()
export class ShellService {

  
  private _visible : boolean;
  public get visible() : boolean {
    return this._visible;
  }
  public set visible(v : boolean) {
    this._visible = v;
  }
  

  constructor() { }

  
}