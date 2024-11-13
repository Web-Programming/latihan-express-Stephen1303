import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component'; //import housingloactioncomponent
import { HousingLocation } from '../housing-location'; //import housingloaction

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent], //tambahkan supaya housingLocation bisa di panggil di dalam homeComponent
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name : "Citra Grand City",
      city: "Palembang",
      state: "Sumatera Selatan",
      photo: "https://citragrandcity.co.id/wp-content/uploads/2022/07/Cover-1.webp",
      availableUnit: 12,
      wifi: true,
      laundry: true
    },
    {
        id: 1,
        name : "Citra Grand City",
        city: "Palembang",
        state: "Sumatera Selatan",
        photo: "https://citragrandcity.co.id/wp-content/uploads/2021/10/Lingkungan-Tempat-Tinggal-1024x725.webp",
        availableUnit: 12,
        wifi: true,
        laundry: true
    }
  ]
}
