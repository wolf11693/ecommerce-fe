import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
class ProductService {

  baseUrl: string = "api/products";

  constructor(private _httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const obsProduct: Observable<Product[]> = this._httpClient.get<GetResponse>(this.baseUrl)
                                                              .pipe( map( response => response._embedded.products) );

    return obsProduct;
  }

    getProductsByCategoryId(categoryId: number): Observable<Product[]> {
    const obsProduct: Observable<Product[]> = this._httpClient.get<GetResponse>( `${this.baseUrl}/search/findByCategoryId?categoryId=${categoryId}` )
                                                              .pipe( map( response => response._embedded.products) );

    return obsProduct;
  }

  getProductsByCategoryNameContaining(categoryName: string): Observable<Product[]> {
    const obsProduct: Observable<Product[]> = this._httpClient.get<GetResponse>( `${this.baseUrl}/search/findByCategoryCategoryNameContaining?categoryName=${categoryName}` )
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
