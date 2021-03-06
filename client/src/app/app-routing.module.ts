import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
//import {ShopComponent} from "./shop/shop.component";
//import {ProductDetailsComponent} from "./shop/product-details/product-details.component";
import {TestErrorComponent} from "./core/test-error/test-error.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {ServerErrorComponent} from "./core/server-error/server-error.component";

const routes: Routes = [
  {path:'', component: HomeComponent, data:{breadcrumb: 'Home'}},
  {path:'test-error', component: TestErrorComponent, data:{breadcrumb: 'Test Errors'}},
  {path:'not-found', component: NotFoundComponent, data:{breadcrumb: 'Server Error'}},
  {path:'server-error', component: ServerErrorComponent, data:{breadcrumb: 'Not Found'}},
  //{path:'shop', component: ShopComponent},
  {path:'shop', loadChildren:() => import('./shop/shop.module').then(mod=> mod.ShopModule),
    data:{breadcrumb: 'Shop'}},
  //{path:'shop/:id', component: ProductDetailsComponent },
  {path:'**', redirectTo: 'not-found', pathMatch:'full'},
  //{path:'**', redirectTo: '', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
