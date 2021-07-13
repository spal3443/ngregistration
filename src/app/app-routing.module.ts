import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'suplier',component:SupplierComponent},
  {path:'ambulance',component:AmbulanceComponent},
  {path:'login',component:LoginComponent},
  //{path:'',component:HomepageComponent},
  //{path:'',component:HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
