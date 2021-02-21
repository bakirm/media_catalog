import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css'],
})
export class AddArtistComponent implements OnInit {
  artist: Artist = {
    artistname: '',
  };
  submitted = false;
  submittedsame = false;

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {}

  saveArtist(): void {
    const data = {
      artistname: this.artist.artistname,
    };

    this.artistService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        this.submittedsame = false;
      },
      (error) => {
        if ((error.message = 'artist_exists' && error.status == 500)) {
          this.submittedsame = true;
          this.submitted = false;
        }
        console.log(error);
      }
    );
  }

  newArtist(): void {
    this.submitted = false;
    this.artist = {
      artistname: '',
    };
  }
}
