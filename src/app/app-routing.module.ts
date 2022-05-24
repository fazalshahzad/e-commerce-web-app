import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ShopComponent } from './shop/shop.component';
import { SmallproductComponent } from './smallproduct/smallproduct.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'blog', component:BlogComponent},
  {path:'shop', component:ShopComponent},
  {path:'about', component:AboutComponent},
  {path:'small', component:SmallproductComponent},
  {path:'page1', component:Page1Component},
  {path:'page2', component:Page2Component},
  {path:'contact', component:ContactComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
