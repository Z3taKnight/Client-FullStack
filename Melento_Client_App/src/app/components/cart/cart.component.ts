import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  flag:Boolean=false
  cartArr:Cart[]=[];
  cart:Cart=new Cart(0,0,"","",[],0);
  num:any
  singlecart:Cart=new Cart(0,0,"","",[],0);
  prod:Product=new Product(0,"","","","","",0,0,0,"");
  email: any=localStorage.getItem('user_email') //login in banner
  constructor(private activateRoute:ActivatedRoute , private cartService:CartService, private productService: ProductService,private router:Router) {
    console.log('inside');
    console.log(this.email);
    if (this.email==''){
      alert('Please Log In')
      this.router.navigate(['/'])
      return
    }
    this.cartService.getCart().subscribe(data=>{
      this.cartArr=data;
      console.log(data);
      for(var i=0;i<this.cartArr.length;i++){
        if(this.cartArr[i].uemail == this.email){
          this.cartService.getCartbyId(this.cartArr[i]._id).subscribe(fund=>{
            this.singlecart=fund
            console.log(this.singlecart.products)
          })
        }
      }
    })
   }
   deleteProduct(c:Cart,i:number){
     this.flag=false
     this.cartService.getCartbyId(c._id).subscribe(data=>{
      this.cart=data
      this.productService.getProductById(i).subscribe( f=>{
        this.cart.amount=this.cart.amount-f.price
        console.log(this.cart.amount)
      this.cart.products=this.cart.products.filter(item => item._id !== i)
      console.log(this.cart)
      this.cartService.updateCart(this.cart).subscribe(data=>{
        console.log(data);
      })
      alert("Product removed")
        location.reload()
      })
     })      
     
   }
  ngOnInit(): void {}

}
