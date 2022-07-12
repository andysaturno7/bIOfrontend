import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutletComponent } from './outlet/outlet.component';
import { DipoComponent } from './templates/dipo/dipo.component';
import { SalidaComponent } from './templates/salida/salida.component';

const routes: Routes = [
  {
    path: '',
    component: OutletComponent,
    children: [
      { path: 'dipo', component: DipoComponent },
      { path: 'salida', component: SalidaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintRoutingModule {}
