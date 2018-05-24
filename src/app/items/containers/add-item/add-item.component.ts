import { Component, OnInit } from '@angular/core';
import { State } from '../../state.enum';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public State = State;
  public name: string;
  public reference: number;
  public state: State;
  public possibleStateValueList: string[] = [];

  constructor() {
    for (const state in State) {
      if (State.hasOwnProperty(state)) {
        this.possibleStateValueList.push(State[state]);
      }
    }
  }

  ngOnInit() {
    this.state = State.ALIVRER;
  }

  public process(form) {
    console.log(form.value);
  }

}
