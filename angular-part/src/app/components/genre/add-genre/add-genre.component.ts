import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css'],
})
export class AddGenreComponent implements OnInit {
  genre: Genre = {
    genrename: '',
  };
  submitted = false;
  submittedsame = false;

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {}

  saveGenre(): void {
    const data = {
      genrename: this.genre.genrename,
    };

    this.genreService.create(data).subscribe(
      (response) => {
        
           console.log(response);
          this.submitted = true;
          this.submittedsame = false;
             
       
      },
      (error) => {
        if (error.message = "genre_exists" && error.status==500) {
          this.submittedsame = true;
          this.submitted = false;
        }
        console.log(error);
      }
    );
  }

  newGenre(): void {
    this.submitted = false;
    this.genre = {
      genrename: '',
    };
  }
}
