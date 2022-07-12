import { Component, OnInit } from '@angular/core';
import { PrintService } from 'src/app/modules/print/print.service';
import { Product } from 'src/app/modules/product/product.interface';
import { ProductService } from 'src/app/modules/product/product.service';
import { ScanService } from 'src/app/modules/shared/input-scan/scan.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class SalidaRootComponent implements OnInit {
  constructor(
    private _prd: ProductService,
    private _scan: ScanService,
    private _print: PrintService
  ) {}

  products: Product[] = [];

  ngOnInit(): void {}

  handleScanner(barcode: string) {
    this._scan.setScanState(false);
    this._prd.getByBarcode(barcode).subscribe((res) => {
      if (!res) {
        alert('Producto desconocido...');
        return this._scan.setScanState(true);
      }
      this.products = [...this.products, res];
      this._scan.setScanState(true);
    }, console.log);
  }

  handleCreateDocument(metadata: any) {
    this._print.print('salida', { ...metadata, products: this.products });
  }
}
