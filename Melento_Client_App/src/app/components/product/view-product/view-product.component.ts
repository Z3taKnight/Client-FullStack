import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  flag: number = 1;
  productArr: Product[] = [];
  product: Product = new Product(0, '', '', '', '', '', 0.0, 0, 0, '');
  cart: Cart = new Cart(0, 0, '', '', [], 0);
  cartArr: Cart[] = [];
  email: any = localStorage.getItem('user_email');
  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {
    productService.getProducts().subscribe((data) => {
      this.productArr = data;
      console.log(this.productArr);
    });
  }
  addToCart(id: number) {
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
    if (this.email==''){
      alert('LogIn to add')
      location.reload()
    }
    this.cartService.getCart().subscribe((data) => {
      this.cartArr = data;
      for (var i = 0; i < this.cartArr.length; i++) {
        if (this.cartArr[i].uemail == this.email) {
          this.cartService.getCartbyId(this.cartArr[i]._id).subscribe((data) => {
            this.cart = data;
            for (var j = 0; j < this.cart.products.length; j++) {
              if (this.cart.products[j]._id == id) {
                alert('Product already in the Wish List');
                this.flag = 0;
                location.reload();
              }
            }
            //console.log(this.cart)
            if (this.flag == 1) {
              this.productService.getProductById(id).subscribe((g) => {
                this.cart.amount = this.cart.amount + g.price;
                console.log(g.price);
                this.cart.products.push(this.product);
                console.log(this.cart.amount);
                this.cartService.updateCart(this.cart).subscribe((f) => {
                  //console.log(f);
                });
                alert('Product Added')
              });
            }
          });
        }
      }
    });
  }
  ngOnInit(): void {}
}
