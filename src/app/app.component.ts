import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutModule } from '@ecommerce/layout'

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule],
  selector: 'ecommerce-root',
  template: '<ecommerce-header titleHeader="Ecommerce"></ecommerce-header> <router-outlet></router-outlet>',
})
export class AppComponent {}
