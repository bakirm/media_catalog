import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreListComponent } from './components/genre/genre-list/genre-list.component';
import { GenreDetailsComponent } from './components/genre/genre-details/genre-details.component';
import { AddGenreComponent } from './components/genre/add-genre/add-genre.component';
import { AddArtistComponent } from './components/artist/add-artist/add-artist.component';
import { ArtistDetailsComponent } from './components/artist/artist-details/artist-details.component';
import { ArtistListComponent } from './components/artist/artist-list/artist-list.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { CountryDetailsComponent } from './components/country/country-details/country-details.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { ProviderListComponent } from './components/provider_/provider-list/provider-list.component';
import { ProviderDetailsComponent } from './components/provider_/provider-details/provider-details.component';
import { AddProviderComponent } from './components/provider_/add-provider/add-provider.component';
import { MediaitemListComponent } from './components/mediaitem/mediaitem-list/mediaitem-list.component';
import { MediaitemDetailsComponent } from './components/mediaitem/mediaitem-details/mediaitem-details.component';
import { AddMediaitemComponent } from './components/mediaitem/add-mediaitem/add-mediaitem.component';

const routes: Routes = [
  { path: '', redirectTo: 'genre', pathMatch: 'full' },
  { path: 'genre', component: GenreListComponent },
  { path: 'genre/:id', component: GenreDetailsComponent },
  { path: 'add-genre', component: AddGenreComponent },

  { path: 'artists', component: ArtistListComponent },
  { path: 'artists/:id', component: ArtistDetailsComponent },
  { path: 'add_artist', component: AddArtistComponent },

  { path: 'country', component: CountryListComponent },
  { path: 'country/:id', component: CountryDetailsComponent },
  { path: 'add_country', component: AddCountryComponent },

  { path: 'provider', component: ProviderListComponent },
  { path: 'provider/:id', component: ProviderDetailsComponent },
  { path: 'add_provider', component: AddProviderComponent },

  { path: 'mediaitem', component: MediaitemListComponent },
  { path: 'mediaitem/:id', component: MediaitemDetailsComponent },
  { path: 'add_mediaitem', component: AddMediaitemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
