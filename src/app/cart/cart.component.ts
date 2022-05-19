import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  items = this.cartService.getItems();
  checkOutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    window.alert('Your order has been submitted');
    this.checkOutForm.reset();
  }
}
