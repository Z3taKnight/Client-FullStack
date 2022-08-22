import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { max } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  user: users = new users(0, 0, '', '', '', '', '', '');
  userArr: users[] = [];
  submitted = false;
  cart:Cart=new Cart(0,0,"","",[],0);
  userForm = new FormGroup({
    uAge: new FormControl(0),
    uName: new FormControl(''),
    uEmail: new FormControl(''),
    uGender: new FormControl(''),
    uAdd: new FormControl(''),
    uPass: new FormControl(''),
    uRole: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userService.getUsers().subscribe((data) => {
      this.userArr = data;
    });
    this.userForm = this.formBuilder.group({
      uName: ['', Validators.required],
      uEmail: ['', Validators.required],
      uAge: ['', Validators.required],
      uGender: ['', Validators.required],
      uAdd: ['', Validators.required],
      uPass: ['', Validators.required],
      uRole: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  get f() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    Object.keys(this.userForm.controls).forEach((key) => {
      console.log(key);
      if (this.userForm.get(key)?.errors == null) {
        console.log(this.userForm.get(key)?.errors);
      }
    });
    if (this.userForm.invalid) return;
    var userId = 0,
      maxId = 0;
    this.userArr.forEach((u) => {
      if (u._id > maxId) maxId = u._id;
    });
    var tempId = maxId + 1;
    let uN = this.userForm.value.uName;
    let uE = this.userForm.value.uEmail;
    let uA = this.userForm.value.uAge;
    let uGender = this.userForm.value.uGender;
    let uAd = this.userForm.value.uAdd;
    let uP = this.userForm.value.uPass;
    let uR = this.userForm.value.uRole;
    this.user = new users(tempId, uA, uN, uE, uGender, uAd, uP, uR);
    this.cart=new Cart(tempId,tempId,uN,uE,[],0)
    console.log(this.cart);
    this.userService.addUsers(this.user,this.cart).subscribe((data) => {
      console.log(data);
      location.reload();
    });
    alert("User Added with ID: "+tempId);
    location.reload();
  }
}
