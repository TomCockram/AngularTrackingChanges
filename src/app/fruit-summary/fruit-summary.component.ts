import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service.service';

@Component({
  selector: 'app-fruit-summary',
  templateUrl: './fruit-summary.component.html',
  styleUrls: ['./fruit-summary.component.css'],
})
export class FruitSummaryComponent implements OnInit {
  constructor(public service: Service) {}

  ngOnInit(): void {}
}
