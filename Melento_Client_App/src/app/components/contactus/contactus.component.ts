import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  submitted=false;
  contactForm=new FormGroup({
    email:new FormControl(''),
    name:new FormControl(''),
    text:new FormControl(''),
  });

  constructor(private formBuilder:FormBuilder) { 
    this.contactForm=this.formBuilder.group({
      email:['',Validators.required],
      name:['',Validators.required],
      text:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
get f() {return this.contactForm.controls;}
onSubmit(){
  this.submitted=true;
  Object.keys(this.contactForm.controls).forEach(key=>{
    console.log(key)
    if(this.contactForm.get(key)?.errors!=null){
      console.log(this.contactForm.get(key)?.errors);
    }
  });
  if(this.contactForm.invalid){
    return;
  }
  alert("Message has been sent....")
  location.reload()
}
}





