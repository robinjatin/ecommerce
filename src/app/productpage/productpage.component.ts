import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../ProductService.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  constructor(private productService: ProductServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  productName:String = "";
  productPrice:String = "";
  productDescription:String = "";
  productImage:String = "";

  addProduct = () => {
    if(this.productName == "" || this.productPrice == ""){
      alert("Product Name or Price is empty");
    }
    else{
    var product = {
      name: this.productName,
      price: this.productPrice,
      description: this.productDescription,
      image: this.productImage
    }
    this.productService.addProduct(product).subscribe(data => {
      this.router.navigate(["/"]);
    });
  }
}
}
