import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/models/artist.model';
import { Country } from 'src/app/models/country.model';
import { Genre } from 'src/app/models/genre.model';
import { Mediaitem } from 'src/app/models/mediaitem.model';
import { Provider } from 'src/app/models/provider.model';
import { ArtistService } from 'src/app/services/artist.service';
import { CountryService } from 'src/app/services/country.service';
import { GenreService } from 'src/app/services/genre.service';
import { MediaitemService } from 'src/app/services/mediaitem.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-add-mediaitem',
  templateUrl: './add-mediaitem.component.html',
  styleUrls: ['./add-mediaitem.component.css'],
})
export class AddMediaitemComponent implements OnInit {
  mediaitem: Mediaitem = {
    mediaitemname: '',
  };
  submitted = false;
  genres?: Observable<Genre[]>;
  artists?: Observable<Artist[]>;
  countries?: Observable<Country[]>;
  providers?: Observable<Provider[]>;
  genrest?: Genre;
  artistt?: Artist;
  countryt?: Country;
  providert?: Provider;
  submittedsame = false;

  constructor(
    private mediaitemService: MediaitemService,
    private genreitemService: GenreService,
    private artistitemService: ArtistService,
    private countryitemService: CountryService,
    private provideritemService: ProviderService
  ) {}

  ngOnInit(): void {
    this.retrieveGenreitems();
    this.retreiveArtistitems();
    this.retreiveCountryitems();
    this.retreiveProvideritems();
  }

  retrieveGenreitems(): void {
    this.genres = this.genreitemService.getAll();
  }

  retreiveArtistitems(): void {
    this.artists = this.artistitemService.getAll();
  }
  retreiveCountryitems(): void {
    this.countries = this.countryitemService.getAll();
  }
  retreiveProvideritems(): void {
    this.providers = this.provideritemService.getAll();
  }

  saveMediaitem(): void {
    const data = {
      mediaitemname: this.mediaitem.mediaitemname,
      artist_id: this.artistt?.id,
      country_id: this.countryt?.id,
      genre_id: this.genrest?.id,
      provider_id: this.providert?.id,
    };

    this.mediaitemService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        this.submittedsame = false;
      },
      (error) => {
        console.log(error.message);
        if (error.message == "mediaitem_exists" && error.status == 500) {
          this.submittedsame = true;
          this.submitted = false;
        }
        console.log(error.message);
      }
    );
  }

  newMediaitem(): void {
    this.submitted = false;
    this.mediaitem = {
      mediaitemname: '',
    };
  }
}
