import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './products/components/productlist/productlist.component';
import { CartlistComponent } from './carts/components/cartlist/cartlist.component';
import { UnknownComponent } from './shared/components/unknown/unknown.component';
import { HomeComponent } from './home/home.component';


const _routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductlistComponent },
  { path: 'cart', component: CartlistComponent },
  { path: 'unknown', component: UnknownComponent },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(_routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
