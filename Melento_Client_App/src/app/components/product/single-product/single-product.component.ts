import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  product_id:number=0
  product :Product=new Product(0,"","","","","",0.0,0,0,"")
  constructor(private activatedRoute:ActivatedRoute,private ProductService:ProductService) {
   
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) =>{
      let id_passed=params['id'];
      
      console.log(id_passed);
      this.product_id=id_passed
    
      
      this.ProductService.getProductById(this.product_id).subscribe(data=>{
       this.product =data;
       console.log(this.product);
      })
      
    }
    )
    
  }
  
  

}
