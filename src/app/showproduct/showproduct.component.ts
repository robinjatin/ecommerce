import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../ProductService.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit, AfterViewChecked {
  products:any = [];
  productUniqueId:String = "";
  productRemoveFlag:boolean = false;
  defaultImage: String = "data:image/jpeg;base64,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"

  constructor(private productService: ProductServiceService, private router:ActivatedRoute, private route:Router) { 
    this.productUniqueId = window.atob(this.router.snapshot.queryParamMap.get('AXIVCQ') || '');
  }

  ngOnInit(): void {
    this.getProduct(this.productUniqueId);
  }
  public ngAfterViewChecked(): void {
    if(this.productRemoveFlag){
      this.route.navigate(["/"]);
    }
} 
  getProduct = (productUniqueId: any) => {
    this.productService.getProductByUniqueId(productUniqueId).subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }
  removeProduct = (product:any) => {
    this.productService.removeProduct(product).subscribe(data => {
      console.log(data);
      this.productRemoveFlag = true;
    });
  }
  addToCart = (product:any) => {
    this.productService.addToCart(product).subscribe(data => {
      console.log(data);
    });
  }
}
