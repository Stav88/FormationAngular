import {Component, OnInit} from '@angular/core';
import {State} from '../../state.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public form: FormGroup;
  public possibleStateValueList: string[] = Object.values(State);
  public nameLength = 0;

  constructor(public fb: FormBuilder) {
  }

  public ngOnInit() {
    this.createForm();
    this.form.get('name').valueChanges.pipe(
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe((value) => this.nameLength = value.length);
    this.form.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((value) => console.log(value));
  }

  public createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      reference: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^\d+$/)]],
      state: [State.ALIVRER, Validators.required]
    });
  }

  public process() {
    // persister les données avec un appel http/Web Service
    this.form.reset();
  }

  public isError(fieldName: string) {
    return this.form.touched && this.form.get(fieldName).invalid;
  }
}
