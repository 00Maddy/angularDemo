import { Component } from '@angular/core';

@Component({
  selector: 'demo-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  productlist = [
    {
      name: 'iPhone X',
      price: 600,
      color: 'Black',
      discount: 8.5,
      inStock: 0,
      deviceType: 'iPhone',
    },
    {
      name: 'iPhone SE',
      price: 15000,
      color: 'green',
      discount: 8.5,
      inStock: 10,
      deviceType: 'iPhone',
    },
    {
      name: 'iPhone 11',
      price: 800,
      color: 'grey',
      discount: 8.5,
      inStock: 10,
      deviceType: 'iPhone',
    },
    {
      name: 'iPhone 12',
      price: 1200,
      color: 'Black',
      discount: 8.5,
      inStock: 0,
      deviceType: 'iPhone',
    },
    {
      name: 'iPhone 12 PRO',
      price: 1000,
      color: 'Black',
      discount: 8.5,
      inStock: 10,
      deviceType: 'iPhone',
    },
    {
      name: 'Apple Airpords',
      price: 200,
      color: 'white',
      discount: 50,
      inStock: 10,
      deviceType: 'Airpods',
    },
  ];
}
