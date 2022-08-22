import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manufacturers } from 'src/app/models/manufacturers';
import { ManufacturerService } from 'src/app/services/manufacturer/manufacturer.service';

@Component({
  selector: 'app-delete-manufacturer',
  templateUrl: './delete-manufacturer.component.html',
  styleUrls: ['./delete-manufacturer.component.scss']
})
export class DeleteManufacturerComponent implements OnInit {
  manuArr:Manufacturers[]=[];
  constructor(private router:Router,private manufactureService:ManufacturerService) {
   this.manufactureService.getManufacturers().subscribe(data=>{
     this.manuArr=data;
   });
  }
 ngOnInit(): void {
 }
 deleteSupplier(m:Manufacturers){
   this.manufactureService.deleteManufacturer(m).subscribe(data=>{
     alert("Manufacturer delete successfully");
     
   })
   location.reload();
 }

}
