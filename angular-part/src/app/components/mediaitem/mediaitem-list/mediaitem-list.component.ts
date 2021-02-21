import { Component, OnInit } from '@angular/core';
import { Mediaitem } from 'src/app/models/mediaitem.model';
import { Observable } from 'rxjs';
import { MediaitemService } from 'src/app/services/mediaitem.service';
import { SearchMediaService } from 'src/app/services/searchmedia.service';
import { Router } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';
import { Artist } from 'src/app/models/artist.model';
import { GenreService } from 'src/app/services/genre.service';
import { Country } from 'src/app/models/country.model';
import { Provider } from 'src/app/models/provider.model';
import { ArtistService } from 'src/app/services/artist.service';
import { CountryService } from 'src/app/services/country.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-mediaitem-list',
  templateUrl: './mediaitem-list.component.html',
  styleUrls: ['./mediaitem-list.component.css'],
})
export class MediaitemListComponent implements OnInit {
  mediaitems?: Observable<Mediaitem[]>;
  mediaitemt?: Mediaitem;
  genres?: Observable<Genre[]>;
  countries?: Observable<Country[]>;
  providers?: Observable<Provider[]>;
  genrest?: Genre;
  artistt?: Artist;
  countryt?: Country;
  providert?: Provider;
  mediaitemnamesearch?: any;
  errors: any;
  temporary!: any;
  temporarygenre?: any;
  temporarycountry?: any;
  temporarygenrename: any;
  temporarycountryname:any;
  isdesc?: boolean = true;
  name?: any;
  selectedValue?: any;
  options = ['Newest first', 'Oldest first'];

  constructor(
    private mediaitemService: MediaitemService,
    private router: Router,
    private genreitemService: GenreService,
    private countryitemService: CountryService,
    private provideritemService: ProviderService
  ) {}

  ngOnInit(): void {
    this.retrieveMediaitems();
    this.retrieveGenreitems();
    this.retrieveArtistitems();
    this.retrieveProvideritems();
  }

  retrieveMediaitems(): void {
    this.mediaitems = this.mediaitemService.getAll();
  }

  retrieveGenreitems(): void {
    this.genres = this.genreitemService.getAll();
  }

  retrieveArtistitems(): void {
    this.countries = this.countryitemService.getAll();
  }

  retrieveProvideritems(): void {
    this.providers = this.provideritemService.getAll();
  }

  onSelectedGenreChange(value: any) {
     if (this.temporary === undefined) {
       this.temporary = '';
     }
    let data = {
      mediaitemname: this.temporary,
      genrename: this.temporarygenrename,
      genre_id: value.id,
      country_id: this.temporarycountry,
    };
      
    console.log(data);
    this.mediaitemService
      .sorter(data, this.isdesc, (this.name = 'genre'))
      .subscribe(
        (response) => {
          this.mediaitemnamesearch = response;
          this.temporarygenre = data.genre_id;
          this.temporarygenrename = data.genrename;
          console.log(response);
          this.errors = '';
        },
        (error) => {
          console.log(error);
          this.errors = error;
          this.mediaitemnamesearch = '';
        }
      );
  }

  onSelectedCountryChange(value: any) {
    if (this.temporary === undefined) {
      this.temporary = '';
    }
    let data = {
      mediaitemname: this.temporary,
      countryname: this.temporarycountryname,
      country_id: value.id,
      genre_id: this.temporarygenre,
    };
    console.log(data);
    this.mediaitemService
      .sorter(data, this.isdesc, (this.name = 'country'))
      .subscribe(
        (response) => {
          this.mediaitemnamesearch = response;
          this.temporarycountry = data.country_id;
          this.temporarycountryname = data.countryname;
          console.log(response);
          this.errors = '';
        },
        (error) => {
          console.log(error);
          this.errors = error;
          this.mediaitemnamesearch = '';
        }
      );
  }

  searchMediaitem(): void {
    let data = {
      mediaitemname: this.mediaitemt,
      genrename: this.mediaitemt,
      artistname: this.mediaitemt,
      providername: this.mediaitemt,
      countryname: this.mediaitemt,
      genre_id: this.temporarygenre,
      country_id: this.temporarycountry
    };

    console.log(data);
    this.mediaitemService
      .createSearch(data, this.isdesc, (this.name = 'mediaitem'))
      .subscribe(
        (response) => {
          this.mediaitemnamesearch = response;
          this.temporary = data.mediaitemname;
          this.temporarygenrename = data.genrename;
          this.temporarycountryname = data.countryname;
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onSelectedChange(value: any) {
    let data = {
      mediaitemname: this.temporary,
      countryname: this.temporarycountryname,
      genrename: this.temporarygenrename,
      genre_id: this.temporarygenre,
      country_id: this.temporarycountry,
    };
    this.selectedValue = value;
    console.log(data);
    if (value == 'Newest first') {
      this.mediaitemService
        .sorter(data, (this.isdesc = false), this.name)
        .subscribe(
          (response) => {
            this.mediaitemnamesearch = response;
            console.log(response);
            this.errors = '';
          },
          (error) => {
            console.log(error);
            this.errors = error;
            this.mediaitemnamesearch = '';
          }
        );
    }

    if (value == 'Oldest first') {
      this.mediaitemService
        .sorter(data, (this.isdesc = true), this.name)
        .subscribe(
          (response) => {
            this.mediaitemnamesearch = response;
            console.log(response);
            this.errors = '';
          },
          (error) => {
            console.log(error);
            this.errors = error;
            this.mediaitemnamesearch = '';
          }
        );
    }
  }

  deleteMediaitem(id: number): void {
    this.mediaitemService.delete(id).subscribe(
      (data) => {
        console.log(data);
        this.retrieveMediaitems();
      },
      (error) => console.log(error)
    );
  }

  mediaitemDetails(id: number) {
    this.router.navigate(['mediaitem', id]);
  }
}
