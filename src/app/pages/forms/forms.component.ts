import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnInit {

  name = new FormControl('');

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  /*profileForm = new FormGroup({
     user: new FormControl(''),
     pass: new FormControl('')
  });*/

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Terry');
  }

  onSubmit() {
     console.warn(this.profileForm.value);
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
