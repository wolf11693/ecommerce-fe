import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
class ProductService {

  baseUrl: string = "api/products?size=100";

  constructor(private _httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const obsProduct: Observable<Product[]> = this._httpClient.get<GetResponse>(this.baseUrl)
                                                              .pipe( map( response => response._embedded.products) );

    return obsProduct;
  }
}

interface GetResponse {
  _embedded: {
    products: Product[]
  }
}



export default ProductService;
