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

  editProduct(product:Product){
    this.newProduct.id = product.id;
    this.newProduct.product_name=product.product_name;
    this.newProduct.price=product.price;
  }
  
  updateProduct(){
    const index = this.products.findIndex(p => p.id === this.newProduct.id);
    if (index !== -1){
      this.products[index].product_name = this.newProduct.product_name;
      this.products[index].price=this.newProduct.price;
    }
    this.newProduct.product_name= '';
    this.newProduct.price= null;
  }
  
  deleteProduct(productId:number){
    this.products = this.products.filter(product => product.id !== productId);
  }
}
