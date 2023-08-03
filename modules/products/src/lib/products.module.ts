import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
