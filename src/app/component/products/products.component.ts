import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList:any ;
  constructor(private apiService:ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe( res =>{
      this.productList = res;
      this.productList.forEach((item:any) => {
           Object.assign(item,{quantity: 1, total: item.price});
      });
    });
  }

  addToCart(item:any){
     this.cartService.addToCart(item);
  }

}
