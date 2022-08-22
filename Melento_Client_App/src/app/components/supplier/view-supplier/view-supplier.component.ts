import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.scss']
})
export class ViewSupplierComponent implements OnInit {
  supplierArr:Supplier[]=[];
  constructor(private router:Router,private supplierService:SupplierService) {
    this.supplierService.getsupplier().subscribe(data=>{
      this.supplierArr=data;
    });
   }
  ngOnInit(): void {
  }
  displaySupplierDetails(sid:number){
    console.log("Supplier Id  clicked: "+sid)
    this.router.navigate(['./singlesupplier/'+sid])
  }
  deleteSupplier(sid:number){
    const res=this.supplierArr.filter(obj=>obj._id !==sid);
    this.supplierService.deleteSupplier(sid).subscribe(data=>{
      console.log('deleted');
    })
    console.log(res)
    alert("Supplier with Id "+sid+" deleted Successfully!!..")
    location.reload()
  }
  
}
