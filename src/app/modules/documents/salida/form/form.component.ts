import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formController = this._fb.group({
    date: ['', Validators.required],
    eventName: ['', Validators.required],
    coordinator: ['', Validators.required],
    responsible: ['', Validators.required]
  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
