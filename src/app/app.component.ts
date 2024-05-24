import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practice';
  name="Precious Ngobe";
  product={
    name: 'IPhone X',
    price: 13500,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: './images/iphonex.png'
  }
  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount/100)
  }
}

