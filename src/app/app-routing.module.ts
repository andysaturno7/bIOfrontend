import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'documents',
    loadChildren: () =>
      import('./modules/documents/documents.module').then(
        (m) => m.DocumentsModule
      ),
  },
  {
    path: 'print',
    loadChildren: () =>
      import('./modules/print/print.module').then((m) => m.PrintModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
