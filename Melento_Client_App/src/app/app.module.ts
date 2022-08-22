import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContentComponent } from './components/content/content.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpacityDeirectiveDirective } from './opacity-deirective.directive';
import { FooterComponent } from './components/footer/footer.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ConditionsWeTreatComponent } from './components/conditions-we-treat/conditions-we-treat.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { DeleteUserComponent } from './components/user/delete-user/delete-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkToFaqComponent } from './components/link-to-faq/link-to-faq.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InfoAboutOperationsComponent } from './components/info-about-operations/info-about-operations.component';
import { BlackFungusAwarenessComponent } from './components/black-fungus-awareness/black-fungus-awareness.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SpecialistServicesComponent } from './components/specialist-services/specialist-services.component';
import { ViewManufacturerComponent } from './components/manufacturer/view-manufacturer/view-manufacturer.component';
import { AddManufacturerComponent } from './components/manufacturer/add-manufacturer/add-manufacturer.component';
import { UpdateManufacturerComponent } from './components/manufacturer/update-manufacturer/update-manufacturer.component';
import { SingleManufacturerComponent } from './components/manufacturer/single-manufacturer/single-manufacturer.component';
import { ViewSupplierComponent } from './components/supplier/view-supplier/view-supplier.component';
import { UpdateSupplierComponent } from './components/supplier/update-supplier/update-supplier.component';
import { AddSupplierComponent } from './components/supplier/add-supplier/add-supplier.component';
import { DeleteSupplierComponent } from './components/supplier/delete-supplier/delete-supplier.component';
import { DeleteManufacturerComponent } from './components/manufacturer/delete-manufacturer/delete-manufacturer.component';
import { SingleSupplierComponent } from './components/supplier/single-supplier/single-supplier.component';
import { SingleUserComponent } from './components/user/single-user/single-user.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';
import { SingleProductComponent } from './components/product/single-product/single-product.component';
import { CartComponent } from './components/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutUsComponent,
    ContentComponent,
    ContactusComponent,
    OpacityDeirectiveDirective,
    FooterComponent,
    FacilitiesComponent,
    ConditionsWeTreatComponent,
    HomeComponent,
    AdminComponent,
    ViewUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    LinkToFaqComponent,
    InfoAboutOperationsComponent,
    BlackFungusAwarenessComponent,
    GalleryComponent,
    SpecialistServicesComponent,
    ViewManufacturerComponent,
    AddManufacturerComponent,
    UpdateManufacturerComponent,
    SingleManufacturerComponent,
    ViewSupplierComponent,
    UpdateSupplierComponent,
    AddSupplierComponent,
    DeleteSupplierComponent,
    DeleteManufacturerComponent,
    SingleSupplierComponent,
    SingleUserComponent,
    ViewProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    SingleProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
