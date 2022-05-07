import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:8082/getProducts");
  }
  getProductByName(productName:String){
    return this.http.get("http://localhost:8082/getProductByName/"+productName);
  }
  getProductByUniqueId(productUniqueId: any){
    return this.http.get("http://localhost:8082/getProductByUniqueId/"+productUniqueId);
  }
  addProduct(product:any) {
    return this.http.post("http://localhost:8082/addProduct", product);
  }
  removeProduct(product:any) {
    return this.http.delete("http://localhost:8082/removeProduct/"+product._id);
  }
  addToCart(product:any) {
    return this.http.post("http://localhost:8082/addToCart", product);
  }
  removeFromCart(id:any) {
    return this.http.delete("http://localhost:8082/removeFromCart/" + id);
  }
  getCart() {
    return this.http.get("http://localhost:8082/getCart");
  }
  clearCart() {
    return this.http.delete("http://localhost:8082/clearCart");
  }
}
