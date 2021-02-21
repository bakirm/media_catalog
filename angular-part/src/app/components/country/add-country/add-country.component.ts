import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css'],
})
export class AddCountryComponent implements OnInit {
  country: Country = {
    countryname: '',
  };
  submitted = false;
  submittedsame = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  saveCountry(): void {
    const data = {
      countryname: this.country.countryname,
    };

    this.countryService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        this.submittedsame = false;
      },
      (error) => {
        if ((error.message = 'country_exists' && error.status == 500)) {
          this.submittedsame = true;
          this.submitted = false;
        }
        console.log(error);
      }
    );
  }

  newCountry(): void {
    this.submitted = false;
    this.country = {
      countryname: '',
    };
  }
}
