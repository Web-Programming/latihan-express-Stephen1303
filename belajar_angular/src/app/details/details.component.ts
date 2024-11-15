import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core'; //inject -> untuk memanggil id?
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocationId }}
    </p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  //untuk menampung id
  route : ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  housingService: HousingService = inject(HousingService);
  housingLocation : HousingLocation | undefined;

  constructor(){
    this.housingLocationId = Number(this.route.snapshot.params['id']); //buat constructor untuk MENYETTING id sesuai dengan yang dikirim
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
    console.table(this.housingLocation);
  }
}
