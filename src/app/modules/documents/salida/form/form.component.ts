import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formController = this._fb.group({
    date: ['', Validators.required],
    eventName: ['', Validators.required],
    coordinator: ['', Validators.required],
    responsible: ['', Validators.required],
  });

  @Output('createDocument') createEvent: EventEmitter<any> = new EventEmitter();

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  crearDocumentoDeSalida() {
    this.createEvent.emit(this.formController.value);
  }
}
