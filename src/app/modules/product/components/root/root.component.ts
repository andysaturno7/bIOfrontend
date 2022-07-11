import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/interfaces/pagination.interface';
import { Product } from '../../product.interface';
import { ProductService } from '../../product.service';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private _prd: ProductService) { }

  products?: Paginated<Product>;

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this._prd.getProducts().then(products=>{
      this.products = products;      
    }).catch(console.log)
  }

  addProduct(product: Product){
    this._prd.addProduct(product).subscribe(res=>{
      console.log({res});
      
      alert('agregado')
    }, console.log);
  }

  editProduct(product: Product){    
    this._prd.editProduct(product).subscribe(res=>{
      console.log({res});
            
    }, console.log);
  }

}
