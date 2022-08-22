import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  id:number=0
  user:users=new users(0,0,"","","","","","")
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) { }
  
  ngOnInit(): void {
    //.log("input value passed :"+this.supp_id)
    this.activatedRoute.params.subscribe((params:Params)=>{
      // let id_passed=params['id'];
      this.userService.getUserById(params['id']).subscribe(data =>{
        this.user=data;
        console.log(this.user);
       });
    })
  }
  
  }
  