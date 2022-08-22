import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.scss']
})
export class DeleteSupplierComponent implements OnInit {
   supplierArr:Supplier[]=[];
   constructor(private router:Router,private supplierService:SupplierService) {
    this.supplierService.getsupplier().subscribe(data=>{
      this.supplierArr=data;
    });
   }

  ngOnInit(): void {
  }
 /* displaySupplierDetails(sid:number){
    console.log("Supplier Id  clicked: "+sid)
    this.router.navigate(['./singlesupplier/'+sid])
  }*/
  deleteSupplier(sid:number){
    console.log(sid);
    this.supplierService.deleteSupplier(sid).subscribe(data=>{
      alert("user delete successfully");
      location.reload();
    })
  }

}
