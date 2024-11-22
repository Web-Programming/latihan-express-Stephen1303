import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // protected housingLocationList: HousingLocation[] = [
  //   {
  //     id: 1,
  //     name : "Citra Grand City",
  //     city: "Palembang",
  //     state: "Sumatera Selatan",
  //     photo: "https://citragrandcity.co.id/wp-content/uploads/2022/07/Cover-1.webp",
  //     availableUnit: 12,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //       id: 2,
  //       name : "Citra Grand City",
  //       city: "Palembang",
  //       state: "Sumatera Selatan",
  //       photo: "https://citragrandcity.co.id/wp-content/uploads/2021/10/Lingkungan-Tempat-Tinggal-1024x725.webp",
  //       availableUnit: 12,
  //       wifi: true,
  //       laundry: true
  //   },
  //   {
  //       id: 3,
  //       name : "Citra Grand City",
  //       city: "Palembang",
  //       state: "Sumatera Selatan",
  //       photo: "https://d3p0bla3numw14.cloudfront.net/news-content/img/2021/05/27100853/Caelus-BSD-City.jpg",
  //       availableUnit: 12,
  //       wifi: true,
  //       laundry: true
  //   }
  // ]

  url = "http://localhost:3000/housing";

  constructor() { }

  async getAllHousingLocation(): Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
    //return this.housingLocationList.find(housingLocation => housingLocation.id == id);
  }

  submitApplication(firstName: String, lastName: String, email: String){
    console.log(firstName, lastName, email);
  }
}
