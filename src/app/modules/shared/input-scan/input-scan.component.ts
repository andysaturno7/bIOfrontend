import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScanService } from './scan.service';

@Component({
  selector: 'input-scan',
  templateUrl: './input-scan.component.html',
  styleUrls: ['./input-scan.component.css']
})
export class InputScanComponent implements OnInit {
  stateSubsc: Subscription;
  disabled: boolean = false;
  @Output() scanned: EventEmitter<string> = new EventEmitter<string>();
  @Output() focus: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('inputQR') inputQR: ElementRef | undefined;
  inputValue: string | undefined;
  @Input('cssclasses') classes: string = '';

  constructor(private _state: ScanService) {
    this.stateSubsc = this._state.scanState.subscribe(
      (res: boolean) => {
        this.setState(res);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.stateSubsc.unsubscribe();
  }
  ngAfterViewInit() {
    if (!this.disabled) this.setState(true);
  }

  handleScanned() {
    this.scanned.emit(this.inputValue);
  }

  setState(active: boolean) {
    if (active) {
      this.disabled = false;
      this.inputValue = '';
      setTimeout(() => {
        this.inputQR?.nativeElement.focus();
      }, 500);
    } else {
      this.disabled = true;
    }
  }

  onBlur(event: Event) {
    event.preventDefault();
    this.focus.emit(false);
  }

  onFocus(event: Event) {
    event.preventDefault();
    this.focus.emit(true);
  }
}
