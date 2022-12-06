import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      heroForm: this.fb.group ({
        name: this.fb.control(null, [Validators.required]),
        alterEgo: this.fb.control(null, [Validators.required]),
        enemy: this.fb.control(''),
        planet: this.fb.control(null, [Validators.required])
      }),
      power: this.fb.array([]),
      weakness: this.fb.array([])
    })
  }

  getErrorC(name: string, error: string) {
    return this.form.get(name)?.errors![error];
  }

  getFormC(name: string) {
    return this.form.get(name);
  }

  getPowers() {
    return (this.form.get('power') as FormArray).controls;
  }

  addPowers() {
    const control = this.fb.control(null);
    (this.form.get('power') as FormArray).push(control);
  }

  getWeakness() {
    return (this.form.get('weakness') as FormArray).controls;
  }

  addWeakness() {
    const control = this.fb.control(null);
    (this.form.get('weakness') as FormArray).push(control);
  }

  submit() {
    console.log(this.form.value);
  }

}
