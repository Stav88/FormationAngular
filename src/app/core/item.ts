import { State } from '../items/state.enum';

export interface Item {
  id: number;
  name: string;
  reference: number;
  state: State;
}
