import { Component } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public animalData: Array<any>;
  public currentAnimal: any;

  constructor (private animalService: AnimalService) {
    animalService.get().subscribe((data: any) => this.animalData = data);
  }
}
