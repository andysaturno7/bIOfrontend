import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product/product.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('ulclasses') ulclasses = '';
  @Input('liclasses') liclasses = '';

  @Input('elements') products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
