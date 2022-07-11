import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputScanComponent } from './input-scan/input-scan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { GroupByPropertyPipe } from './pipes/group-by-property.pipe';


@NgModule({
  declarations: [
    InputScanComponent,
    GroupByPropertyPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule
  ],
  exports: [InputScanComponent, GroupByPropertyPipe]
})
export class SharedModule { }
