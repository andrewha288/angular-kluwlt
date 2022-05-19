import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  changed = new EventEmitter();

  constructor(private http: HttpClient) { }

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

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
