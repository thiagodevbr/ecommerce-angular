import { TestBed } from '@angular/core/testing'

import { ProductSearchService } from './product-search.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Product } from '../../models/product.model'
import { mockProducts } from '../../mocks/product.mock'

describe('ProductSearchService', () => {
  let service: ProductSearchService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(ProductSearchService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  it('should be created an instante of ProductSearchService', () => {
    expect(service).toBeTruthy()
  })

  it('should return products correctly', () => {
    const mockName = 'notebook'
    const url = `${service.apiURL}/products?name=${mockName}`
    let result: Product[] = []

    service.getProductsByName(mockName).subscribe((data: Product[]) => {
      result = data
    })

    const request = httpMock.expectOne(url) //espera que o httpMock seja a URL
    request.flush(mockProducts) // Mocka a resposta esperada
    expect(request.request.method).toBe('GET') //Avalia se o metodo GET foi chamado
    expect(result).toEqual(mockProducts) //O result será exatamente o mock de produtos mockado
    httpMock.verify()
  })
})
