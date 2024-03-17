import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { mockProducts } from '@ecommerce/product-data-access'
import { Product } from 'modules/data-access/product/src/lib/models/product.model'

@Component({
  selector: 'ecommerce-product-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent {
  searchFormControl = new FormControl('')
  products: Product[] = mockProducts
}
