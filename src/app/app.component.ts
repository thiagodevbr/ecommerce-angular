import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutModule } from '@ecommerce/layout'
import { ProductSearchComponent } from '@ecommerce/product-search'

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule, ProductSearchComponent],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
