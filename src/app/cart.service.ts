import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  changed = new EventEmitter();

  constructor() { }

  addToCart(product: Product){
    this.items.push(product);
    this.changed.emit();
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    this.changed.emit();
    return this.items;
  }
}
