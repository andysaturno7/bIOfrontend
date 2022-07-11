import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { SalidaRootComponent } from './salida/root/root.component';
import { FormComponent } from './salida/form/form.component';
import { ListComponent } from './salida/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../product/product.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SalidaRootComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ProductService
  ]
})
export class DocumentsModule { }
