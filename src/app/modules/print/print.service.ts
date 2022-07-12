import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router, UrlCreationOptions } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PrintService {
  isPrinting: boolean = false;

  public lastData: any;

  constructor(private _router: Router, private _location: Location) {}

  readyToPrint() {
    window.print();
    this._location.back();
    this.isPrinting = false;
  }

  print(template: string, data: any) {
    this.lastData = data;
    this._router.navigate([`/print/${template}`]);
  }
}
