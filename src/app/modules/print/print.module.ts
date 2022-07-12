import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintRoutingModule } from './print-routing.module';
import { OutletComponent } from './outlet/outlet.component';
import { DipoComponent } from './templates/dipo/dipo.component';
import { SalidaComponent } from './templates/salida/salida.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OutletComponent, DipoComponent, SalidaComponent],
  imports: [CommonModule, PrintRoutingModule, PrintRoutingModule, SharedModule],
})
export class PrintModule {}
