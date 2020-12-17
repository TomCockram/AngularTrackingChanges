import { Injectable, OnInit } from '@angular/core';

export interface FruitItem {
  id: string;
  isSelected: boolean;
  label: string;
}

@Injectable({ providedIn: 'root' })
export class Service implements OnInit {
  constructor() {}
  selectedFruits: FruitItem[] = [];
  Fruits: FruitItem[] = [
    {
      id: 'Fruit_orange',
      label: 'Orange',
      isSelected: false,
    },
    {
      id: 'Fruit_Apple',
      label: 'Apple',
      isSelected: false,
    },
    {
      id: 'Fruit_Melon',
      label: 'Melon',
      isSelected: false,
    },
  ];

  fetchSelectedItems() {
    this.selectedFruits = this.Fruits.filter((value) => {
      return value.isSelected;
    });
  }

  ngOnInit() {}
}
