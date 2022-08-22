import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manufacturers } from 'src/app/models/manufacturers';
import { ManufacturerService } from 'src/app/services/manufacturer/manufacturer.service';

@Component({
  selector: 'app-view-manufacturer',
  templateUrl: './view-manufacturer.component.html',
  styleUrls: ['./view-manufacturer.component.scss']
})
export class ViewManufacturerComponent implements OnInit {
  manufacturersArr:Manufacturers[]=[];
  display=''
  constructor(private router:Router,private manufacturerService:ManufacturerService) {
    this.manufacturerService.getManufacturers().subscribe(data=>{
      this.manufacturersArr=data;
      console.log(this.manufacturersArr);
      
    });
   }
 
  ngOnInit(): void {
  }
  displayManufacturerDetails(pid:number){
    console.log("Manufacturer Id: "+pid)
    this.router.navigate(['/singlemanufacturer/'+pid])
  }
  
  deleteManufacturer(m:Manufacturers){
    this.manufacturerService.deleteManufacturer(m).subscribe(data=>{
      console.log(data);
      location.reload()
    })
    alert("Manufacturer deleted Successfully!!..")
  }
}
