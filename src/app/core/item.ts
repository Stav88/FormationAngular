import { State } from '../items/state.enum';

export interface Item {
  id: string;
  name: string;
  reference: number;
  state: State;
}
