import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalidaRootComponent } from './salida/root/root.component';

const routes: Routes = [
  // {path: '', component: RootComponent},
  {path: 'salida', component: SalidaRootComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
