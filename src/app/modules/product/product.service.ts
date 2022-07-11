import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paginated } from 'src/app/interfaces/pagination.interface';
import { environment } from 'src/environments/environment';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public currentProducts?: Product[]

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Paginated<Product>>(`${environment.url}/products`).toPromise().then(res=>{this.currentProducts = res.data; return res});
  }

  getByBarcode(code: string){
    return this.http.get<Product>(`${environment.url}/products/barcode/${code}`)
  }
  
  getById(id: string){
    return this.http.get<Product>(`${environment.url}/products/${id}`)
  }

  addProduct(product: Product){
    return this.http.post(`${environment.url}/products`, product);
  }

  editProduct(product: Product){
    return this.http.post(`${environment.url}/products/update`, product);
  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.url}/products/${id}`);
  }

}
