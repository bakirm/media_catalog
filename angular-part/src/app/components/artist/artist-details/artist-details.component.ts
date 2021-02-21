import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
})
export class ArtistDetailsComponent implements OnInit {
  id?: number;
  artist?: Artist;

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.artist = new Artist();
    this.id = this.route.snapshot.params['id'];
    this.artistService.get(this.id).subscribe(
      (data) => {
        console.log(data);
        this.artist = data;
      },
      (error) => console.log(error)
    );
  }

  getArtist(id: string): void {
    this.artistService.get(id).subscribe(
      (data) => {
        this.artist = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateArtist() {
    this.artistService.update(this.id, this.artist).subscribe(
      (data) => {
        console.log(data);
        this.artist = new Artist();
        this.goToArtists();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateArtist();
  }

  goToArtists() {
    this.router.navigate(['/artists']);
  }
}
