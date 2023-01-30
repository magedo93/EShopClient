import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartlistComponent } from './components/cartlist/cartlist.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartlistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class CartsModule { }
