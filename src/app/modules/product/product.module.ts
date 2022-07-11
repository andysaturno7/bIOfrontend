import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'

import { ProductRoutingModule } from './product-routing.module';
import { RootComponent } from './components/root/root.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RootComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
