import { Component } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  products:Product[] = [
    {id: 1, product_name: "Jeno PC", price: 250},
    {id: 2, product_name: "Jaemin Album", price: 450},
  ];

  newProduct: Product = {id: null, product_name: '', price: null};

  addProduct() {
    const newId = this.products.length + 1;
    const newProduct: Product = {id: newId, product_name:this.newProduct.product_name, price:this.newProduct.price};

    this.products.push(newProduct);
  
    this.newProduct.product_name= '';
    this.newProduct.price= null;
  }
}
