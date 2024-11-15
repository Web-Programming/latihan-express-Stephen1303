import { Component, Input, inject } from '@angular/core';  //input -> class
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router'; //RouterModule dari app.routes.ts di import

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}"> 
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{ housingLocation.state }}</p>
      <a [routerLink]="['details', housingLocation.id]">Show More</a>
    </section>
  `, //[src] -> untuk mengambil gambar dari berbagai lokasi
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation! : HousingLocation //! -> null safety
}
