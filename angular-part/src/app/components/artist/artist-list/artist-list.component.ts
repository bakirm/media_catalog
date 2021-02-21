import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { Observable } from 'rxjs';
import { ArtistService } from 'src/app/services/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
})
export class ArtistListComponent implements OnInit {
  artists?: Observable<Artist[]>;

  constructor(private artistService: ArtistService, private router: Router) {}

  ngOnInit(): void {
    this.retreiveArtists();
  }

  retreiveArtists(): void {
    this.artists = this.artistService.getAll();
  }

  deleteArtist(id: number): void {
    this.artistService.delete(id).subscribe(
      (data) => {
        console.log(data);
        this.retreiveArtists();
      },
      (error) => console.log(error)
    );
  }

  artistDetails(id: number) {
    this.router.navigate(['artists', id]);
  }
}
