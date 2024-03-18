import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'
import { ProductSearchComponent } from './product-search.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ProductSearchService, mockProducts } from '@ecommerce/product-data-access'
import { Product } from 'modules/data-access/product/src/lib/models/product.model'
import { Observable, of } from 'rxjs'

describe('#ProductSearchComponent', () => {
  let component: ProductSearchComponent
  let fixture: ComponentFixture<ProductSearchComponent>
  let productSearchService: ProductSearchService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: ProductSearchService,
          useValue: {
            getProductsByName: (): Observable<Product[]> => of(mockProducts),
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductSearchComponent)
    component = fixture.componentInstance
    productSearchService = TestBed.inject(ProductSearchService)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should debounce when input field is changed', fakeAsync(() => {
    jest.spyOn(productSearchService, 'getProductsByName')
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input')

    // Disparo de evento para simular a entrada da palavra shoes no input
    input.value = 'shoes'
    input.dispatchEvent(new Event('input'))

    tick(500)
    expect(productSearchService.getProductsByName).toHaveBeenCalledWith(input.value)
  }))

  it('should not debounce when input field is changed immediatally', fakeAsync(() => {
    jest.spyOn(productSearchService, 'getProductsByName')
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input')

    // Disparo de evento para simular a entrada da palavra shoes no input
    input.value = 'shoes'
    input.dispatchEvent(new Event('input'))
    expect(productSearchService.getProductsByName).not.toHaveBeenCalled()
    tick(500)
  }))

  it('should search multiple times', fakeAsync(() => {
    jest.spyOn(productSearchService, 'getProductsByName')
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input')

    input.value = 'shoes'
    input.dispatchEvent(new Event('input'))
    tick(500)

    input.value = 'pants'
    input.dispatchEvent(new Event('input'))
    tick(500)

    input.value = 'mouse'
    input.dispatchEvent(new Event('input'))
    tick(500)

    expect(productSearchService.getProductsByName).toHaveBeenCalledTimes(3)
  }))

  it('should not search if value have length less than 3', fakeAsync(() => {
    jest.spyOn(productSearchService, 'getProductsByName')
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input')

    input.value = 'sho'
    input.dispatchEvent(new Event('input'))
    tick(500)

    expect(productSearchService.getProductsByName).toHaveBeenCalledTimes(0)
  }))

  it('should search if value have length plus than 3', fakeAsync(() => {
    jest.spyOn(productSearchService, 'getProductsByName')
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input')

    input.value = 'shoes'
    input.dispatchEvent(new Event('input'))
    tick(500)

    expect(productSearchService.getProductsByName).toHaveBeenCalledTimes(1)
  }))

  it('should not search multiple times if value have same value', fakeAsync(() => {
    jest.spyOn(productSearchService, 'getProductsByName')
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input')

    input.value = 'shoes'
    input.dispatchEvent(new Event('input'))
    tick(500)

    input.value = 'shoes'
    input.dispatchEvent(new Event('input'))
    tick(500)

    input.value = 'shoes'
    input.dispatchEvent(new Event('input'))
    tick(500)

    expect(productSearchService.getProductsByName).toHaveBeenCalledTimes(1)
  }))

  it('should not search if empty value', fakeAsync(() => {
    jest.spyOn(productSearchService, 'getProductsByName')
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input')

    input.value = ''
    input.dispatchEvent(new Event('input'))
    tick(500)

    expect(productSearchService.getProductsByName).toHaveBeenCalledTimes(0)
  }))

  it('should return products observable correctly', fakeAsync(() => {
    component.products$.subscribe((products: Product[]) => {
      expect(products).toEqual(mockProducts)
    })
  }))
})
