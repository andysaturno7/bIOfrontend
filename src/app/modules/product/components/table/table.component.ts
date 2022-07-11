import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paginated } from 'src/app/interfaces/pagination.interface';
import { Product } from '../../product.interface';

@Component({
  selector: 'prd-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('products') products?: Paginated<Product>;
  @Output('delete') deleteEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete(id?: string){
    if(confirm('Seguro deseas eliminar?'))
    this.deleteEvent.emit(id);
  }

}
