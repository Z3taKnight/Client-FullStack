import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  productArr: Product[] = [];
  constructor(private productService: ProductService) {
    productService.getProducts().subscribe((data) => {
      this.productArr = data;
      console.log(this.productArr);
    });
  }

  ngOnInit(): void {}
  deleteproduct(p: Product) {
    this.productService.deleteProduct(p).subscribe((data) => {
      console.log(data);
      alert('Product Deleted');
      location.reload();
    });
    location.reload();
  }
}
