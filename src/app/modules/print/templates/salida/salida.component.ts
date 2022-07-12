import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PrintService } from '../../print.service';

@Component({
  selector: 'tmp-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css'],
})
export class SalidaComponent implements OnInit {
  data;
  styleId = '';
  @ViewChild('template') template?: ElementRef;

  constructor(private _print: PrintService) {
    this.data = this._print.lastData;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._print.readyToPrint();
    }, 500);
  }
}
