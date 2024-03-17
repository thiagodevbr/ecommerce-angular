import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { ProductSearchService } from '@ecommerce/product-data-access'
import { Product } from 'modules/data-access/product/src/lib/models/product.model'
import { Observable, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs'

@Component({
  selector: 'ecommerce-product-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit {
  searchFormControl = new FormControl('', { nonNullable: true })
  products$!: Observable<Product[]>

  constructor(private productSearchService: ProductSearchService) {}

  ngOnInit(): void {
    this.products$ = this.searchFormControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((text: string) => text.length > 3),
      // map(text => text + 'TESTE AQUI'),
      switchMap((text: string) => this.productSearchService.getProductsByName(text)),
    )
  }
}
