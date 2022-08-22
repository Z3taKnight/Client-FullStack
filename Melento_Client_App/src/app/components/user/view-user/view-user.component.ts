import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userArr:users[]=[]
  constructor(private router:Router,private userService:UserService) {
    this.userService.getUsers().subscribe(data=>{
      this.userArr=data
    })
   }
   details(u:users){
     let id=u._id
     console.log(id);
    this.router.navigate(['/singleuser/'+id])
   }
  deleteUser(u:users){
    console.log("inside");
    this.userService.deleteUser(u).subscribe(data=>{
      alert(u.name+" deleted")
      location.reload()
    })
    // location.reload()
  }
  ngOnInit(): void {
  }
  
}