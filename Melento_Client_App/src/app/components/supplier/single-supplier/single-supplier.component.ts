import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-single-supplier',
  templateUrl: './single-supplier.component.html',
  styleUrls: ['./single-supplier.component.scss']
})
export class SingleSupplierComponent implements OnInit {
// @Input() supp_id:string="initial"
supplier_id:number=0
supplier:Supplier=new Supplier(0,"","",0,"")
constructor(private activatedRoute:ActivatedRoute,private supplierService:SupplierService) { }

ngOnInit(): void {
  //.log("input value passed :"+this.supp_id)
  this.activatedRoute.params.subscribe((params:Params)=>{
    let id_passed=params['id'];
    console.log(id_passed);
    this.supplier_id=id_passed;
    this.supplierService.getSupplierById(this.supplier_id).subscribe(data =>{
      this.supplier=data;
      console.log(this.supplier);
     });
  })
}

}
