import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent implements OnInit {
  id?: number;
  country?: Country;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.country = new Country();
    this.id = this.route.snapshot.params['id'];
    this.countryService.get(this.id).subscribe(
      (data) => {
        console.log(data);
        this.country = data;
      },
      (error) => console.log(error)
    );
  }

  getCountry(id: string): void {
    this.countryService.get(id).subscribe(
      (data) => {
        this.country = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateCountry() {
    this.countryService.update(this.id, this.country).subscribe(
      (data) => {
        console.log(data);
        this.country = new Country();
        this.goToCountries();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateCountry();
  }

  goToCountries() {
    this.router.navigate(['/country']);
  }
}
