import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  countries?: Observable<Country[]>;

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.retreiveCountries();
  }

  retreiveCountries(): void {
    this.countries = this.countryService.getAll();
  }

  deleteCountry(id: number): void {
    this.countryService.delete(id).subscribe(
      (data) => {
        console.log(data);
        this.retreiveCountries();
      },
      (error) => console.log(error)
    );
  }

  countryDetails(id: number) {
    this.router.navigate(['country', id]);
  }
}
