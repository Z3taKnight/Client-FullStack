import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  product: Product = new Product(0, '', '', '', '', '', 0.0, 0, 0, '');
  productArr: Product[] = [];
  submitted = false;

  productForm = new FormGroup({
    id: new FormControl(''),
    pname: new FormControl(''),
    pStyle: new FormControl(''),
    pBattery: new FormControl(''),
    pFittingRange: new FormControl(''),
    pRemarks: new FormControl(''),
    price: new FormControl(''),
    supplier_id: new FormControl(''),
    manufacturer_id: new FormControl(''),
    img_path: new FormControl(''),
  });
  idUpdated: number | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.productService.getProducts().subscribe((data) => {
      this.productArr = data;
    });
    this.productForm = this.formBuilder.group({
      id: [0, Validators.required],
      pname: ['', Validators.required],
      pStyle: ['', Validators.required],
      pBattery: ['', Validators.required],
      pFittingRange: ['', Validators.required],
      pRemarks: ['', Validators.required],
      price: [0, Validators.required],
      supplier_id: [0, Validators.required],
      manufacturer_id: [0, Validators.required],
      img_path: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  onChangeType(evt: any, evtvalue: any) {
    console.log(evt.target.value);
    // console.log(evtvalue.value);
    var idObtained = evt.target.value;

    this.idUpdated = parseInt(idObtained.split(':')[1].trim());

    for (var i = 0; i < this.productArr.length; i++) {
      if (this.idUpdated == this.productArr[i]._id) {
        this.product = this.productArr[i];
      }
    }
    this.productForm.get('id')?.setValue(this.product._id);
    this.productForm.get('pname')?.setValue(this.product.pname);
    this.productForm.get('pStyle')?.setValue(this.product.pStyle);
    this.productForm.get('pBattery')?.setValue(this.product.pBattery);
    this.productForm.get('pFittingRange')?.setValue(this.product.pFittingRange);
    this.productForm.get('pRemarks')?.setValue(this.product._id);
    this.productForm.get('price')?.setValue(this.product.price);
    this.productForm.get('supplier_id')?.setValue(this.product.supplier_id);
    this.productForm
      .get('manufacturer_id')
      ?.setValue(this.product.manufacture_id);
    this.productForm.get('img_path')?.setValue(this.product.img_path);
  }
  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    Object.keys(this.productForm.controls).forEach((key) => {
      if (this.productForm.get(key)?.errors != null) {
        console.log(this.productForm.get(key)?.errors);
      }
    });
    if (this.productForm.invalid) {
      return;
    }
    var tempId = 0;
    tempId = this.productForm.value.id;

    console.log(tempId);
    let pN = this.productForm.value.pname;
    let pS = this.productForm.value.pStyle;
    let pF = this.productForm.value.pFittingRange;
    let pB = this.productForm.value.pBattery;
    let pR = this.productForm.value.pRemarks;
    let pr = this.productForm.value.price;
    let pSupId = this.productForm.value.supplier_id;
    let pManuId = this.productForm.value.manufacturer_id;
    let pImgpath = this.productForm.value.img_path;
    this.product = new Product(
      tempId,
      pN,
      pS,
      pF,
      pB,
      pR,
      pr,
      pSupId,
      pManuId,
      pImgpath
    );
    this.productService.updateProduct(this.product).subscribe((data) => {
      console.log(data);
      location.reload()
    });
    alert('Product updated successfully!');
    location.reload();
  }
}
