import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() item:  {
      id: number,
      name: string,
      description: string,
      brand: string,
      gender: string,
      category: string,
      size: number[],
      color: string[],
      price: number,
      discountPrice?: number,
      is_in_inventory: boolean,
      items_left: number,
      imageURL: string,
      slug: string,
    }
   
}
