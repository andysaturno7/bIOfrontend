import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product.interface';
import { ProductService } from '../../product.service';

@Component({
  selector: 'prd-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output('add') add: EventEmitter<Product> = new EventEmitter();
  @Output('edit') edit: EventEmitter<Product> = new EventEmitter();

  product: Product = {
    description: "",
    qty: 0,
    out: 0,
    barcode: '',
    categories: ''
  };
  isEdit: boolean = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private _prd: ProductService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;    
    if(params.id){
      this.isEdit = true;           
      this._prd.getById(params.id).subscribe(res=>{
        this.product = res;
      }, console.log)
      }
  }

  emitEdit(){   
    this.edit.emit(this.product);
  }
  
  emitAdd(){
    this.add.emit(this.product);
  }

}
