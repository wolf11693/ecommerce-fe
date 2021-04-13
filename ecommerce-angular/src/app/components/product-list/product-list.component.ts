import { Component, OnInit } from '@angular/core';
import Product from 'src/app/common/product';
import ProductService from '../../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  //templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._productService.getProducts().subscribe( data => { console.log(data); this.products = data; } );
  }

}
