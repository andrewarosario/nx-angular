import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponent } from 'modules/shared/ui';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule, UiComponent],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
