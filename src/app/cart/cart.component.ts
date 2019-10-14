import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
      this.items = this.cartService.returnItems();
      this.checkoutForm = formBuilder.group(
        {
          name:'',
          address:'',
        }
      );
    }

  ngOnInit() {
    
  }

  onSubmit(customData){
    console.warn("The form has been submitted", customData);
    window.alert("The form has been submitted\n"+customData.name+"\n"+customData.address);
    this.cartService.clearItems();
    this.checkoutForm.reset();
  }

}