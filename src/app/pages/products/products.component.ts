import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [ CommonModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products = [
    {
      name: 'Raha Premium - Kavagara Grade 1 Sifted And Fortified Maize Meal',
      description: 'High-quality maize flour for all your cooking needs.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/raha-ugali.png',
    },
    {
      name: 'Raha Premium Fortified Multipurpose Home Baking Flour',
      description: 'Perfect for baking and specialty recipes.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/raha-ngano.png',
    },
    
    {
      name: 'Joymax Mwivoko - Grade 1 Sifted And Fortified Maize Meal',
      description: 'High-quality maize flour for all your cooking needs.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/raha-mavoko.png',
    },
    {
      name: 'Raha Premium - Bakers Flour Available In 25 & 50kgs',
      description: 'Perfect for baking and specialty recipes.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/flour1.png',
    },
    {
      name: 'Raha Premium Fortified Multipurpose Whole Meal Flour (Atta Mark 1)',
      description: 'Perfect for baking and specialty recipes.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/flour2.png',
    },
    {
      name: 'Raha Premium Fortified Multipurpose Home Baking Flour - 50kgs',
      description: 'Perfect for baking and specialty recipes.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/flour3.png',
    },
    {
      name: 'Joymax Chick Mash',
      description: 'perfect for chickens and poultry.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/chick-mash.png',
    },
    {
      name: 'Joymax Growers Mash',
      description: 'perfect for growers',
      image: 'https://joymillerslimited.co.ke/final/img/shop/growers-mash.png',
    },
    {
      name: 'Joymax Sow & Weaner Meal',
      description: 'Perfect for weaners and sows.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/joymax.png',
    },
    {
      name: 'Joymax Dairy Meal',
      description: 'Perfect for dairy cows and milk production.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/dairy.png',
    },
    {
      name: 'Joymax High yield',
      description: 'Perfect for high yield and production.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/yield.png',
    },
    {
      name: 'Joymax Kienyeji Mash',
      description: 'Perfect for kienyeji chickens and poultry.',
      image: 'https://joymillerslimited.co.ke/final/img/shop/kienyeji.png',
    },
  ];
}
