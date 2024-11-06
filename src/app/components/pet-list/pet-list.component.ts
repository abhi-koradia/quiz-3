import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HeaderComponent } from '../header/header.component';
import { ForDirective } from '../../directives/for.directive';

interface Pet {
  id: number;
  name: string;
  type: string;
  color: string;
}

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ForDirective], // Add CommonModule here
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent {
  pets: Pet[] = [
    { id: 1, name: 'doggy', type: 'type a', color: 'green' },
    { id: 2, name: 'Trex', type: 'type b', color: 'purple' },
    { id: 3, name: 'fish', type: 'type c', color: 'red' }
  ];

  getTotalPets() {
    return this.pets.length;
  }

  deletePet(id: number) {
    this.pets = this.pets.filter(pet => pet.id !== id);
  }

  getColorStyle(color: string): string {
    switch (color.toLowerCase()) {
      case 'red':
        return 'red';
      case 'green':
        return 'green';
      case 'purple':
        return 'purple';
      default:
        return 'black'; // Default color if not matched
    }
  }
}
