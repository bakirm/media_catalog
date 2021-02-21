import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGenreComponent } from './components/genre/add-genre/add-genre.component';
import { GenreDetailsComponent } from './components/genre/genre-details/genre-details.component';
import { GenreListComponent } from './components/genre/genre-list/genre-list.component';
import { AddArtistComponent } from './components/artist/add-artist/add-artist.component';
import { ArtistDetailsComponent } from './components/artist/artist-details/artist-details.component';
import { ArtistListComponent } from './components/artist/artist-list/artist-list.component';
import { CommonModule } from '@angular/common';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { CountryDetailsComponent } from './components/country/country-details/country-details.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { AddProviderComponent } from './components/provider_/add-provider/add-provider.component';
import { ProviderDetailsComponent } from './components/provider_/provider-details/provider-details.component';
import { ProviderListComponent } from './components/provider_/provider-list/provider-list.component';
import { AddMediaitemComponent } from './components/mediaitem/add-mediaitem/add-mediaitem.component';
import { MediaitemDetailsComponent } from './components/mediaitem/mediaitem-details/mediaitem-details.component';
import { MediaitemListComponent } from './components/mediaitem/mediaitem-list/mediaitem-list.component';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    AddGenreComponent,
    GenreDetailsComponent,
    GenreListComponent,
    AddArtistComponent,
    ArtistDetailsComponent,
    ArtistListComponent,
    AddCountryComponent,
    CountryDetailsComponent,
    CountryListComponent,
    AddProviderComponent,
    ProviderDetailsComponent,
    ProviderListComponent,
    AddMediaitemComponent,
    MediaitemDetailsComponent,
    MediaitemListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MomentModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
