import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductSearchComponent } from './product-search.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent
  let fixture: ComponentFixture<ProductSearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchComponent, BrowserAnimationsModule, HttpClientTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductSearchComponent)
    component = fixture.componentInstance
    // component.products$ = Observable<Product[]>
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
