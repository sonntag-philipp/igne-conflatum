import { Effect } from './effect';
import { Bar } from './bar';

export class Character {
  public name: string;
  public bars: Bar[] = [];
  public effects?: Effect[] = [];
}