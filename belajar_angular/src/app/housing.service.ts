import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
    {
      id: 1,
      name : "Citra Grand City",
      city: "Palembang",
      state: "Sumatera Selatan",
      photo: "https://citragrandcity.co.id/wp-content/uploads/2022/07/Cover-1.webp",
      availableUnit: 12,
      wifi: true,
      laundry: true
    },
    {
        id: 2,
        name : "Citra Grand City",
        city: "Palembang",
        state: "Sumatera Selatan",
        photo: "https://citragrandcity.co.id/wp-content/uploads/2021/10/Lingkungan-Tempat-Tinggal-1024x725.webp",
        availableUnit: 12,
        wifi: true,
        laundry: true
    },
    {
        id: 3,
        name : "Citra Grand City",
        city: "Palembang",
        state: "Sumatera Selatan",
        photo: "https://d3p0bla3numw14.cloudfront.net/news-content/img/2021/05/27100853/Caelus-BSD-City.jpg",
        availableUnit: 12,
        wifi: true,
        laundry: true
    }
  ]

  constructor() { }

  getAllHousingLocation(): HousingLocation[]{
    return this.housingLocationList;
  }

  getHousingLocationById(id: Number): HousingLocation | undefined{
    return this.housingLocationList.find(housingLocation => housingLocation.id == id);
  }
}
