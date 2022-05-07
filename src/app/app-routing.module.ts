import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './cartpage/cartpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ShowproductComponent } from './showproduct/showproduct.component';

const routes: Routes = [
  { path: 'mainpage', component: MainpageComponent },
  { path: 'productpage', component: ProductpageComponent },
  { path: 'cartpage', component: CartpageComponent },
  { path: 'searchproduct', component: SearchproductComponent },
  { path: 'showproduct', component: ShowproductComponent },
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
