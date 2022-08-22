import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Manufacturers } from 'src/app/models/manufacturers';
import { ManufacturerService } from 'src/app/services/manufacturer/manufacturer.service';

@Component({
  selector: 'app-single-manufacturer',
  templateUrl: './single-manufacturer.component.html',
  styleUrls: ['./single-manufacturer.component.scss']
})
export class SingleManufacturerComponent implements OnInit {
manufacturer_id:number=0
manufacturers:Manufacturers=new Manufacturers(0,"","",0,"","")
  // manufacturersArr: Manufacturers[] = [];
  constructor(private activatedRoute:ActivatedRoute,private manufacturerService:ManufacturerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      let id_passed=params['id'];
      console.log(id_passed);
      this.manufacturer_id=id_passed
      // this.manufacturers=this.manufacturerService.getManufacturerById(this.manufacturer_id);
      this.manufacturerService.getManufacturerById(this.manufacturer_id).subscribe(data=>{
        this.manufacturers=data;
        console.log(this.manufacturers)
      })
    })
  }

}
