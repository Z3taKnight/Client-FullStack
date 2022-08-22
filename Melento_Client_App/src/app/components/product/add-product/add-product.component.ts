import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product : Product = new Product(0,"","","","","",0.0,0,0,"")
  productArr:Product[]=[]
  submitted = false;

  productForm = new FormGroup({
    pName: new FormControl(""),
    pStyle: new FormControl(""),
    pBattery: new FormControl(""),
    pFittingRange: new FormControl(""),
    pRemarks: new FormControl(""),
    price: new FormControl(0.0),
    suppliers_id: new FormControl(0),
    manufacturer_id: new FormControl(0),
    img_path: new FormControl("")
  })
  constructor(private formBuilder:FormBuilder,private productService:ProductService) {
    this.productService.getProducts().subscribe(data=>{
      this.productArr=data;
    });
    this.productForm = this.formBuilder.group({
      pName:['',Validators.required],
      pStyle:['',Validators.required],
      pBattery:['',Validators.required],
      pFittingRange:['',Validators.required],
      pRemarks:['',Validators.required],
      price:[0.0,Validators.required],
      suppliers_id:[0,Validators.required],
      manufacturer_id:[0,Validators.required],
      img_path:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  get f() { return this.productForm.controls; }
  onSubmit(){
    this.submitted=true;
    Object.keys(this.productForm.controls).forEach(key=>{
      console.log(key)
      if(this.productForm.get(key)?.errors!=null){
       console.log(this.productForm.get(key)?.errors);

      }
    });
    if(this.productForm.invalid){
      return;

    }
    var tempId = 0;
    var maxId = 0;
    this.productArr.forEach(p =>{
      if(maxId < p._id){
        maxId =p._id;
      }
    })
    tempId = maxId;
    tempId = tempId +1;
    console.log(tempId);
    let pN = this.productForm.value.pName;
    let pS = this.productForm.value.pStyle;
    let pF = this.productForm.value.pFittingRange;
    let pB = this.productForm.value.pBattery;
    let pR = this.productForm.value.pRemarks;
    let pPr = this.productForm.value.price;
    let pSupId = this.productForm.value.suppliers_id;
    let pManuId = this.productForm.value.manufacturer_id;
    let pImgPath = this.productForm.value.img_path;
    this.product = new Product(tempId,pN,pS,pF,pB,pR,pPr,pSupId,pManuId,pImgPath)
    console.log(tempId,pN,pS,pF,pB,pR,pPr,pSupId,pManuId,pImgPath)

    this.productService.addProduct(this.product).subscribe(data =>{
      console.log(data);
      location.reload()
     });
    alert("products added successfully")
    location.reload()
  }
 

}
