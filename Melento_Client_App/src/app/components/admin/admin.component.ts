import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor() { }
  userClicked=''
  viewUserClicked(){
    this.userClicked='viewUser'
  }
  addUserClicked(){
    this.userClicked='addUser'
  }
  updateUserClicked(){
    this.userClicked='updateUser'
  }
  deleteUserClicked(){
    this.userClicked='deleteUser'
  }
  productClicked=''
  viewProductClicked(){
    this.productClicked='viewProduct'
  }
  addProductClicked(){
    this.productClicked='addProduct'
  }
  updateProductClicked(){
    this.productClicked='updateProduct'
  }
  deleteProductClicked(){
    this.productClicked='deleteProduct'
  }
  supplierClicked=''
  viewSupplierClicked(){
    this.supplierClicked='viewSupplier'
  }
  addSupplierClicked(){
    this.supplierClicked='addSupplier'
  }
  updateSupplierClicked(){
    this.supplierClicked='updateSupplier'
  }
  deleteSupplierClicked(){
    this.supplierClicked='deleteSupplier'
  }
  manufacturerClicked=''
  viewmanufacturerClicked(){
    this.manufacturerClicked='viewmanufacturer'
  }
  addmanufacturerClicked(){
    this.manufacturerClicked='addmanufacturer'
  }
  updatemanufacturerClicked(){
    this.manufacturerClicked='updatemanufacturer'
  }
  deletemanufacturerClicked(){
    this.manufacturerClicked='deletemanufacturer'
  }
  ngOnInit(): void {
  }

}
