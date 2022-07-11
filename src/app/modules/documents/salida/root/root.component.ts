import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product/product.interface';
import { ProductService } from 'src/app/modules/product/product.service';
import { ScanService } from 'src/app/modules/shared/input-scan/scan.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class SalidaRootComponent implements OnInit {

  constructor(private _prd: ProductService, private _scan: ScanService) { }

  products: Product[] = [];

  ngOnInit(): void {
  }

  handleScanner(barcode: string){
    this._scan.setScanState(false);
    this._prd.getByBarcode(barcode).subscribe(res=>{
      this.products.push(res);
      this._scan.setScanState(true);
    }, console.log)
  }

}
