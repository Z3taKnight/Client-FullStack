import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Manufacturers } from 'src/app/models/manufacturers';
import { ManufacturerService } from 'src/app/services/manufacturer/manufacturer.service';

@Component({
  selector: 'app-update-manufacturer',
  templateUrl: './update-manufacturer.component.html',
  styleUrls: ['./update-manufacturer.component.scss']
})
export class UpdateManufacturerComponent implements OnInit {
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
  idUpdated!: number;

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
  onChangeType(evt: any, evtvalue: any){
    console.log(evt.target.value);
    var idObtained=evt.target.value;
    this.idUpdated=parseInt(idObtained.split(':')[1].trim());
    for(var i=0;i<this.manufacturersArr.length;i++){
      if(this.idUpdated==this.manufacturersArr[i]._id){
        this.manufacturers=this.manufacturersArr[i];
      }
    }
    this.manufacturerForm.get('id')?.setValue(this.manufacturers._id)
    this.manufacturerForm.get('mName')?.setValue(this.manufacturers.mName)
    this.manufacturerForm.get('loc')?.setValue(this.manufacturers.loc)
    this.manufacturerForm.get('phn')?.setValue(this.manufacturers.phn)
    this.manufacturerForm.get('pointOfContact')?.setValue(this.manufacturers.pointOfContact)
    this.manufacturerForm.get('email')?.setValue(this.manufacturers.email)
  }
  get f() { return this.manufacturerForm.controls; }

  onSubmit(){
    this.submitted=true;
    Object.keys(this.manufacturerForm.controls).forEach(key=>{
      
      if(this.manufacturerForm.get(key)?.errors!=null){
        console.log(this.manufacturerForm.get(key)?.errors);
      }
    });
    if(this.manufacturerForm.invalid){
      return;
    }
    var tempId=0;
    
    tempId=this.manufacturerForm.value.id;
    

    console.log(tempId)
    let mN=this.manufacturerForm.value.mName;
    let mL=this.manufacturerForm.value.loc;
    let mP=this.manufacturerForm.value.phn;
    let pC=this.manufacturerForm.value.pointOfContact;
    let mE=this.manufacturerForm.value.email;
    this.manufacturers=new Manufacturers(tempId,mN,mL,mP,pC,mE)
    console.log(this.manufacturers)
    // this.manufacturerService.updateManufacturer(this.manufacturers);
    this.manufacturerService.updateManufacturer(this.manufacturers).subscribe(data =>{
      console.log(data);
     });
    alert("Updated  Successfully!!")
    location.reload()
  }

}
