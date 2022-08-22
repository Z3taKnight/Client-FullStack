import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.scss']
})
export class UpdateSupplierComponent implements OnInit {
  supplier:Supplier=new Supplier(0,"","",0,"")
  supplierArr:Supplier[]=[]
  submitted=false;

    supplierForm=new FormGroup({
      sName:new FormControl(''),
      sLocation:new FormControl(''),
      sContact:new FormControl(''),
      sEmail:new FormControl(''),
      manufacture_id:new FormControl('')

   });
  idUpdated: number;

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
    this.idUpdated=0;
   }
  ngOnInit(): void {
  }
  onChangeType(evt:any,evtvalue:any){
    console.log(evt.target.value);
    var idObtained=evt.target.value;
    this.idUpdated=parseInt(idObtained.split(':')[1].trim());
    console.log(this.idUpdated);
    for(var i=0;i<this.supplierArr.length;i++){
      if(this.idUpdated==this.supplierArr[i]._id){
       this.supplier=this.supplierArr[i];
      }     
    }
    console.log(this.supplier)
    console.log(this.supplierForm.controls)
    this.supplierForm.get('id')?.setValue(this.supplier._id)
    this.supplierForm.get('sName')?.setValue(this.supplier.sName)
    this.supplierForm.get('sLocation')?.setValue(this.supplier.sLocation)
    this.supplierForm.get('sContact')?.setValue(this.supplier.sContact)
    this.supplierForm.get('sEmail')?.setValue(this.supplier.sEmail)
   // this.supplierForm.get('manufacture_id')?.setValue(this.supplier.manufacture_id)
  
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
    let sN=this.supplierForm.value.sName;
    let sL=this.supplierForm.value.sLocation;
    let sC=this.supplierForm.value.sContact;
    let sE=this.supplierForm.value.sEmail;
   // let prod_id=this.supplierForm.value.product_id;
   // let prod_name=this.supplierForm.value.product_name;
   // let manu_id=this.supplierForm.value.manufacture_id;
    this.supplier=new Supplier(this.idUpdated,sN,sL,sC,sE)
    this.supplierService.updateSupplier(this.supplier).subscribe(data =>{
      this.supplier=data;
      console.log(this.supplier)
     });

    alert("Supplier Updated Successfully!!!")
    location.reload()
  }

}
