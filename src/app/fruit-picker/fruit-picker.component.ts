import { Component, OnInit } from '@angular/core';
import { Service, FruitItem } from '../service.service';

@Component({
  selector: 'app-fruit-picker',
  templateUrl: './fruit-picker.component.html',
  styleUrls: ['./fruit-picker.component.css'],
})
export class FruitPickerComponent implements OnInit {
  AllFruits: FruitItem[] = [];
  constructor(private service: Service) {}

  ngOnInit() {
    this.AllFruits = this.service.Fruits;
  }

  getFruits() {
    console.log(this.AllFruits);
  }

  fetchSelectedItems() {
    this.service.fetchSelectedItems();
  }
}
