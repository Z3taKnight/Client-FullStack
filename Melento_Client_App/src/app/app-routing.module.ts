import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlackFungusAwarenessComponent } from './components/black-fungus-awareness/black-fungus-awareness.component';
import { CartComponent } from './components/cart/cart.component';
import { ConditionsWeTreatComponent } from './components/conditions-we-treat/conditions-we-treat.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { InfoAboutOperationsComponent } from './components/info-about-operations/info-about-operations.component';
import { LinkToFaqComponent } from './components/link-to-faq/link-to-faq.component';
import { SingleManufacturerComponent } from './components/manufacturer/single-manufacturer/single-manufacturer.component';
import { ViewManufacturerComponent } from './components/manufacturer/view-manufacturer/view-manufacturer.component';
import { SingleProductComponent } from './components/product/single-product/single-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { SpecialistServicesComponent } from './components/specialist-services/specialist-services.component';
import { SingleSupplierComponent } from './components/supplier/single-supplier/single-supplier.component';
import { ViewSupplierComponent } from './components/supplier/view-supplier/view-supplier.component';
import { SingleUserComponent } from './components/user/single-user/single-user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'facilities',component:FacilitiesComponent},
  {path:'conditions-we-treat',component:ConditionsWeTreatComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'cart',component:CartComponent},
  {path:'link-to-faq',component:LinkToFaqComponent},
  {path:'info-about-operations',component:InfoAboutOperationsComponent},
  {path:'black-fungus-awareness',component:BlackFungusAwarenessComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'Specialist-operative-services',component:SpecialistServicesComponent},
  {path:'singlesupplier/:id',component:SingleSupplierComponent},
  {path:'singlemanufacturer/:id',component:SingleManufacturerComponent},
  {path:'singleuser/:id',component:SingleUserComponent},
  {path:'singleProduct/:id',component:SingleProductComponent},
  {path:'view-products',component:ViewProductComponent},
  {path:'view-manufacturers',component:ViewManufacturerComponent},
  {path:'view-suppliers',component:ViewSupplierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }