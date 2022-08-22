import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { users } from 'src/app/models/users';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  user: users = new users(0, 0, '', '', '', '', '', '');
  userArr: users[] = [];
  submitted = false;
  userForm = new FormGroup({
    uAge: new FormControl(0),
    uName: new FormControl(''),
    uEmail: new FormControl(''),
    uGender: new FormControl(''),
    uAdd: new FormControl(''),
    uPass: new FormControl(''),
    uRole: new FormControl(''),
  });
  idUpdated: number;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cartService: CartService
  ) {
    console.log('inside con');
    this.userService.getUsers().subscribe((data) => {
      this.userArr = data;
      console.log(this.userArr);
      
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
    this.idUpdated = 0;
  }
  get f() {
    return this.userForm.controls;
  }
  onChangeType(evt: any, evtvalue: any) {
    console.log(evt.target.value);
    var idObtained = evt.target.value;
    this.idUpdated = parseInt(idObtained.split(':')[1].trim());
    console.log(this.idUpdated);

    for (var i = 0; i < this.userArr.length; i++)
      if (this.idUpdated == this.userArr[i]._id) this.user = this.userArr[i];
    this.userForm.get('uName')?.setValue(this.user.name);
    this.userForm.get('uAge')?.setValue(this.user.age);
    this.userForm.get('uGender')?.setValue(this.user.gender);
    this.userForm.get('uEmail')?.setValue(this.user.email);
    this.userForm.get('uAdd')?.setValue(this.user.address);
    this.userForm.get('uPass')?.setValue(this.user.password);
    this.userForm.get('uRole')?.setValue(this.user.role);
  }
  ngOnInit(): void {}
  onSubmit() {
    this.submitted = true;
    Object.keys(this.userForm.controls).forEach((key) => {
      console.log(key);
      if (this.userForm.get(key)?.errors == null) {
        console.log(this.userForm.get(key)?.errors);
      }
    });
    if (this.userForm.invalid) return;
    let uN = this.userForm.value.uName;
    let uE = this.userForm.value.uEmail;
    let uA = this.userForm.value.uAge;
    let uGender = this.userForm.value.uGender;
    let uAd = this.userForm.value.uAdd;
    let uP = this.userForm.value.uPass;
    let uR = this.userForm.value.uRole;
    this.user = new users(this.idUpdated, uA, uN, uE, uGender, uAd, uP, uR);
    this.userService.deleteUser(this.user).subscribe((data) => {
      console.log(data);
      this.cartService.deleteCart(this.user).subscribe((data) => {
        alert('User Deleted');
        location.reload();
      });
    });
    location.reload();
  }
}
