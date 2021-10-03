import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-animal',
  templateUrl: './grid-animal.component.html',
  styleUrls: ['./grid-animal.component.css']
})
export class GridAnimalComponent implements OnInit {

  @Input() animalData: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
