import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CollectionService } from '../../../core/collection.service';
import { State } from '../../state.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public form: FormGroup;
  public possibleStateValueList: string[] = Object.values(State);
  public nameLength = 0;

  constructor(public fb: FormBuilder,
    private collectionService: CollectionService,
    private router: Router) {
  }

  public ngOnInit() {
    this.createForm();
    this.form.get('name').valueChanges.pipe(
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe((value) => this.nameLength = value ? value.length : 0);
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
    this.collectionService.insert(this.form.value);
    this.form.reset();
    this.router.navigate(['/items/list']);

  }

  public isError(fieldName: string) {
    return this.form.touched && this.form.get(fieldName).invalid;
  }
}
