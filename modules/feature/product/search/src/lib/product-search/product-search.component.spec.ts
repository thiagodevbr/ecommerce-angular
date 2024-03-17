import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductSearchComponent } from './product-search.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { mockProducts } from 'modules/data-access/product/src/lib/mocks/product.mock'

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent
  let fixture: ComponentFixture<ProductSearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchComponent, BrowserAnimationsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductSearchComponent)
    component = fixture.componentInstance
    component.products = mockProducts
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
