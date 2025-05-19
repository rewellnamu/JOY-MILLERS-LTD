import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products = [
    {
      name: 'Raha Premium - Kavagara Grade 1 Sifted And Fortified Maize Meal',
      description: 'High-quality maize flour for all your cooking needs.',
      image: '',
    },
    {
      name: 'Raha Premium Fortified Multipurpose Home Baking Flour',
      description: 'Perfect for baking and specialty recipes.',
      image: '',
    },
    
    {
      name: 'Joymax Mwivoko - Grade 1 Sifted And Fortified Maize Meal',
      description: 'High-quality maize flour for all your cooking needs.',
      image: '',
    },
    {
      name: 'Raha Premium - Bakers Flour Available In 25 & 50kgs',
      description: 'Perfect for baking and specialty recipes.',
      image: '',
    },
    {
      name: 'Raha Premium Fortified Multipurpose Whole Meal Flour (Atta Mark 1)',
      description: 'Perfect for baking and specialty recipes.',
      image: '',
    },
    {
      name: 'Raha Premium Fortified Multipurpose Home Baking Flour - 50kgs',
      description: 'Perfect for baking and specialty recipes.',
      image: '',
    },
    {
      name: 'Joymax Chick Mash',
      description: 'perfect for chickens and poultry.',
      image: '',
    },
    {
      name: 'Joymax Growers Mash',
      description: 'perfect for growers',
      image: '',
    },
    {
      name: 'Joymax Sow & Weaner Meal',
      description: 'Perfect for weaners and sows.',
      image: '',
    },
    {
      name: 'Joymax Dairy Meal',
      description: 'Perfect for dairy cows and milk production.',
      image: '',
    },
    {
      name: 'Joymax High yield',
      description: 'Perfect for high yield and production.',
      image: '',
    },
    {
      name: 'Joymax Kienyeji Mash',
      description: 'Perfect for kienyeji chickens and poultry.',
      image: '',
    },
  ];
}
