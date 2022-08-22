import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Manufacturers } from 'src/app/models/manufacturers';
import { ManufacturerService } from 'src/app/services/manufacturer/manufacturer.service';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.scss']
})
export class AddManufacturerComponent implements OnInit {
  manufacturers:Manufacturers=new Manufacturers(0,"","",0,"","")
  manufacturersArr:Manufacturers[]=[]
  submitted=false;

  manufacturerForm=new FormGroup({
    id:new FormControl('0'),
    mName:new FormControl(''),
    loc:new FormControl(''),
    phn:new FormControl('0'),
    pointOfContact:new FormControl(''),
    email:new FormControl('')
  });

  constructor(private formBuilder: FormBuilder,private manufacturerService:ManufacturerService) {
    this.manufacturerService.getManufacturers().subscribe(data=>{
      this.manufacturersArr=data;
    })
    this.manufacturerForm=this.formBuilder.group({
      id:[0,Validators.required],
      mName:['',Validators.required],
      loc:['',Validators.required],
      phn:['0',Validators.required],
      pointOfContact:['',Validators.required],
      email:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  get f() { return this.manufacturerForm.controls; }
  
  onSubmit(){
    this.submitted=true;
    Object.keys(this.manufacturerForm.controls).forEach(key=>{
      console.log(key)
      if(this.manufacturerForm.get(key)?.errors!=null){
        console.log(this.manufacturerForm.get(key)?.errors);
      }
    });
    if(this.manufacturerForm.invalid){
      return;
    }
    var tempId=0;
    var maxId=0;
    this.manufacturersArr.forEach(p=>{
      if(maxId<p._id){
        maxId=p._id;
      }
    })
    tempId=maxId;
    tempId=tempId+1;
    console.log(tempId)
    let i=this.manufacturerForm.value.id;
    let mN=this.manufacturerForm.value.mName;
    let mL=this.manufacturerForm.value.loc;
    let mP=this.manufacturerForm.value.phn;
    let pC=this.manufacturerForm.value.pointOfContact;
    let mE=this.manufacturerForm.value.email;
    this.manufacturers=new Manufacturers(tempId,mN,mL,mP,pC,mE)
    this.manufacturerService.addManufacturer(this.manufacturers).subscribe(data =>{
      console.log(data);
      location.reload();
     });
    //alert("Manufacturer Added Successfully!!")
    location.reload()
  }

}
