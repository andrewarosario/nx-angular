import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponent } from 'modules-shared-ui';
import { OrdersRoutingModule } from './orders.routing.module';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [CommonModule, OrdersRoutingModule, UiComponent],
  declarations: [OrdersComponent],
})
export class OrdersModule {}
