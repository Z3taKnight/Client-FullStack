import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {
  supplier:Supplier=new Supplier(0,"","",0,"")
  supplierArr:Supplier[]=[]
  submitted=false;

    supplierForm=new FormGroup({
     
      sName:new FormControl(''),
      sLocation:new FormControl(''),
      sContact:new FormControl(''),
      sEmail:new FormControl(''),
      
     // manufacture_id:new FormControl('')
   });

  constructor( private formBuilder:FormBuilder,private supplierService:SupplierService) {
    this.supplierService.getsupplier().subscribe(data=>{
      this.supplierArr=data;
    });
    this.supplierForm=this.formBuilder.group({
      sName:['',Validators.required],
      sLocation:['',Validators.required],
      sContact:['',Validators.required],
      sEmail:['',Validators.required],
     // manufacture_id:['',Validators.required],
    })

   }

  ngOnInit(): void {
  }
  get f(){return this.supplierForm.controls;}

  onSubmit(){
    this.submitted=true;
    Object.keys(this.supplierForm.controls).forEach(key=>{
      console.log(key)
      if(this.supplierForm.get(key)?.errors!=null){
        console.log(this.supplierForm.get(key)?.errors);
      }
    });
    if(this.supplierForm.invalid){
      return;
    }
    var tempId=0;
    var maxId=0;
    this.supplierArr.forEach(p=>{
      if(maxId<p._id){
        maxId=p._id;
      }
    })
    tempId=maxId;
    tempId=tempId+1;
    console.log(tempId)
    let sN=this.supplierForm.value.sName;
    let sL=this.supplierForm.value.sLocation;
    let sC=this.supplierForm.value.sContact;
    let sE=this.supplierForm.value.sEmail;
    //let prod_id=this.supplierForm.value.product_id;
   // let prod_name=this.supplierForm.value.product_name;
   // let manu_id=this.supplierForm.value.manufacture_id;
    this.supplier=new Supplier(tempId,sN,sL,sC,sE)
    this.supplierService.addSupplier(this.supplier).subscribe(data =>{
      console.log(data);
      location.reload();
     });
    //alert("Supplier Added Successfully!!!")
    location.reload();
  }
}
