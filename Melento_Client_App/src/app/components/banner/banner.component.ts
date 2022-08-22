import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { max, Observable } from 'rxjs';
import { MustMatch } from 'src/app/helpers/mustmatchvalidators';
import { Cart } from 'src/app/models/cart';
import { users } from 'src/app/models/users';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserService } from 'src/app/services/user/user.service';
//import {RegisterDataService} from 'services/registerdataservice';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  user: users = new users(0, 0, '', '', '', '', '', '');
  cart:Cart=new Cart(0,0,"","",[],0);
  display:string=""
  userArr: users[] = [];
  submitted = false;
  submittedLogin = false;
  loggedIn=false;
  displayLogOut:string=''
  displayLogIn:string=''
  RegisterformLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  Registerform = new FormGroup({
    username: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    emailid: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
    profession: new FormControl(''),
    phonenumber: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    pin: new FormControl(''),
  });
  gen:string=''
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cartService:CartService,
    private router:Router
  ) {
    if (localStorage.getItem('logged')=='true')
      this.loggedIn=true

    this.Registerform = this.formBuilder.group(
      {
        username: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        dob: ['', Validators.required],
        gender: ['', Validators.required],
        mobno: ['', Validators.required],
        emailid: ['', Validators.required],
        password: ['', Validators.required],
        repassword: ['', Validators.required],
        profession: ['', Validators.required],
        phonenumber: ['', Validators.required],
        address1: ['', Validators.required],
        address2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        pin: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'repassword'),
      }
    );
    this.RegisterformLogin = this.formBuilder.group({
      usernameLogin: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.userService.getUsers().subscribe((data) => {
      this.userArr = data;
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('role')=="admin" || localStorage.getItem('role')=="Admin"){
      this.display="block"
    }
    else{
      this.display="none"
    }
    if (localStorage.getItem('logged')=='true'){
      this.loggedIn=true
      this.displayLogIn='none'
      this.displayLogOut='block'
    }
    else {
      this.loggedIn=false
      this.displayLogOut='none'
      this.displayLogIn='block'
    }
  }
  get f1() {
    return this.RegisterformLogin.controls;
  }
  get f() {
    return this.Registerform.controls;
  }
  SelectGenderChange(evt:any){
    this.gen=evt.target.value
    console.log(this.gen);
    
  }
  handleLogIn(){
    localStorage.setItem('logged','false')
    localStorage.setItem("role",'viewer')
    localStorage.setItem("user_email",'')
    if (localStorage.getItem('logged')=='true'){
      this.loggedIn=true
      this.displayLogIn='none'
      this.displayLogOut='block'
    }
    else {
      this.loggedIn=false
      this.displayLogOut='none'
      this.displayLogIn='block'
      localStorage.setItem('logged','false')
    }
    this.router.navigate(['/'])
    location.reload()
  }
  onSubmitLogin() {
    console.log('inside');
    this.submittedLogin = true;
    Object.keys(this.RegisterformLogin.controls).forEach((key) => {
      console.log(key);
      if (this.Registerform.get(key)?.errors != null) {
        console.log(this.Registerform.get(key)?.errors);
      }
    });
    let email = this.RegisterformLogin.value.usernameLogin;
    console.log(email);
    let pass = this.RegisterformLogin.value.password;
    console.log(pass);
    this.userArr.forEach(u=>{
      console.log(u.email);
      console.log(u.password);
      if (u.email==email && u.password==pass){
        localStorage.setItem("role",u.role)
        localStorage.setItem("logged",'true')
        console.log(localStorage.getItem("role"));
        this.loggedIn=true
        alert("Welcome "+ u.name)      
        location.reload()
      }
      if (u.email==email && u.password!=pass){
        
        alert("Wrong Password")      
      }
    })
    if(localStorage.getItem('role')=="admin" || localStorage.getItem('role')=="Admin"){
      this.display="block"
    }
    else{
      this.display="none"
    }
    // if (this.loggedIn==true)
    //   this.display='block'
    // else
    //   this.display='none'
    localStorage.setItem('user_email',email)
    
  }


  onSubmit() {
    this.submitted = true;
    Object.keys(this.Registerform.controls).forEach((key) => {
      console.log(key);
      if (this.Registerform.get(key)?.errors != null) {
        console.log(this.Registerform.get(key)?.errors);
      }
    });
    console.log('heree');
    // if (this.Registerform.invalid) {
    //   return;
    // }
    console.log('Added');

    var userId = 0,
      maxId = 0;
    this.userArr.forEach((u) => {
      if (u._id > maxId) maxId = u._id;
    });
    console.log(maxId);
    let fn = this.Registerform.value.firstname;
    let ln = this.Registerform.value.lastname;
    let d = this.Registerform.value.dob;
    let g = this.Registerform.value.gender;
    let rem = this.Registerform.value.emailid;
    let psw = this.Registerform.value.password;
    let rpsw = this.Registerform.value.confirmassword;
    let pno = this.Registerform.value.phonenumber;
    let add1 = this.Registerform.value.address1;
    let add2 = this.Registerform.value.address2;
    let c = this.Registerform.value.city;
    let co = this.Registerform.value.country;
    let s = this.Registerform.value.state;
    this.user = new users(
      maxId + 1,
      d,
      fn + ' ' + ln,
      rem,
      this.gen,
      add1 + ',' + add2 + ',' + c + ',' + co + ',' + s,
      psw,
      'User'
    );
    this.cart=new Cart(maxId + 1,maxId + 1,fn + ' ' + ln,rem,[],0)
    console.log(this.cart);
    this.userService.addUsers(this.user,this.cart).subscribe((data) => {
      console.log(data);
      console.log('userAdded'); 
      location.reload()
    });    
    
  }
}
