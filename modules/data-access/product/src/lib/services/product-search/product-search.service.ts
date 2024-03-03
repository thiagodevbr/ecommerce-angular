import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Product } from '../../models/product.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  readonly apiURL: string = 'https://65009f9718c34dee0cd53786.mockapi.io'

  constructor(private httpClient: HttpClient) {}

  getProductsByName(name: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiURL}/products`, {
      params: {
        name,
      },
    })
  }
}
