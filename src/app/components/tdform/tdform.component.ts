import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TDFormComponent implements OnInit {

  @ViewChild('form', {static: true}) tdForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

    heroForm =
     {
      name: '',
      alterEgo: '',
      power: '',
      enemy: '',
      planet: '',
      weakness: ''
    }

    submit(tdForm: NgForm) {
      console.log(tdForm.value)
    }

}
